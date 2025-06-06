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

test.concurrent("UserService.signIn return SignInResult with IsSuccess true when user is successfully signed in", async () => {
    const userService = createUserServiceWhosApiServiceSignInReturn(true)

    const signInResult = await userService.signIn("testUser", "password");

    expect(signInResult.isSuccess).toBeTruthy();
})

test.concurrent("UserService.signIn return SignInResult with IsSuccess false when user not exists", async () => {
    const userService = createUserServiceWhosApiServiceSignInReturn(false)

    const signInResult = await userService.signIn("notExistingUser", "password");

    expect(signInResult.isSuccess).toBeFalsy();
})

test.concurrent("UserService.signIn return SignInResult with ErrorType IncorrectUserNameOrPassword when signin failed", async () =>{
    const userService = createUserServiceWhosApiServiceSignInReturn(false)

    const signInResult = await userService.signIn("notExistingUser", "password");

    expect(signInResult.errorType).toBe(SignInErrorType.IncorrectUserNameOrPassword);
})

test.concurrent("UserService.signIn accepts null values as userName and returns UserNameIsEmpty ErrorType", async () =>{
    const userService = createUserServiceWhosApiServiceSignInReturn(false)

    const signInResult = await userService.signIn(null, "password");

    expect(signInResult.errorType).toBe(SignInErrorType.UserNameIsEmpty);
})

test.concurrent("UserService.signIn accepts null values as password and returns PasswordIsEmpty ErrorType", async () =>{
    const userService = createUserServiceWhosApiServiceSignInReturn(false)

    const signInResult = await userService.signIn("testEmail@example.com", null);

    expect(signInResult.errorType).toBe(SignInErrorType.PasswordIsEmpty);
})

function createUserServiceWhosApiServiceSignInReturn(val: boolean) : UserService{
    mockApiService.signIn.mockReturnValue(new Promise((resolve) => {resolve(val)}));
    return new UserService(mockApiService);
}