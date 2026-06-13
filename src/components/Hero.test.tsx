import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("../Images/kenny.gif", () => ({ default: "kenny.gif" }));

import Hero from "./Hero";

describe("Hero", () => {
  it("renders name", () => {
    render(<Hero />);
    expect(screen.getByText(/Kenneth Melendez/)).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Hero />);
    expect(screen.getByText("Full Stack Engineer")).toBeInTheDocument();
  });

  it("renders tagline with NYC and years", () => {
    render(<Hero />);
    expect(screen.getByText(/New York City/)).toBeInTheDocument();
  });

  it("renders GitHub link pointing to correct URL", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/KennethMelendez"
    );
  });

  it("renders LinkedIn link pointing to correct URL", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/kennethmelendez"
    );
  });

  it("renders Download Resume link pointing to /resume.pdf", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Download Resume" })).toHaveAttribute(
      "href",
      "/resume.pdf"
    );
  });

  it("renders Email Me link with protonmail address", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Email Me" })).toHaveAttribute(
      "href",
      "mailto:kennethmelendez@protonmail.com"
    );
  });

  it("renders avatar gif", () => {
    render(<Hero />);
    expect(screen.getByAltText("Kenneth Melendez")).toBeInTheDocument();
  });
});
