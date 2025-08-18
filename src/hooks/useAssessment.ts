import { useContext } from "react";

import type { AssessmentContextValue } from "@/contexts/AssessmentContext";

import { AssessmentContext } from "@/contexts/AssessmentContext";

export function useAssessment(): AssessmentContextValue {
  const context = useContext(AssessmentContext);

  if (!context) {
    throw new Error(
      "useAssessment must be used within an AssessmentProvider. " +
        "Make sure the component is wrapped in <AssessmentProvider>.",
    );
  }

  return context;
}
