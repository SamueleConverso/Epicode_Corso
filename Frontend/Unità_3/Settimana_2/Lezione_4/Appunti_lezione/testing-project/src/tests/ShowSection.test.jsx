import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShowSection from "../components/ShowSection";

describe("Testing mounting phase", () => {
  it("mounts correctly", () => {
    render(<ShowSection />);
    const h2 = screen.getByText("Esempio componente ShowSection");
    expect(h2).toBeInTheDocument();
  });

  it("shows initially label 'MOSTRA' in the button", () => {
    render(<ShowSection />);
    const button = screen.getByText(/mostra/i);
    expect(button).toBeInTheDocument();
  });

  it("doesn't show the card initially", () => {
    render(<ShowSection />);
    const img = screen.queryByRole("img");
    expect(img).not.toBeInTheDocument();
  });
});

describe("Testing button interaction", () => {
  it("should change label value after button click", () => {
    render(<ShowSection />);
    const button = screen.getByText(/mostra/i);
    fireEvent.click(button);
    const sameButton = screen.getByText(/nascondi/i);
    expect(sameButton).toBeInTheDocument();
  });

  it("should render the card after a button click", () => {
    render(<ShowSection />);
    const button = screen.getByText(/mostra/i);
    fireEvent.click(button);
    const dog = screen.getByRole("img");
    expect(dog).toBeInTheDocument();
  });

  it("should restore 'MOSTRA' label after 2 clicks on the button", () => {
    render(<ShowSection />);
    const button = screen.getByText(/mostra/i);
    fireEvent.click(button);
    fireEvent.click(button);
    const sameButton = screen.getByText(/mostra/i);
    expect(sameButton).toBeInTheDocument();
  });

  it("should hide dog after 2 clicks", () => {
    render(<ShowSection />);
    const button = screen.getByText(/mostra/i);
    fireEvent.click(button);
    fireEvent.click(button);
    const dog = screen.queryByRole("img");
    expect(dog).not.toBeInTheDocument();
  });
});
