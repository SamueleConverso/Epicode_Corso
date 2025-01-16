import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
//import SingleComment from "../components/SingleComment";
import BookList from "../components/BookList";
import books from "../data/fantasy.json";

describe("Testing single comment", () => {
  it("doesn't show up", () => {
    render(<BookList books={books} />);
    const singleComment = screen.queryByTestId("single-comment");

    expect(singleComment).not.toBeInTheDocument();
  });

  it("shows comments correctly", async () => {
    render(<BookList books={books} />);
    const cards = screen.getAllByTestId("card");

    fireEvent.click(cards[0]);

    const singleComments = await screen.findAllByTestId("single-comment");

    expect(singleComments.length).toBeGreaterThan(0);
  });
});
