import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("./Images/kenny.gif", () => ({ default: "kenny.gif" }));
vi.mock("./components/ManhattanGrid", () => ({ default: () => null }));

import App from "./App";

describe("App", () => {
  it("renders the name in the hero", () => {
    render(<App />);
    expect(screen.getAllByText(/Kenneth Melendez/).length).toBeGreaterThan(0);
  });

  it("renders the Tech Stack section", () => {
    render(<App />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders the Experience section", () => {
    render(<App />);
    expect(screen.getAllByText("Experience").length).toBeGreaterThan(0);
  });

  it("renders the contact heading", () => {
    render(<App />);
    expect(screen.getByText("Let's build something.")).toBeInTheDocument();
  });
});
