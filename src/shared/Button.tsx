import { FC } from "react";
import classes from "./Button.module.scss";

interface IButton {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ children, onClick, type, disabled }) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
