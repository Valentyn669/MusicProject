import "./Modal.scss";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";
import { FC } from "react";

interface IModalOverlay {
  header: string;
  footer: JSX.Element;
  headerClass?: string;
  className?: string;
  style?: string;
  onSubmit?: () => void;
  contentClass?: string;
  footerClass?: string;
}

const ModalOverlay: FC<IModalOverlay> = ({
  className,
  style,
  headerClass,
  header,
  onSubmit,
  contentClass,
  children,
  footerClass,
  footer,
}) => {
  const content = (
    <div className={`modal ${className} ${style}`}>
      <header className={`modalHeader ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
        <div className={`modalContent ${contentClass}`}>{children}</div>
        <footer className={`modalFooter ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement
  );
};

interface IModal {
  onCancel: () => void;
  show: boolean;
  header: string;
  footer: JSX.Element;
}

const Modal: FC<IModal> = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};
export default Modal;
