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
    </Card>
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
    <Input
      data-testid="password_input"
      id="password"
      type="password"
      required
    ></Input>
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
