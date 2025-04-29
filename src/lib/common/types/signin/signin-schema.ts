import { z } from 'zod'

export const SignInFormSchema = z.object({
    userName: z.string().min(1).trim(),
    password: z.string().min(1).trim()
})

export type SignInFormState = {
  errors: {
    userName?: string[];
    password?: string[];
    general?: string[];
  };
} | undefined