import { expect, test, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import Page from "../src/app/signin/page";

afterEach(() => {
  cleanup();
});

test("SignIn page exists", () => {
  render(<Page />);
});

test("SignIn page has email input field", () => {
  render(<Page />);

  expect(screen.getByTestId("email_input")).toBeDefined();
});

test("Email input has label", () => {
  render(<Page />);

  expect(screen.getByTestId("email_label")).toBeDefined();
});
