import React from "react";
import { Button } from "@/components/components/ui/button";
import Link from "next/link";

export function BgsLinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button
      asChild
      className="rounded border border-gray-500 bg-gray-800 px-4 py-2 hover:bg-gray-700 w-full"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
