import { render, fireEvent, screen } from "@testing-library/react";
import UserDetailEditor from "./UserDetailEditor.jsx";
import React from "react";
import "@testing-library/jest-dom";

const mockSaveUser = console.log("HEy");

describe("UserDetailEditor", () => {
  test("renders UserDetailEditor with its components", () => {
    const result = render(<UserDetailEditor />);

    expect(result.container.querySelectorAll("input").length).toBe(4);
    expect(result.container.querySelectorAll("button").length).toBe(1);
    expect(result.container.querySelectorAll("p").length).toBe(4);
  });

  test("renders component, with user data", () => {});

  test("renders component, without user data", () => {});
});

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: 1,
  }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [
    { id: 1, name: "TestUser", gender: "Male", height: "180", country: "UK" },
    jest.fn(),
  ],
}));

jest.mock("home/users", () => ({
  saveUser: () => mockSaveUser,
  getUserById: (id) =>
    Promise.resolve({
      id: id,
      name: "TestUser",
      gender: "Male",
      height: "180",
      country: "Germany",
    }),
}));
