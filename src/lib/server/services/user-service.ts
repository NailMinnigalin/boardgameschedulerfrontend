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

  async signIn(email: string | null, password: string | null) : Promise<SignInResult> {
    if (!email)
      return new SignInResult(false, SignInErrorType.EmailIsEmpty);
    if (!password)
      return new SignInResult(false, SignInErrorType.PasswordIsEmpty);
    if (!this.#isEmailValid(email))
      return new SignInResult(false, SignInErrorType.IncorrectEmailFormat);

    const result = await this.#apiService.signIn(email, password);
    
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
