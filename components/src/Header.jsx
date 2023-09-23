import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="p-5 bg-red-600 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">MFE-HorizontalSplit</Link>
          <div className="mx-5">|</div>
          <Link id="addUser" to="/user/-1">
            Add User
          </Link>
        </div>
        <div className="flex-end relative"></div>
      </div>
    </div>
  );
}
