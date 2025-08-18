import type { JSX } from "react";

interface LoaderProps {
  message?: string;
}

export function Loader({ message = "Loading..." }: LoaderProps): JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg">{message}</div>
    </div>
  );
}
