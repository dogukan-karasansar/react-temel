import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("result filter true get", () => {
  let input;
  beforeEach(() => {
    render(<App />);
    input = screen.getByLabelText("search");
  });

  test("input true filter control", () => {
    userEvent.type(input, "smile");
    console.log(input);
  });
});
