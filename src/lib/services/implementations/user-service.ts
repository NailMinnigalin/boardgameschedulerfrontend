import { IApiServiceToken, type IApiService } from "../interfaces/api-service.interface";
import { IUserService, SignInErrorType, SignInResult } from "../interfaces/user-service.interface";

export class UserService implements IUserService {
  #apiService: IApiService;

  constructor(apiService: IApiService){
    this.#apiService = apiService;
  }

  async signIn(email: string, password: string) : Promise<SignInResult> {
    if (!this.#isEmailValid(email))
      return new SignInResult(false, SignInErrorType.IncorrectEmailFormat);

    let result = await this.#apiService.signIn(email, password);
    
    if (result)
      return SignInResult.Successful();
    else
      return new SignInResult(false, SignInErrorType.IncorrectEmailOrPassword);
  }

  #isEmailValid(email: string) : boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
