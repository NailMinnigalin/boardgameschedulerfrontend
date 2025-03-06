import { Button } from "@/components/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";

export default function SignInPage() {
  return (
    <Card>
      <SignInHeader />
      <SignInContent />
      <SignInButton />
    </Card>
  );
}

function SignInButton() {
  return (
    <Button
      data-testid="signin_button"
      type="submit"
      className="rounded border border-gray-500 bg-gray-800 px-4 py-2 hover:bg-gray-700"
    >
      Sign In
    </Button>
  );
}

function SignInContent() {
  return (
    <CardContent>
      <form>
        <EmailInput />
        <PasswordInput />
      </form>
    </CardContent>
  );
}

function PasswordInput() {
  return (
    <>
      <Label data-testid="password_label" htmlFor="password">
        Password
      </Label>
      <Input
        data-testid="password_input"
        id="password"
        type="password"
        required
      ></Input>
    </>
  );
}

function EmailInput() {
  return (
    <>
      <Label data-testid="email_label" htmlFor="email">
        Email
      </Label>
      <Input data-testid="email_input" id="email" type="email" required></Input>
    </>
  );
}

function SignInHeader() {
  return (
    <CardHeader>
      <CardTitle>Sign In</CardTitle>
    </CardHeader>
  );
}
