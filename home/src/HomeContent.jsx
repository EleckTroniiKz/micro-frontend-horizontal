import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";

import { getUsers } from "./users";

//const UserList = React.lazy("components/UserList");
import UserList from "components/UserList";

export default function HomeContent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}
