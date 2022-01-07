import classes from "./Contact.module.scss";
export const Contact: React.FC = () => {
  return (
    <form className={classes.formContainer}>
      <input placeholder="First name" />
      <input placeholder="Last name" />
      <textarea />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
