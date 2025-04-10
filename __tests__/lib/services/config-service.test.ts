import { ConfigService } from "../../../src/lib/server/services/config-service";
import { expect, test } from "vitest";

test("ConfigService has getApiUrl method", () => {
  const configService = new ConfigService();

  expect(configService.getApiUrl).toBeInstanceOf(Function);
});
