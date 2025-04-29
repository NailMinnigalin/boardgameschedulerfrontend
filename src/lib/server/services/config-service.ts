export class ConfigService{
  getApiUrl(): string {
    const apiUrl = process.env.BACKEND_API_URL;
    if (apiUrl) return apiUrl;
    throw new Error("api url is not defined");
  }
}
