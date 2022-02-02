import classes from "./Contact.module.scss";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHttpClient } from "../hooks/http-hook";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorModal from "../shared/Modal/ErrorModal";
import Button from "../shared/Button";

export const Contact: React.FC = () => {
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<{ [x: string]: string }> = async (data) => {
    if (data) {
      try {
        await sendRequest(
          `${process.env.REACT_APP_CONTACT_URL}/contact`,
          "POST",
          JSON.stringify(data),
          {
            "Content-Type": "application/json",
          }
        );
        setSentSuccessfully(true);
        reset();
      } catch (err) {}
    } else {
      console.log("There is an error");
    }
  };
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />

      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          {isLoading && (
            <div className={classes.loadingForm}>
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && !error && sentSuccessfully && (
            <div className={classes.successMsg}>
              <p>Message successfully sent!</p>
            </div>
          )}
          <input
            className={errors?.firstName && classes.invalid}
            placeholder="First Name"
            {...register("firstName", {
              required: "Enter your first name",
              maxLength: {
                value: 16,
                message: "Max 16 characters.",
              },
            })}
          />
          <div className={classes.errorBox}>
            {errors?.firstName && (
              <p>{errors?.firstName?.message || "Error"}</p>
            )}
          </div>
          <input
            className={errors?.lastName && classes.invalid}
            placeholder="Last Name"
            {...register("lastName", {
              required: "Enter your last name",
              maxLength: {
                value: 16,
                message: "Max 16 characters.",
              },
            })}
          />
          <div className={classes.errorBox}>
            {errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}
          </div>
          <input
            className={errors?.email && classes.invalid}
            placeholder="E-mail"
            {...register("email", {
              required: "Enter an email",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email",
              },
            })}
          />
          <div className={classes.errorBox}>
            {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
          </div>
          <textarea
            className={errors?.formMessage && classes.invalid}
            placeholder="Write a message..."
            {...register("formMessage", {
              required: "Write a message",
              minLength: {
                value: 10,
                message: "Enter atleast 10 characters",
              },
              maxLength: {
                value: 1000,
                message: "Max 1000 characters!",
              },
            })}
          />
          <div className={classes.errorBox}>
            {errors?.formMessage && (
              <p>{errors?.formMessage?.message || "Error"}</p>
            )}
          </div>
          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
