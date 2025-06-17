import { Button } from "@/components/components/ui/button";
import React from "react";

export default function BgsSubmitButton({children}: {children: React.ReactNode}) {
  return (
    <Button
      type="submit"
      className="w-full rounded border border-gray-500 bg-gray-700 px-4 py-2 hover:bg-gray-600"
    >
      {children}
    </Button>
  );
}