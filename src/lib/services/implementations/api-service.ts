import { IApiService } from "../interfaces/api-service.interface";
import { IConfigServiceToken, type IConfigService } from "../interfaces/config-service.interface";

export class ApiService implements IApiService{
    #configService : IConfigService;

    constructor(configService: IConfigService){
        this.#configService = configService;
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