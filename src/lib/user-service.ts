import { ApiService } from "./api-service";

class SignInResult{
  isSuccess : boolean;

  constructor(isSuccess : boolean){
    this.isSuccess = isSuccess;
  }
}

export class UserService {
  #apiService: ApiService;

  constructor(apiService: ApiService){
    this.#apiService = apiService;
  }

  async signIn(email: string, password: string) : Promise<SignInResult> {
    let result = await this.#apiService.signIn(email, password);
    return new SignInResult(result);
  }
}
