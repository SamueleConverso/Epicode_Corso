import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CommentArea from "../components/CommentArea";

describe("Testing CommentArea", () => {
  it("should be mounted correctly", () => {
    render(<CommentArea />);
    const commentList = screen.getByTestId("mainDiv");
    expect(commentList).toBeInTheDocument();
  });
});
