import { ApiService } from "lib/services/implementations/api-service";
import { IConfigService } from "lib/services/interfaces/config-service.interface";
import { beforeEach, expect, test, vi } from "vitest";

test.concurrent("ApiService exists", () => {
    expect(ApiService).toBeDefined();
});

let mockConfigService: IConfigService;
let apiService: ApiService;

beforeEach(() => {
    vi.resetAllMocks();
    mockConfigService = {
        getApiUrl: vi.fn().mockReturnValue("MockApiUrl")
    }
    apiService = new ApiService(mockConfigService);
})

test.concurrent("ApiService has signIn method", () => {
    let apiService = new ApiService(mockConfigService);

    expect(apiService.signIn).toBeInstanceOf(Function);
});

test.concurrent("ApiService.signIn return true when user is successfuly signed in", async () => {
    global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({}),
        } as Response)
    );

    let result = await apiService.signIn("testEmail@example.com", "password")

    expect(result).toBeTruthy();
});

test.concurrent("ApiService.signIn return false when user not exists", async () => {
    global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({}),
        } as Response)
    );

    let result = await apiService.signIn("nonExistingEmail@example.com", "password")

    expect(result).toBeFalsy();
});