import { createContext } from "react";

import type { Assessment } from "@/interfaces/assessment";

export interface AssessmentContextValue {
  assessmentNotFound: boolean;
  currentAssessment: Assessment | null;
  isLoading: boolean;
  onError?: (error: Error, context?: string) => void;
}

export const AssessmentContext = createContext<AssessmentContextValue | null>(
  null,
);
