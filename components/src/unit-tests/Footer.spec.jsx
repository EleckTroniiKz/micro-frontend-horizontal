import { render, fireEvent } from "@testing-library/react";
import Footer from "../Footer.jsx";
import React from "react";

describe("Footer", () => {
  it("renders Footer", () => {
    const result = render(<Footer url="" text="Text" />);

    const footerContainer = result.container.querySelector("div");

    expect(result).not.toBeNull();
    expect(footerContainer).not.toBeNull();
  });

  it("renders text passed to Footer", () => {
    const mockText = "Text";
    const result = render(<Footer url="URL" text={mockText} />);

    expect(result.container.querySelector("a").textContent).toBe(mockText);
  });

  it("contains the URL as a href element in the anchor tag", () => {
    const mockURL = "URL";
    const result = render(<Footer url={mockURL} text="" />);
    const anchorElement = result.container.querySelector("a");
    expect(anchorElement.getAttribute("href")).toBe(mockURL);
  });
});
