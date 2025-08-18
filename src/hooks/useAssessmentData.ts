import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Assessment } from "@/interfaces/assessment";

import {
  isValidAssessmentId,
  loadAssessment,
} from "@/services/assessmentLoader";

interface UseAssessmentDataResult {
  assessmentNotFound: boolean;
  currentAssessment: Assessment | null;
  isLoading: boolean;
}

export function useAssessmentData(): UseAssessmentDataResult {
  const { assessmentId } = useParams<{ assessmentId: string }>();
  const [currentAssessment, setCurrentAssessment] = useState<Assessment | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [assessmentNotFound, setAssessmentNotFound] = useState(false);

  useEffect(() => {
    async function fetchAssessment() {
      if (!assessmentId || !isValidAssessmentId(assessmentId)) {
        setCurrentAssessment(null);
        setAssessmentNotFound(true);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const result = await loadAssessment(assessmentId);
        setCurrentAssessment(result);
        setAssessmentNotFound(!result);
      } catch (error) {
        console.error(`Error loading assessment ${assessmentId}:`, error);
        setCurrentAssessment(null);
        setAssessmentNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }

    void fetchAssessment();
  }, [assessmentId]);

  return { assessmentNotFound, currentAssessment, isLoading };
}
