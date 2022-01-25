import classes from "./Contact.module.scss";
import { useForm } from "react-hook-form";
export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data: any) => {
    if (data) {
      console.log(JSON.stringify(data));
      reset();
    } else {
      console.log("There is an error");
    }
  };
  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
          {errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}
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
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
