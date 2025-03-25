import { UserService } from "lib/user-service"
import { ApiService } from "lib/api-service"
import { beforeEach, expect, type Mock, MockedFunction, test, vi } from "vitest";

beforeEach(() => {
    vi.clearAllMocks();
});

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

test.concurrent("UserService.singIn return SignInResult with IsSuccess true when user is successfuly signed in", async () => {
    const mockApiService = {
        signIn: vi.fn().mockResolvedValue(true)
    }
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("testEmail", "password");

    expect(signInResult.isSuccess).toBeTruthy();
})

test.concurrent("UserService.singIn return SignInResult with IsSuccess false when user not exists", async () => {
    const mockApiService = {
        signIn: vi.fn().mockResolvedValue(false)
    }
    let userService = new UserService(mockApiService);

    let signInResult = await userService.signIn("notExistingEmail", "password");

    expect(signInResult.isSuccess).toBeFalsy();
})