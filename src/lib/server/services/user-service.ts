import { ApiService } from "./api-service";
import { SignInErrorType } from "../../common/types/signin/signin-error-type";

export class SignInResult{
  isSuccess : boolean;
  errorType : SignInErrorType | null;

  constructor(isSuccess : boolean, errorType: SignInErrorType | null){
    this.isSuccess = isSuccess;
    this.errorType = errorType;
  }

  static Successful() : SignInResult{
    return new SignInResult(true, null);
  }
}

export class UserService {
  #apiService: ApiService;

  constructor(apiService?: ApiService){
    this.#apiService = apiService ?? new ApiService();
  }

  async signIn(userName: string | null, password: string | null) : Promise<SignInResult> {
    if (!userName)
      return new SignInResult(false, SignInErrorType.UserNameIsEmpty);
    if (!password)
      return new SignInResult(false, SignInErrorType.PasswordIsEmpty);

    const result = await this.#apiService.signIn(userName, password);
    
    if (result)
      return SignInResult.Successful();
    else
      return new SignInResult(false, SignInErrorType.IncorrectUserNameOrPassword);
  }
}
