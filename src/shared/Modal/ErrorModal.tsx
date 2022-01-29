import { FC } from "react";
import Button from "../Button";
import Modal from "./Modal";

const ErrorModal: FC<{ onClear: () => void; error: string | null }> = ({
  onClear,
  error,
}) => {
  return (
    <Modal
      onCancel={onClear}
      header="An Error Occurred!"
      show={!!error}
      footer={<Button onClick={onClear}>Okay</Button>}
    >
      <p>{error}</p>
    </Modal>
  );
};

export default ErrorModal;
