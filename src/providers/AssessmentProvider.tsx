import type { JSX, ReactNode } from "react";

import { useMemo } from "react";

import {
  AssessmentContext,
  type AssessmentContextValue,
} from "@/contexts/AssessmentContext";
import { useAssessmentData } from "@/hooks/useAssessmentData";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface AssessmentProviderProps {
  children: ReactNode;
}

export function AssessmentProvider({
  children,
}: AssessmentProviderProps): JSX.Element {
  const { handleError } = useErrorHandler();
  const assessmentData = useAssessmentData();

  const contextValue: AssessmentContextValue = useMemo(
    () => ({
      ...assessmentData,
      onError: handleError,
    }),
    [assessmentData, handleError],
  );

  return (
    <AssessmentContext.Provider value={contextValue}>
      {children}
    </AssessmentContext.Provider>
  );
}
