import ReactDOM from "react-dom";
import { FC } from "react";
import classes from "./Backdrop.module.scss";

const Backdrop: FC<{ onClick: () => void }> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={onClick}></div>,
    document.getElementById("backdrop-hook") as HTMLElement
  );
};

export default Backdrop;
