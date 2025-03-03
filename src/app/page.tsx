import { Button } from "@/components/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Board Game Meetup</h1>
      <div className="space-y-4">
        <Button role="signIn_button">Click me</Button>
      </div>
    </div>
  );
}
