import { screen, render } from "@testing-library/react";
import App from './App';

var data = require("./emojiList.json");

describe("emoji results control", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("should emoji list control", () => {
    expect(data)
  });
});
