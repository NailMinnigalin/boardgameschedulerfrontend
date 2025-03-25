export class ConfigService {
  static getApiUrl(): string {
    let apiUrl = process.env.BACKEND_API_URL;
    if (apiUrl) return apiUrl;
    throw new Error("api url is not defined");
  }
}
