import React from "react";
import { Link } from "react-router-dom";

export default function Header({ titleURL, titleText, secondURL, secondText }) {
  return (
    <div className="p-5 bg-red-600 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to={titleURL}>{titleText}</Link>
          <div className="mx-5">|</div>
          <Link to={secondURL}>{secondText}</Link>
        </div>
        <div className="flex-end relative"></div>
      </div>
    </div>
  );
}
