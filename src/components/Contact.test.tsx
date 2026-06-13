import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  it("renders heading", () => {
    render(<Contact />);
    expect(screen.getByText("Let's build something.")).toBeInTheDocument();
  });

  it("renders Email link with protonmail address", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:kennethmelendez@protonmail.com"
    );
  });

  it("renders LinkedIn link", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/kennethmelendez"
    );
  });

  it("renders GitHub link", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/KennethMelendez"
    );
  });

  it("has section id for anchor nav", () => {
    render(<Contact />);
    expect(document.getElementById("contact")).toBeInTheDocument();
  });
});
