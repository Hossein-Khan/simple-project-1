import React from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

const Button: React.FunctionComponent<ButtonProps> = function (props) {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
