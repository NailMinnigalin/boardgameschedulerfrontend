import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card";
import { Label } from "@/components/components/ui/label";
import { Input } from "@/components/components/ui/input";
import BgsSubmitButton from "@/components/bgs_components/bgs-submit-button";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <form>
        <Card className="w-full max-w-md bg-gray-800 text-white">
          <RegisterHeader />
          <RegisterContent />
        </Card>
      </form>
    </div>
  );
}

function RegisterHeader() {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl">Register</CardTitle>
    </CardHeader>
  );
}

function RegisterContent() {
  return (
    <CardContent className="space-y-3">
      <UserNameInput />
      <EmailInput />
      <PasswordInput />
      <PasswordRepeatInput />
      <BgsSubmitButton>Register</BgsSubmitButton>
    </CardContent>
  );
}

function UserNameInput() {
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
    </div>
  );
}

function EmailInput() {
  return (
    <div>
      <Label htmlFor="email" className="mb-1 block">
        Email
      </Label>
      <Input
        id="email"
        type="text"
        name="email"
        className="w-full"
        required
        placeholder="Enter your email"
      ></Input>
    </div>
  );
}

function PasswordInput() {
  return (
    <div>
      <Label htmlFor="password" className="mb-1 block">
        Password
      </Label>
      <Input
        id="password"
        type="password"
        name="password"
        className="w-full"
        required
        placeholder="Enter your password"
      ></Input>
    </div>
  );
}

function PasswordRepeatInput() {
  return (
    <div>
      <Label htmlFor="passwordRepeat" className="mb-1 block">
        Password repeat
      </Label>
      <Input
        id="passwordRepeat"
        type="password"
        name="passwordRepeat"
        className="w-full"
        required
        placeholder="Enter your password again"
      ></Input>
    </div>
  );
}
