import { beforeEach, expect, Mock, test, vi } from "vitest";
import { signInUser } from "../../../src/lib/clinet/client-actions";
import { signInUser as signInUserServerAction } from "../../../src/lib/server/actions/server-actions"
import { SignInErrorType } from "../../../src/lib/common/types/signin/signin-error-type";

vi.mock('../../../src/lib/server/actions/server-actions', () => ({
  signInUser: vi.fn(),
}));

beforeEach(() => {
  vi.resetAllMocks();
});

test.concurrent("signInUser action exists", async () => {
  expect(signInUser).toBeDefined()
})

test.concurrent("signInUser action returns undefined when signin successfully", async () => {
  const formData = new FormData();
  formData.set('userName', 'test');
  formData.set('password', 'password123');
  (signInUserServerAction as Mock).mockResolvedValueOnce({ isSuccess: true });

  const result = await signInUser(formData);

  expect(result).toBeUndefined();
})

test.concurrent("signInUser action returns general error when user not exist", async () => {
  const formData = new FormData();
  formData.set('userName', 'test');
  formData.set('password', 'password123');
  (signInUserServerAction as Mock).mockResolvedValueOnce({ isSuccess: false, errorType: SignInErrorType.IncorrectUserNameOrPassword});

  const result = await signInUser(formData);

  expect(result?.errors.general).toBeDefined();
  expect(result?.errors.general).toContainEqual("Invalid email or password")
})

test.concurrent("signInUser action return email error when email is not valid", async () => {
  const formData = new FormData();
  formData.set('email', '');
  formData.set('password', 'password123');
  (signInUserServerAction as Mock).mockResolvedValueOnce({ isSuccess: false, errorType: SignInErrorType.IncorrectUserNameOrPassword});

  const result = await signInUser(formData);

  expect(result?.errors.userName).toBeDefined();
})