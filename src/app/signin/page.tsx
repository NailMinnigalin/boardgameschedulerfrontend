import { Button } from "@/components/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <form className="space-y-4">
        <Card className="w-full max-w-md bg-gray-800 text-white">
          <SignInHeader />
          <SignInContent />
          <SignInFooter />
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
    <CardContent>
      <EmailInput />
      <PasswordInput />
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

function SignInFooter() {
  return (
    <CardFooter>
      <SignInButton />
    </CardFooter>
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
