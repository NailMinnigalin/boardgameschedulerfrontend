"use server";

import { UserService } from "../services/user-service";

export async function signInUser(email: string | null, password: string | null)
  : Promise<{isSuccess: boolean, errorType : number | null}>{
    const userService = new UserService();
    const result = await userService.signIn(email, password);

    return {
        isSuccess: result.isSuccess,
        errorType: result.errorType?.valueOf() ?? null
    }
}