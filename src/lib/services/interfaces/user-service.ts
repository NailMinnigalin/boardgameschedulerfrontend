export const IUserServiceToken = Symbol("IUserService");

export enum SignInErrorType {
  IncorrectEmailOrPassword,
  IncorrectEmailFormat
}

export interface IUserService {
  signIn(email: string, password: string) : Promise<SignInResult>;
}

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
