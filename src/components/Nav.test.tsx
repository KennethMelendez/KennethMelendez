import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav", () => {
  it("renders the name", () => {
    render(<Nav />);
    expect(screen.getByText("Kenneth Melendez")).toBeInTheDocument();
  });

  it("renders Skills anchor link", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute("href", "#skills");
  });

  it("renders Experience anchor link", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("href", "#experience");
  });

  it("renders Contact anchor link", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });
});
