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

test.concurrent("ApiService.signIn return true when user is successfully signed in", async () => {
    setupFetchToReturn(true)

    const result = await apiService.signIn("testEmail@example.com", "password")

    expect(result).toBeTruthy();
});

test.concurrent("ApiService.signIn return false when user not exists", async () => {
    setupFetchToReturn(false)

    const result = await apiService.signIn("nonExistingEmail@example.com", "password")

    expect(result).toBeFalsy();
});

function  setupFetchToReturn(val: boolean) {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: val,
      json: () => Promise.resolve({}),
    } as Response)
  );
}