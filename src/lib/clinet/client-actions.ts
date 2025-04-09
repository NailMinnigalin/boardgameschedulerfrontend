"use client";

import { signInUser as signInUserServerAction } from "../server/actions/server-actions"
import { SignInFormSchema, SignInFormState } from "../common/types/signin/signin-schema";
import { SignInErrorType } from "../common/types/signin/signin-error-type";

const ERROR_MESSAGES = {
    INVALID_CREDENTIALS: "Invalid email or password",
    UNKNOWN_ERROR: "An unexpected error occurred",
};

export async function signInUser(signInFormData: FormData): Promise<SignInFormState>{
    const validatedFields = SignInFormSchema.safeParse({
        email: signInFormData.get("email"),
        password: signInFormData.get("password"),
    });

    if (!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    return DoServerSignIn(validatedFields.data.email, validatedFields.data.password);
}

async function DoServerSignIn(email: string, password: string){
    try {
        const signInResult = await signInUserServerAction(email, password);

        if (!signInResult.isSuccess) {
            return getErrors(signInResult);
        }

        return undefined; //Successful signIN
    } catch {
        return { errors: { general: [ERROR_MESSAGES.UNKNOWN_ERROR] } };
    }
}

function getErrors(signInResult: { isSuccess: boolean; errorType: number | null; }) {
    switch (signInResult.errorType) {
        case SignInErrorType.IncorrectEmailOrPassword:
            return { errors: { general: [ERROR_MESSAGES.INVALID_CREDENTIALS] } };
        default:
            return { errors: { general: [ERROR_MESSAGES.UNKNOWN_ERROR] } };
    }
}
