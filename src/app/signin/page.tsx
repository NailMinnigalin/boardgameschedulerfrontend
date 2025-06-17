"use client";

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
import BgsSubmitButton from "@/components/bgs_components/bgs-submit-button";

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
      <UserNameInput error={formState?.errors.userName} />
      <PasswordInput error={formState?.errors.password} />
      {formState?.errors.general && <p>{formState.errors.general}</p>}
      <BgsSubmitButton>Sign In</BgsSubmitButton>
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
        htmlFor="password"
        className="mb-1 block"
      >
        Password
      </Label>
      <Input
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

function UserNameInput({ error }: ErrorProps) {
  return (
    <div>
      <Label htmlFor="userName" className="mb-1 block">
        User name
      </Label>
      <Input
        id="userName"
        type="text"
        name="userName"
        className="w-full"
        required
        placeholder="Enter your user name"
      ></Input>
      {error && <p>{error}</p>}
    </div>
  );
}
