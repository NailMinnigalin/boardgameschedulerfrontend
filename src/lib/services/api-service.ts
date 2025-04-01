import { ConfigService } from "./config-service";

export class ApiService{
    #configService : ConfigService;

    constructor(configService?: ConfigService){
        this.#configService = configService ?? new ConfigService();
    }

    async signIn(email: string, password: string) : Promise<boolean> {
        let response = await fetch(`${this.#configService.getApiUrl()}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        return response.ok;
    }
}