import type { JSX } from "react";

import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "@/components/ui/Loader";
import { AssessmentStartView } from "@/components/views/AssessmentStartView";
import { useAssessment } from "@/hooks/useAssessment";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function AssessmentStartPage(): JSX.Element {
  const { assessmentId } = useParams<{ assessmentId: string }>();
  const { assessmentNotFound, currentAssessment, isLoading, onError } =
    useAssessment();

  const startAssessmentPath = useMemo(() => {
    if (!assessmentId || !currentAssessment) {
      return null;
    }

    try {
      const firstSection = currentAssessment.metadata.sections[0];

      if (!firstSection) {
        throw new Error("Assessment has no sections configured");
      }

      const firstPageId = firstSection.pageOrder[0];

      if (!firstPageId) {
        throw new Error("Assessment has no pages configured");
      }

      return `/assessment/${assessmentId}/${firstPageId}`;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      onError?.(
        new Error(`Cannot start assessment: ${errorMessage}`),
        "AssessmentStartPage.startAssessmentPath",
      );
      throw error;
    }
  }, [assessmentId, currentAssessment, onError]);

  if (isLoading) {
    return <Loader message="Loading assessment..." />;
  }

  if (assessmentNotFound) {
    return <NotFoundPage />;
  }

  if (!currentAssessment) {
    throw new Error("Assessment data is missing after successful load");
  }

  if (!startAssessmentPath) {
    throw new Error("Failed to generate assessment start path");
  }

  return (
    <AssessmentStartView
      assessment={currentAssessment}
      startAssessmentPath={startAssessmentPath}
    />
  );
}
