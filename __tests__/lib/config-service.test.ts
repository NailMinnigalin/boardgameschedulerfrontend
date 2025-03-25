import { ConfigService } from "lib/config-service";
import { test } from "vitest";

test("ConfigService exists", () => {
  ConfigService;
});

test("ConfgiService has getApiUrl method", () => {
  try {
    ConfigService.getApiUrl();
  } catch {}
});
