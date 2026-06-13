import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  it("renders section heading", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders Full Stack Engineer title", () => {
    render(<About />);
    expect(screen.getByText(/Full Stack Engineer/)).toBeInTheDocument();
  });

  it("renders WorkWave RealGreen mention", () => {
    render(<About />);
    expect(screen.getByText(/WorkWave RealGreen/)).toBeInTheDocument();
  });

  it("renders years of experience", () => {
    render(<About />);
    expect(screen.getByText(/5\+ years/)).toBeInTheDocument();
  });

  it("renders tech stack mentions", () => {
    render(<About />);
    expect(screen.getByText(/C# and \.NET/)).toBeInTheDocument();
    expect(screen.getByText(/React and Angular/)).toBeInTheDocument();
  });

  it("renders performance improvement mention", () => {
    render(<About />);
    expect(screen.getByText(/99%/)).toBeInTheDocument();
  });
});
