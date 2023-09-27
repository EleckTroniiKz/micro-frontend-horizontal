import { render, fireEvent, screen } from "@testing-library/react";
import InputField from "../InputField.jsx";
import React from "react";
import "@testing-library/jest-dom";

describe("InputField", () => {
  test("renders input field with placeholder", () => {
    const placeholderText = "Enter something";
    render(<InputField placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input field with a default value", () => {
    const defaultValue = "Default Value";
    render(<InputField value={defaultValue} />);
    const inputElement = screen.getByDisplayValue(defaultValue);
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange when input value changes", () => {
    const handleChange = jest.fn();
    render(<InputField onChange={handleChange} />);

    const inputElement = screen.getByTestId("input-field");
    const newValue = "New Value";

    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(handleChange).toHaveBeenCalled();
  });

  test("renders input field with a specific type", () => {
    const inputType = "testType";
    render(<InputField type={inputType} />);

    const inputElement = screen.getByTestId("input-field");
    expect(inputElement).toHaveAttribute("type", inputType);
  });
});
