"use client";

import { signInUser as signInUserServer } from "lib/actions/server-actions"
import { SignInFormSchema, SignInFormState } from "lib/schemas/signin-schema";
import { SignInErrorType } from "lib/services/user-service";

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
        const signInResult = await signInUserServer(email, password);

        if (!signInResult.isSuccess) {
            return getErrors(signInResult);
        }

        return undefined; //Successful signIN
    } catch (error) {
        console.error("SignIn Error:", error);
        return { errors: { general: [ERROR_MESSAGES.UNKNOWN_ERROR] } };
    }
}

function getErrors(signInResult: { isSuccess: boolean; errorType: SignInErrorType | null; }) {
    switch (signInResult.errorType) {
        case SignInErrorType.IncorrectEmailOrPassword:
            return { errors: { general: [ERROR_MESSAGES.INVALID_CREDENTIALS] } };
        default:
            return { errors: { general: [ERROR_MESSAGES.UNKNOWN_ERROR] } };
    }
}
