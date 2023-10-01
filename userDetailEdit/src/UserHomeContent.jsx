import React, { useState, useEffect } from "react";

import { getUsers } from "home/users";

import Header from "components/Header";
import Footer from "components/Footer";
import UserDetailEditor from "./UserDetailEditor";

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
        secondText="Add-User"
      />
      <UserDetailEditor users={users} />
      <Footer url={FooterURL} text="Github Repo" />
    </div>
  );
}
