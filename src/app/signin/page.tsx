"use client";

import { Button } from "@/components/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";
import { signInUser } from "../../lib/clinet/client-actions";
import { SignInFormState } from "../../lib/common/types/signin/signin-schema";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function SignInPage() {
  async function handleSubmit(
    signInFormState: SignInFormState,
    signInFormData: FormData,
  ): Promise<SignInFormState> {
    const result = await signInUser(signInFormData);
    if (!result) {
      router.push("/");
    }

    return result;
  }

  const [formState, formAction] = useActionState(handleSubmit, undefined);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <form action={formAction}>
        <Card className="w-full max-w-md bg-gray-800 text-white">
          <SignInHeader />
          <SignInContent formState={formState} />
        </Card>
      </form>
    </div>
  );
}

function SignInHeader() {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl">Sign In</CardTitle>
    </CardHeader>
  );
}

type SignInContentProps = {
  formState: SignInFormState;
};

function SignInContent({ formState }: SignInContentProps) {
  return (
    <CardContent className="space-y-3">
      <EmailInput error={formState?.errors.email} />
      <PasswordInput error={formState?.errors.password} />
      {formState?.errors.general && <p>{formState.errors.general}</p>}
      <SignInButton />
    </CardContent>
  );
}

type ErrorProps = {
  error?: string[];
};

function PasswordInput({ error }: ErrorProps) {
  return (
    <>
      <Label
        data-testid="password_label"
        htmlFor="password"
        className="mb-1 block"
      >
        Password
      </Label>
      <Input
        data-testid="password_input"
        id="password"
        type="password"
        name="password"
        required
        placeholder="Enter your password"
        className="w-full"
      ></Input>
      {error && <p>{error}</p>}
    </>
  );
}

function EmailInput({ error }: ErrorProps) {
  return (
    <div>
      <Label data-testid="email_label" htmlFor="email" className="mb-1 block">
        Email
      </Label>
      <Input
        data-testid="email_input"
        id="email"
        type="email"
        name="email"
        className="w-full"
        required
        placeholder="Enter your email"
      ></Input>
      {error && <p>{error}</p>}
    </div>
  );
}

function SignInButton() {
  return (
    <Button
      data-testid="signin_button"
      type="submit"
      className="w-full rounded border border-gray-500 bg-gray-700 px-4 py-2 hover:bg-gray-600"
    >
      Sign In
    </Button>
  );
}
