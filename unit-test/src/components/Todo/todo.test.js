import { render, screen } from "@testing-library/react";
import  userEvent  from "@testing-library/user-event";

import Todo from "./index";

describe("todo testleri", () => {
  let btn, input;

  beforeEach(() => {
    render(<Todo />);
    btn = screen.getByText("Add");
    input = screen.getByLabelText("text");
  });

  test("varsayılan verilen 3 nesne", () => {
    const items = screen.getAllByText(/ıtem/i);
    expect(items.length === 3);
  });

  test("input, button döküman kontrol ", () => {
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("text listeye eklenmeli", () => {
    //inputu doldur
    const name = "mehmet";
    userEvent.type(input, name);
    //butona tıkla
    userEvent.click(btn);

    //asertion
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
