import React from "react";
import { Button } from "@/components/ui/button";

const ShadcnButtonDemo = () => {
  const handleClick = () => {
    alert("Shadcn Button clicked!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <Button
        onClick={handleClick}
        tabIndex={0}
        aria-label="Demo Shadcn Button"
        className="w-48"
      >
        Shadcn Button
      </Button>
      <Button
        variant="secondary"
        onClick={handleClick}
        tabIndex={0}
        aria-label="Demo Secondary Button"
        className="w-48"
      >
        Secondary
      </Button>
      <Button
        variant="outline"
        onClick={handleClick}
        tabIndex={0}
        aria-label="Demo Outline Button"
        className="w-48"
      >
        Outline
      </Button>
    </div>
  );
};

export default ShadcnButtonDemo;
