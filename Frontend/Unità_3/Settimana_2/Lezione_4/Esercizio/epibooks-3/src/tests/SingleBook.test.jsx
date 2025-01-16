import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SingleBook from "../components/SingleBook";
import BookList from "../components/BookList";
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
    //console.log("ARRAY", card);
    function cardClick() {
      //console.log("CARD STAMPATA", card);
      //const card = screen.getByTestId("card");
      fireEvent.click(card);
    }

    cardClick();

    expect(card).toHaveProperty(["style", "border"], "3px solid red");
  });

  it("changes second book", () => {
    // let selectBook1 = true;
    // let selectBook2 = false;
    render(
      <>
        {/* <SingleBook
          book={books[0]}
          selected={selectBook1}
          changeState={cardClick}
        />
        <SingleBook
          book={books[1]}
          selected={selectBook2}
          changeState={cardClick}
        /> */}
        <BookList books={books}></BookList>
      </>
    );
    let cards = screen.getAllByTestId("card");
    //console.log("ARRAY", cards);
    // function cardClick(n) {
    //   //console.log("CARD STAMPATA", card);
    //   //const card = screen.getByTestId("card");
    //   fireEvent.click(cards[n]);
    // }

    fireEvent.click(cards[0]);
    let card1 = cards[0];
    console.log(card1.style.border);
    fireEvent.click(cards[1]);
    let card2 = cards[1];
    console.log(card1.style.border);
    console.log(card2.style.border);
    //cardClick(1);
    // selectBook1 = false;
    // selectBook2 = true;

    expect(card1).toHaveStyle({ border: "none" });
    //console.log("LIBRO1", cards[0].style.border);
    expect(card2).toHaveStyle({ border: "3px solid red" });
    //console.log("LIBRO2", cards[1].style.border);
  });
});
