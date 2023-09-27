import React from "react";

export default function Footer({ url, text }) {
  return (
    <div className="p-5 bg-red-600 text-white text-center">
      <a href={url} target="_blank">
        {text}
      </a>
    </div>
  );
}
