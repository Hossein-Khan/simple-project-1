import { EventHandler, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import User from "./models/UserModel";

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUserHandler = function (newUser: User) {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { id: newUser.id, username: newUser.username, age: newUser.age },
      ];
    });
  };

  return (
    <div>
      <AddUser onUserAddition={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
