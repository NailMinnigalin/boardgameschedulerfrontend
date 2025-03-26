import { inject, injectable } from "tsyringe";
import { IApiServiceToken, type IApiService } from "../interfaces/api-service.interface";
import { IUserService, SignInErrorType, SignInResult } from "../interfaces/user-service.interface";

@injectable()
export class UserService implements IUserService {
  #apiService: IApiService;

  constructor(@inject(IApiServiceToken) apiService: IApiService){
    this.#apiService = apiService;
  }

  async signIn(email: string, password: string) : Promise<SignInResult> {
    let result = await this.#apiService.signIn(email, password);
    
    if (result)
      return SignInResult.Successful();
    else
      return new SignInResult(false, SignInErrorType.IncorrectEmailOrPassword);
  }
}
