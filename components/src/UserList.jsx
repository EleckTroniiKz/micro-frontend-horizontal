import React from "react";
import { Link } from "react-router-dom";

export default function UserList({ users, onEdit }) {
  return (
    <div className="p-3 bg-red-600 text-white text-left w-full rounded-lg">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
