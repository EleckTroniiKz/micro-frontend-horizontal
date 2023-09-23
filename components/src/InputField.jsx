import React from "react";

export default function InputField({ onChange, value, type, placeholder }) {
  return (
    <div className="w-full">
      <input
        className="w-full w-3/4 rounded-lg bg-red-600 p-2 text-white"
        value={value}
        type={type}
        onChange={(e) => onChange(e)}
        placeholder={placeholder || ""}
      />
    </div>
  );
}
