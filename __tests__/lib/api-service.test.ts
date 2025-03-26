import { ApiService } from "lib/services/implementations/api-service";
import { expect, test } from "vitest";

test.concurrent("ApiService exists", () => {
    expect(ApiService).toBeDefined();
});

test.concurrent("ApiService has signIn method", () => {
    let apiService = new ApiService();
    expect(apiService.signIn).toBeInstanceOf(Function);
});