import React, { MouseEventHandler, useState } from "react";
import ErrorModel from "../../models/ErrorModel";
import User from "../../models/UserModel";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

type AddUserProps = {
  onUserAddition: (newUser: User) => void;
};

const AddUser: React.FunctionComponent<AddUserProps> = function (props) {
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [error, setError] = useState<ErrorModel | null>(null);

  const usernameChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    function (event) {
      setUsername(event.target.value);
    };
  const ageChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    function (event) {
      setAge(event.target.value);
    };
  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = function (
    event
  ) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valis name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    setUsername("");
    setAge("");
    props.onUserAddition({ id: Math.random(), username: username, age: +age });
  };

  const modalCloseHandler: React.MouseEventHandler<HTMLButtonElement> =
    function (event) {
      setError(null);
    };

  return (
    <div>
      {error ? (
        <ErrorModal error={error} onCloseModal={modalCloseHandler}></ErrorModal>
      ) : null}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
