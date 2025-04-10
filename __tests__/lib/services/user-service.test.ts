import { ApiService } from "../../../src/lib/server/services/api-service";
import { UserService } from "../../../src/lib/server/services/user-service";
import { beforeEach, expect, test } from "vitest";
import { mock, mockReset } from 'vitest-mock-extended';
import { SignInErrorType } from "../../../src/lib/common/types/signin/signin-error-type";

const mockApiService = mock<ApiService>();

beforeEach(() => {
    mockReset(mockApiService)
})

test.concurrent("UserService exists", () =>{
    expect(UserService).toBeDefined();
});

test.concurrent("UserService has signIn method", () => {
    mockApiService.signIn.mockReturnValue(new Promise(() => true));

    const userService = new UserService(mockApiService);

    expect(userService.signIn).toBeInstanceOf(Function);
});

test.concurrent("UserService.signIn return SignInResult with IsSuccess true when user is successfuly signed in", async () => {
    mockApiService.signIn.mockReturnValue(new Promise((resolve) => {resolve(true)}));
    const userService = new UserService(mockApiService);

    const signInResult = await userService.signIn("testEmail@example.com", "password");

    expect(signInResult.isSuccess).toBeTruthy();
})

test.concurrent("UserService.signIn return SignInResult with IsSuccess false when user not exists", async () => {
    mockApiService.signIn.mockReturnValue(new Promise((resolve) => {resolve(false)}));
    const userService = new UserService(mockApiService);

    const signInResult = await userService.signIn("notExistingEmail@example.com", "password");

    expect(signInResult.isSuccess).toBeFalsy();
})

test.concurrent("UserService.signIn return SignInResult with ErrorType IncorrectEmailOrPassword when signin failed", async () =>{
    mockApiService.signIn.mockReturnValue(new Promise((resolve) => {resolve(false)}));
    const userService = new UserService(mockApiService);

    const signInResult = await userService.signIn("notExistingEmail@example.com", "password");

    expect(signInResult.errorType).toBe(SignInErrorType.IncorrectEmailOrPassword);
})

test.concurrent("UserService.signIn return SignInResult with ErrorType IncorrectEmailFormat when email format is incorrect", async () =>{
    mockApiService.signIn.mockReturnValue(new Promise((resolve) => {resolve(false)}));
    const userService = new UserService(mockApiService);

    const signInResult = await userService.signIn("incorrectEmail", "password");

    expect(signInResult.errorType).toBe(SignInErrorType.IncorrectEmailFormat);
})

test.concurrent("UserService.signIn accepts null values as email and returns EmailIsEmpty ErrorType", async () =>{
    mockApiService.signIn.mockReturnValue(new Promise((resolve) => {resolve(false)}));
    const userService = new UserService(mockApiService);

    const signInResult = await userService.signIn(null, "password");

    expect(signInResult.errorType).toBe(SignInErrorType.EmailIsEmpty);
})

test.concurrent("UserService.signIn accepts null values as password and returns PasswordIsEmpty ErrorType", async () =>{
    mockApiService.signIn.mockReturnValue(new Promise((resolve) => {resolve(false)}));
    const userService = new UserService(mockApiService);

    const signInResult = await userService.signIn("testEmail@example.com", null);

    expect(signInResult.errorType).toBe(SignInErrorType.PasswordIsEmpty);
})