import { UserService } from "lib/services/implementations/user-service";
import { SignInErrorType } from "lib/services/interfaces/user-service";
import { expect, test, vi } from "vitest";

test.concurrent("UserService exists", () =>{
    expect(UserService).toBeDefined();
});

test.concurrent("UserService has signIn method", () => {
    const mockApiService = {
        signIn: vi.fn().mockResolvedValue(true)
    }
    let userService = new UserService(mockApiService);

    expect(userService.signIn).toBeInstanceOf(Function);
});

test.concurrent("UserService.signIn return SignInResult with IsSuccess true when user is successfuly signed in", async () => {
    const mockApiService = {
        signIn: vi.fn().mockResolvedValue(true)
    }
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("testEmail", "password");

    expect(signInResult.isSuccess).toBeTruthy();
})

test.concurrent("UserService.signIn return SignInResult with IsSuccess false when user not exists", async () => {
    const mockApiService = {
        signIn: vi.fn().mockResolvedValue(false)
    }
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("notExistingEmail", "password");

    expect(signInResult.isSuccess).toBeFalsy();
})

test.concurrent("UserService.sign return SignInResult with ErrorType IncorrectEmailOrPassword when signin failed", async () =>{
    const mockApiService = {
        signIn: vi.fn().mockResolvedValue(false)
    }
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("notExistingEmail", "password");

    expect(signInResult.errorType).toBe(SignInErrorType.IncorrectEmailOrPassword);
})

test.concurrent.skip("UserService.sign return SignInResult with ErrorType IncorrectEmailFormat when email format is incorrect", async () =>{
    const mockApiService = {
        signIn: vi.fn().mockResolvedValue(false)
    }
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("incorrectEmail", "password");

    expect(signInResult.errorType).toBe(SignInErrorType.IncorrectEmailFormat);
})