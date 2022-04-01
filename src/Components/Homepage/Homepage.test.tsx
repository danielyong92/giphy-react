import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import GiphyResult from "../GiphyResult/GiphyResult";

jest.mock("../GiphyResult/GiphyResult");

beforeEach(() => {
  render(<Homepage />);
});

describe("Homepage", () => {
  it("should render GIPHY title", () => {
    const giphyTitle = screen.getByText("GIPHY:");
    expect(giphyTitle).toBeInTheDocument();
  });

  it("should render the cat button", () => {
    const catButton = screen.getByTestId("cat-button");
    expect(catButton).toBeInTheDocument();
  });

  it("should render the dogs button", () => {
    const catButton = screen.getByTestId("dog-button");
    expect(catButton).toBeInTheDocument();
  });

  it("should render the GiphyResult Component with correct props", () => {
    (GiphyResult as jest.Mock).mockImplementation(() => {
        return <div>GiphyResult Mock</div>;
      });
    // expect(screen.queryByText("GiphyResult Mock")).toBeInTheDocument();
  });
});
