import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  it("renders section heading", () => {
    render(<Skills />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders all four category labels", () => {
    render(<Skills />);
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Cloud & Tools")).toBeInTheDocument();
  });

  it("renders TypeScript badge", () => {
    render(<Skills />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders React badge", () => {
    render(<Skills />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders AWS badge", () => {
    render(<Skills />);
    expect(screen.getByText("AWS (Certified)")).toBeInTheDocument();
  });

  it("has section id for anchor nav", () => {
    render(<Skills />);
    expect(document.getElementById("skills")).toBeInTheDocument();
  });
});
