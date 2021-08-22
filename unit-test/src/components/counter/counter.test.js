import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("counter tests", () => {
  let count, increaseBtn, decrease;
  beforeEach(() => {
    console.log("beforeEach her testen önce çalışacağım");
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decrease = screen.getByText("Decrease");
  });

  beforeAll(() => {
    console.log("beforeall birkere çalışacağım");
  });

  afterAll(() => {
    console.log("afterAll en son birkere çalışacağım");
  });

  afterEach(() => {
    console.log("afterEach her testen sonra çalışacağım");
  });
  test("increase btn", () => {
    userEvent.click(increaseBtn);

    expect(count).toHaveTextContent("1");
  });

  test("decrase btn", () => {
    userEvent.click(decrease);

    expect(count).toHaveTextContent("-1");
  });
});
