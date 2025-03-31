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
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit}>
        <Card className="w-full max-w-md bg-gray-800 text-white">
          <SignInHeader />
          <SignInContent />
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

function SignInContent() {
  return (
    <CardContent className="space-y-3">
      <EmailInput />
      <PasswordInput />
      <SignInButton />
    </CardContent>
  );
}

function PasswordInput() {
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
        required
        placeholder="Enter your password"
        className="w-full"
      ></Input>
    </>
  );
}

function EmailInput() {
  return (
    <div>
      <Label data-testid="email_label" htmlFor="email" className="mb-1 block">
        Email
      </Label>
      <Input
        data-testid="email_input"
        id="email"
        type="email"
        className="w-full"
        required
        placeholder="Enter your email"
      ></Input>
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
