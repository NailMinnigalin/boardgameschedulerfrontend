"use server";

import { SignInErrorType, UserService } from "lib/services/user-service";

export async function signInUser(email: string | null, password: string | null) : Promise<{isSuccess: boolean, errorType : SignInErrorType | null}>{
    let userService = new UserService();
    return userService.signIn(email, password);
}