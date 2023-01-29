import { useState } from "react";
import User from "../../models/UserModel";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

type UsersListProps = {
  users: User[];
};

const UsersList: React.FunctionComponent<UsersListProps> = function (props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
