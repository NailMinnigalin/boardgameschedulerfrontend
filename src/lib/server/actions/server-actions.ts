"use server";

import { UserService } from "../services/user-service";

export async function signInUser(userName: string | null, password: string | null, userService: UserService | undefined = undefined)
  : Promise<{isSuccess: boolean, errorType : number | null}>{
    if (!userService) userService = new UserService();
    const result = await userService.signIn(userName, password);

    return {
        isSuccess: result.isSuccess,
        errorType: result.errorType?.valueOf() ?? null
    }
}