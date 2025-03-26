import { injectable } from "tsyringe";
import { IApiService } from "../interfaces/api-service.interface";

@injectable()
export class ApiService implements IApiService{
    async signIn(email: string, password: string) : Promise<boolean> {
        throw new Error("NOT IMPLEMENTED")
    }
}