import { render, fireEvent } from "@testing-library/react";
import Button from "../Button.jsx";
import React from "react";

const clickMock = jest.fn();

describe("Button", () => {
  it("renders Button", () => {
    const result = render(<Button onClick={clickMock} />);

    const buttonElement = result.container.querySelector("button");

    expect(result).not.toBeNull();
    expect(buttonElement).not.toBeNull();
  });

  it("calls onClick Method, if Button clicked", () => {
    const result = render(<Button onClick={clickMock} />);

    const buttonElement = result.container.querySelector("button");

    fireEvent.click(buttonElement);
    expect(clickMock).toHaveBeenCalled();
  });
});
