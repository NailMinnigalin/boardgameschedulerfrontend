import { ApiService } from "lib/services/implementations/api-service";
import { expect, test } from "vitest";

test.concurrent("ApiService exists", () => {
    expect(ApiService).toBeDefined();
});

test.concurrent("ApiService has signIn method", () => {
    let apiService = new ApiService();
    expect(apiService.signIn).toBeInstanceOf(Function);
});

test.concurrent("ApiService.signIn return true when user is successfuly signed in", async () => {
    let apiService = new ApiService();

    let result = await apiService.signIn("testEmail.example.com", "password")

    expect(result).toBeTruthy();
});