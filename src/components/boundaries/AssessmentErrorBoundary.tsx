import type { JSX, ReactNode } from "react";

import { useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";

import { AssessmentErrorFallback } from "@/components/boundaries/AssessmentErrorFallback";

import { ErrorBoundary } from "./ErrorBoundary";

interface AssessmentErrorBoundaryProps {
  children: ReactNode;
}

export function AssessmentErrorBoundary({
  children,
}: AssessmentErrorBoundaryProps): JSX.Element {
  const { assessmentId } = useParams<{ assessmentId: string }>();

  const handleError = useCallback(
    (error: Error): void => {
      console.error("Assessment error:", {
        assessmentId,
        error: error.message,
        stack: error.stack,
      });
    },
    [assessmentId],
  );

  const ErrorComponent = useMemo(() => {
    function AssessmentError({ error }: { error: Error }) {
      return (
        <AssessmentErrorFallback error={error} assessmentId={assessmentId} />
      );
    }
    return AssessmentError;
  }, [assessmentId]);

  return (
    <ErrorBoundary errorComponent={ErrorComponent} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}
