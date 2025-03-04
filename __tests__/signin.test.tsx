import { expect, test, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import Page from "../src/app/signin/page";

afterEach(() => {
  cleanup();
});

test("SignIn page exists", () => {
  render(<Page />);
});
