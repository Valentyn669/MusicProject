import classes from "./Contact.module.scss";
export const Contact: React.FC = () => {
  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <input placeholder="First name" />
        <input placeholder="Last name" />
        <textarea />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
