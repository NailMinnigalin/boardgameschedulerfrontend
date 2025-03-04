import { Button } from "@/components/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-6 text-3xl font-bold">Board Game Meetup</h1>
      <div className="space-y-4">
        <Button
          asChild
          data-testid="signIn_button"
          className="rounded border border-gray-500 bg-gray-800 px-4 py-2 hover:bg-gray-700"
        >
          <Link href="/signin">Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
