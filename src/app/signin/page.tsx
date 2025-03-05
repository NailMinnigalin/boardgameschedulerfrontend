import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { Input } from "@/components/components/ui/input";

export default function SignInPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardContent>
          <form>
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
