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
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardContent>
          <form>
            <Label htmlFor="email">Email</Label>
            <Input
              data-testid="email_input"
              id="email"
              type="email"
              required
            ></Input>
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
