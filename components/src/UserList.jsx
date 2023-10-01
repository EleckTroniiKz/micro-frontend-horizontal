import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button.jsx";

export default function UserList({ users, deleteUser }) {
  const [deleted, setDeleted] = React.useState(false);

  if (deleted) {
    setDeleted(false);
    location.reload();
  }
  if (!users || users.length === 0) {
    return <div>There are no users!</div>;
  }

  return (
    <div
      id="user-list"
      className="p-3 bg-red-600 text-white text-left w-full rounded-lg"
    >
      <table className="w-full">
        <tbody className="w-full divide-y divide-black divide-x">
          {users?.map((user) => (
            <tr key={user.id} className="w-full table flex ">
              <td className="w-1/4 ">{user.name}</td>
              <td className="w-1/4 ">{user.gender}</td>
              <td className="w-1/4 ">{user.country}</td>
              <td className="w-1/4 ">{user.height}</td>
              <td className="w-1/5 ">
                {user.id !== 0 && (
                  <Link to={`/users/${user.id}`}>
                    <div>Edit</div>
                  </Link>
                )}
              </td>
              <td id="delete">
                <Link to={`/`}>
                  <Button
                    onClick={() => {
                      deleteUser(user.id);
                      setDeleted(true);
                    }}
                  >
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
