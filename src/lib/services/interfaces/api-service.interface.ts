export const IApiServiceToken = Symbol("IApiService");

export interface IApiService{
    signIn(email: string, password: string) : Promise<boolean>;
}