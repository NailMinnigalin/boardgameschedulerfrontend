import { beforeEach, expect, test } from "vitest";
import { signInUser } from "../../../src/lib/server/actions/server-actions";
import { SignInResult, UserService } from "../../../src/lib/server/services/user-service";
import { mock, mockReset } from "vitest-mock-extended";
import { SignInErrorType } from "../../../src/lib/common/types/signin/signin-error-type";

const mockUserService = mock<UserService>();

beforeEach(() =>{
  mockReset(mockUserService);
})

test.concurrent("signInUser action exists", async () => {
  expect(signInUser).toBeDefined()
})

test.concurrent("signInUser action returns isSuccess true if signin was successful", async () =>{
  const signInResult = new SignInResult(true, null);
  mockUserService.signIn.mockReturnValue(new Promise((resolve) => {resolve(signInResult)}));

  const result = await signInUser("test@email.com", "123", mockUserService);

  expect(result.isSuccess).toEqual(true)
})

test.concurrent("signInUser action return isSuccess false if signin was failure", async () =>{
  const signInResult = new SignInResult(false, SignInErrorType.IncorrectEmailOrPassword);
  mockUserService.signIn.mockReturnValue(new Promise((resolve) => {resolve(signInResult)}));

  const result = await signInUser("test@email.com", "123", mockUserService);

  expect(result.isSuccess).toEqual(false)
})