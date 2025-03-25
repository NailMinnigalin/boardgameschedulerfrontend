import { expect, test, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import Page from "../../src/app/page";

afterEach(() => {
  cleanup();
});

test("Root page has signIn button", () => {
  render(<Page />);

  expect(screen.getByTestId("signIn_button")).toBeDefined();
});

test("SignIn button has text 'Sign In'", () => {
  render(<Page />);

  let signInButton = screen.getByTestId("signIn_button");

  expect(signInButton.textContent).toEqual("Sign In");
});

test("SignIn button has href to /signin", () => {
  render(<Page />);

  let signInButton = screen.getByTestId("signIn_button");

  expect(signInButton).toHaveAttribute("href", "/signin");
});

test("Snapshot test", () => {
  const { asFragment } = render(<Page />);
  expect(asFragment()).toMatchSnapshot();
});
