import { Button } from "@/components/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="mb-6 text-3xl font-bold">Board Game Meetup</h1>
      <div className="space-y-4">
        <Button data-testid="signIn_button">Sign In</Button>
      </div>
    </div>
  );
}
