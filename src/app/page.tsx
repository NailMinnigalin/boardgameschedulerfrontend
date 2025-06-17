import React from "react";
import { BgsLinkButton } from "@/components/bgs_components/bgs-link-button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-6 text-3xl font-bold">Board Game Scheduler</h1>
      <div className="space-y-4 flex flex-col items-center justify-center" >
        <BgsLinkButton href="/signin">Sign In</BgsLinkButton>
        <BgsLinkButton href="/register">Register</BgsLinkButton>
      </div>
    </div>
  );
}
