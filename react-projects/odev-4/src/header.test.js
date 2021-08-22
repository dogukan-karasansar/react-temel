import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("header success render", () => {
  let header;
  beforeEach(() => {
    render(<Header />);
    header = screen.getByText("Emoji Search");
  });

  test("header control", () => {
    expect(header)
  });
});
