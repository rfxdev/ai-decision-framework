import { useCallback } from "react";

interface UseErrorHandlerResult {
  handleError: (error: Error, context?: string) => void;
}

export function useErrorHandler(): UseErrorHandlerResult {
  const handleError = useCallback((error: Error, context?: string) => {
    console.error(`Error${context ? ` in ${context}` : ""}:`, error);
  }, []);

  return { handleError };
}
