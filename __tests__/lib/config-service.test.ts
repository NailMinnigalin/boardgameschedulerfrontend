import { ConfigService } from "lib/services/config-service";
import { expect, test } from "vitest";

test("ConfigService exists", () => {
  ConfigService;
});

test("ConfgiService has getApiUrl method", () => {
  let configService = new ConfigService();

  expect(configService.getApiUrl).toBeInstanceOf(Function);
});
