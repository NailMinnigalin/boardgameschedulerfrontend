import { z } from 'zod'

export const SignInFormSchema = z.object({
    email: z.string().email('Please enter a valid email.').trim(),
    password: z.string().trim()
})

export type SignInFormState = {
  errors: {
    email?: string[];
    password?: string[];
    general?: string[];
  };
} | undefined