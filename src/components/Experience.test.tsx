import { render, screen } from "@testing-library/react";
import Experience from "./Experience";

describe("Experience", () => {
  it("renders section heading", () => {
    render(<Experience />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders WorkWave card", () => {
    render(<Experience />);
    expect(screen.getByText("WorkWave")).toBeInTheDocument();
    expect(screen.getByText("Full Stack Engineer")).toBeInTheDocument();
  });

  it("renders FYE card", () => {
    render(<Experience />);
    expect(screen.getByText("FYE (For Your Entertainment)")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer II")).toBeInTheDocument();
  });

  it("renders Bestpass card", () => {
    render(<Experience />);
    expect(screen.getByText("Bestpass")).toBeInTheDocument();
    expect(screen.getByText("Associate Software Engineer")).toBeInTheDocument();
  });

  it("renders key performance metric text", () => {
    render(<Experience />);
    expect(screen.getByText(/80–99% improvement/)).toBeInTheDocument();
  });

  it("renders millions of users bullet", () => {
    render(<Experience />);
    expect(screen.getByText(/millions of users/)).toBeInTheDocument();
  });

  it("has section id for anchor nav", () => {
    render(<Experience />);
    expect(document.getElementById("experience")).toBeInTheDocument();
  });
});
