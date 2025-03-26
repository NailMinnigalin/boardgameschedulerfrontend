import { injectable } from "tsyringe";

@injectable()
export class ConfigService implements ConfigService {
  getApiUrl(): string {
    let apiUrl = process.env.BACKEND_API_URL;
    if (apiUrl) return apiUrl;
    throw new Error("api url is not defined");
  }
}
