import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";

import { getUsers, deleteUser } from "./users";

import UserList from "components/UserList";
import Header from "components/Header";
import Footer from "components/Footer";

export default function HomeContent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const FooterURL =
    "https://github.com/EleckTroniiKz/micro-frontend-horizontal";

  return (
    <div>
      <Header
        titleURL="/"
        titleText="Horizontal"
        secondURL="/user/-1"
        secondText="Add User"
      />
      <UserList users={users} deleteUser={deleteUser} />
      <Footer url={FooterURL} text="Github Repo" />
    </div>
  );
}
