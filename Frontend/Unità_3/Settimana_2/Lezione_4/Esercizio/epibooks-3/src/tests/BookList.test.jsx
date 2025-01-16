import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookList from "../components/BookList";
import books from "../data/fantasy.json";

describe("Testing array", () => {
  it("should have as many cards as the array from the json"),
    async () => {
      render(<BookList books={books} />);
      const len = books.length;
      const cards = await screen.findAllByTestId("book element");
      expect(cards).toHaveLength(len);
      expect(cards.length).toBeGreaterThan(0);
    };

  it("should filter less results after searching in the input field", async () => {
    render(<BookList books={books} />);
    // ho etichettato i miei ListGroup.Item con data-testid="list element"
    const arrayBefore = await screen.findAllByTestId("book element");
    //console.log("BEFORE", arrayBefore.length);
    const filterInput = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(filterInput, { target: { value: "k" } });
    const arrayAfter = await screen.findAllByTestId("book element");
    //console.log("AFTER", arrayAfter.length);
    expect(arrayAfter.length).toBeLessThan(arrayBefore.length);
  });
});
