"use server";

import { inject, injectable } from "tsyringe";
import { IApiService } from "../interfaces/api-service.interface";
import { IConfigServiceToken, type IConfigService } from "../interfaces/config-service.interface";

@injectable()
export class ApiService implements IApiService{
    #configService : IConfigService;

    constructor(@inject(IConfigServiceToken) configService: IConfigService){
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