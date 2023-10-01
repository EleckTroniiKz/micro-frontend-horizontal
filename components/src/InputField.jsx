import React from "react";

export default function InputField({ onChange, value, type, placeholder, id }) {
  return (
    <div className="w-full">
      <input
        data-testid={id}
        className="w-full w-3/4 rounded-lg bg-red-600 p-2 text-white"
        value={value}
        type={type}
        onChange={(e) => onChange(e)}
        placeholder={placeholder || ""}
      />
    </div>
  );
}
