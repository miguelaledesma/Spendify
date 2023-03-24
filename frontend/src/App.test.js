import { render, screen } from "@testing-library/react";
// import test from "node:test";
import App from "./App";

test("renders homepage text", () => {
  render(<App />);
  const homepageText = screen.getByText(
    /Take control of your finances, effortlessly/i
  );
  expect(homepageText).toBeInTheDocument();
});
