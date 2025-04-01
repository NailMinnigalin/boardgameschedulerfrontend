import { ApiService } from "lib/services/api-service";
import { SignInErrorType, UserService } from "lib/services/user-service";
import { beforeEach, expect, test, vi } from "vitest";
import { anyString, mock, mockReset } from 'vitest-mock-extended';

const mockApiService = mock<ApiService>();

beforeEach(() => {
    mockReset(mockApiService)
})

test.concurrent("UserService exists", () =>{
    expect(UserService).toBeDefined();
});

test.concurrent("UserService has signIn method", () => {
    mockApiService.signIn.mockReturnValue(new Promise(() => true));

    let userService = new UserService(mockApiService);

    expect(userService.signIn).toBeInstanceOf(Function);
});

test.concurrent("UserService.signIn return SignInResult with IsSuccess true when user is successfuly signed in", async () => {
    mockApiService.signIn.mockReturnValue(new Promise((resolve, reject) => {resolve(true)}));
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("testEmail@example.com", "password");

    expect(signInResult.isSuccess).toBeTruthy();
})

test.concurrent("UserService.signIn return SignInResult with IsSuccess false when user not exists", async () => {
    mockApiService.signIn.mockReturnValue(new Promise((resolve, reject) => {resolve(false)}));
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("notExistingEmail@example.com", "password");

    expect(signInResult.isSuccess).toBeFalsy();
})

test.concurrent("UserService.sign return SignInResult with ErrorType IncorrectEmailOrPassword when signin failed", async () =>{
    mockApiService.signIn.mockReturnValue(new Promise((resolve, reject) => {resolve(false)}));
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("notExistingEmail@example.com", "password");

    expect(signInResult.errorType).toBe(SignInErrorType.IncorrectEmailOrPassword);
})

test.concurrent("UserService.sign return SignInResult with ErrorType IncorrectEmailFormat when email format is incorrect", async () =>{
    mockApiService.signIn.mockReturnValue(new Promise((resolve, reject) => {resolve(false)}));
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("incorrectEmail", "password");

    expect(signInResult.errorType).toBe(SignInErrorType.IncorrectEmailFormat);
})