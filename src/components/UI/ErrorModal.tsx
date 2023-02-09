import { Fragment } from "react";
import { createPortal } from "react-dom";
import ErrorModel from "../../models/ErrorModel";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

type ErrorModalProps = {
  error: ErrorModel;
  onCloseModal: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};

const ErrorModal: React.FunctionComponent<ErrorModalProps> = function (props) {
  return (
    <Fragment>
      {createPortal(
        <div className={styles.backdrop} onClick={props.onCloseModal}></div>,
        document.getElementById("backdrop") as HTMLElement
      )}
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onCloseModal}>
            Ok
          </Button>
        </footer>
      </Card>
    </Fragment>
  );
};

export default ErrorModal;
