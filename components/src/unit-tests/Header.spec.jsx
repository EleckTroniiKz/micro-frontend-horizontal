import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../Header.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";

setupMock();

describe("Header", () => {
  const mockTitleURL = "URL1";
  const mockTitleText = "Text1";
  const mockSecondURL = "URL2";
  const mockSecondText = "Text2";

  it("renders Header", () => {
    const result = render(
      <BrowserRouter>
        <Header
          titleURL={mockTitleURL}
          titleText={mockTitleText}
          secondURL={mockSecondURL}
          secondText={mockSecondText}
        />
      </BrowserRouter>
    );

    const headerContainer = result.container.querySelector("div").firstChild;

    expect(result).not.toBeNull();
    expect(headerContainer).not.toBeNull();
  });

  it("shows Header Text Parts", () => {
    const result = render(
      <BrowserRouter>
        <Header
          titleURL={mockTitleURL}
          titleText={mockTitleText}
          secondURL={mockSecondURL}
          secondText={mockSecondText}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(mockTitleText)).not.toBeNull();
    expect(screen.getByText(mockSecondText)).not.toBeNull();
  });

  it("contains anchortags, with wanted urls", () => {
    const result = render(
      <BrowserRouter>
        <Header
          titleURL={mockTitleURL}
          titleText={mockTitleText}
          secondURL={mockSecondURL}
          secondText={mockSecondText}
        />
      </BrowserRouter>
    );

    const anchorTags = result.container.getElementsByTagName("a");

    expect(anchorTags.length).toBe(2);
    expect(anchorTags[0].href).toContain(mockTitleURL);
    expect(anchorTags[1].href).toContain(mockSecondURL);
  });
});

function setupMock() {
  jest.mock("react-router-dom", () => ({
    Button: () => <div>Button</div>,
  }));
}
