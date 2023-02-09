import { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import User from "./models/UserModel";

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUserHandler = function (newUser: User) {
    setUsersList((prevState) => {
      return [...prevState, newUser];
    });
  };

  return (
    <Fragment>
      <AddUser onUserAddition={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </Fragment>
  );
}

export default App;
