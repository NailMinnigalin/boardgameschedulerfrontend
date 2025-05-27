import { ApiService } from "../../../src/lib/server/services/api-service";
import { ConfigService } from "../../../src/lib/server/services/config-service";
import { expect, test, vi } from "vitest";
import { mock } from "vitest-mock-extended";

test.concurrent("ApiService exists", () => {
    expect(ApiService).toBeDefined();
});


const mockConfigService = mock<ConfigService>();
mockConfigService.getApiUrl.mockReturnValue("MockApiUrl");
const apiService: ApiService = new ApiService(mockConfigService);

test.concurrent("ApiService has signIn method", () => {
    expect(apiService.signIn).toBeInstanceOf(Function);
});

test.concurrent("ApiService.signIn return true when user is successfuly signed in", async () => {
    global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({}),
        } as Response)
    );

    const result = await apiService.signIn("testEmail@example.com", "password")

    expect(result).toBeTruthy();
});

test.concurrent("ApiService.signIn return false when user not exists", async () => {
    global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({}),
        } as Response)
    );

    const result = await apiService.signIn("nonExistingEmail@example.com", "password")

    expect(result).toBeFalsy();
});