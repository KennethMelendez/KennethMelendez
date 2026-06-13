import { render, screen } from "@testing-library/react";
import CertsEducation from "./CertsEducation";

describe("CertsEducation", () => {
  it("renders Certifications heading", () => {
    render(<CertsEducation />);
    expect(screen.getByText("Certifications")).toBeInTheDocument();
  });

  it("renders AWS cert title", () => {
    render(<CertsEducation />);
    expect(screen.getByText("AWS Certified")).toBeInTheDocument();
  });

  it("renders AWS cert description", () => {
    render(<CertsEducation />);
    expect(screen.getByText(/Developing Serverless Solutions on AWS/)).toBeInTheDocument();
  });

  it("renders Education heading", () => {
    render(<CertsEducation />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders City Tech degree", () => {
    render(<CertsEducation />);
    expect(screen.getByText(/Bachelor of Technology/)).toBeInTheDocument();
    expect(screen.getByText(/City Tech CUNY/)).toBeInTheDocument();
  });

  it("renders LaGuardia cert", () => {
    render(<CertsEducation />);
    expect(screen.getByText(/LaGuardia Community College/)).toBeInTheDocument();
  });
});
