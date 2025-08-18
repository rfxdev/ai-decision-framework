import type { Assessment } from "@/interfaces/assessment";

// Import all assessments statically - Vite can handle this for code splitting
import genAiSuitabilityData from "@/data/gen-ai-suitability.json";
import { AssessmentID } from "@/enums/AssessmentID";

/**
 * Registry of available assessments
 * Add new assessments here when you create them
 */
const assessmentRegistry: Record<string, Assessment> = {
  [AssessmentID.GEN_AI_SUITABILITY]: genAiSuitabilityData as Assessment,
};

/**
 * Loads assessment configuration by ID
 * Returns a promise to maintain the same interface as dynamic loading
 */
export async function loadAssessment(
  assessmentId: AssessmentID,
): Promise<Assessment | null> {
  try {
    const assessment = assessmentRegistry[assessmentId];
    return assessment || null;
  } catch (error) {
    console.warn(`Failed to load assessment: ${assessmentId}`, error);
    return null;
  }
}

/**
 * Validates that an assessment ID is known
 */
export function isValidAssessmentId(
  assessmentId: string,
): assessmentId is AssessmentID {
  return Object.values(AssessmentID).includes(assessmentId as AssessmentID);
}
