import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getUserById, saveUser } from "home/users";

import InputField from "components/InputField";
import Button from "components/Button";

export default function UserDetailEditor() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id && id != -1) {
      getUserById(id).then((user) => setUser(user));
    } else {
      setUser({ name: "", gender: "", height: "", country: "" });
    }
  }, [id]);

  if (!user) return null;

  return (
    <div className="rounded-lg bg-yellow-400 p-5">
      <div className="flex m-5">
        <p className="w-1/4">Name: </p>
        <InputField
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className="flex m-5">
        <p className="w-1/4">Gender: </p>
        <InputField
          value={user.gender}
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        />
      </div>
      <div className="flex m-5">
        <p className="w-1/4">Country: </p>
        <InputField
          value={user.country}
          onChange={(e) => setUser({ ...user, country: e.target.value })}
        />
      </div>
      <div className="flex m-5">
        <p className="w-1/4">Height: </p>
        <InputField
          value={user.height}
          onChange={(e) => setUser({ ...user, height: e.target.value })}
        />
      </div>
      <Button onClick={() => saveUser(user)}>
        <Link id="addUser" to="/">
          SaveUser
        </Link>
      </Button>
    </div>
  );
}
