import { ConfigService } from "./config-service";

export class ApiService{
    #configService : ConfigService;

    constructor(configService?: ConfigService){
        this.#configService = configService ?? new ConfigService();
    }

    async signIn(userName: string, password: string) : Promise<boolean> {

        const response = await fetch(`${this.#configService.getApiUrl()}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, password }),
        });

        return response.ok;
    }
}