import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SingleBook from "../components/SingleBook";
//import BookList from "../components/BookList";
import books from "../data/fantasy.json";

describe("Testing border", () => {
  it("changes border", () => {
    render(
      <SingleBook
        book={books[0]}
        selected={books[0].asin}
        changeState={cardClick}
      />
    );
    let card = screen.getByTestId("card");
    function cardClick() {
      //console.log("CARD STAMPATA", card);
      //const card = screen.getByTestId("card");
      fireEvent.click(card);
    }

    cardClick();

    expect(card).toHaveProperty(["style", "border"], "3px solid red");
  });
});
