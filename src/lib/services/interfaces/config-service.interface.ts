export const IConfigServiceToken = Symbol("IConfigService");

export interface IConfigService {
  getApiUrl(): string;
}
