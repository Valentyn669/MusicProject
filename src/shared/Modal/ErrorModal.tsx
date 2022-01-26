import { FC } from "react";

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
      footer={<button onClick={onClear}>Okay</button>}
    >
      <p>{error}</p>
    </Modal>
  );
};

export default ErrorModal;
