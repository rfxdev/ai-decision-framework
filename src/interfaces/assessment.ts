import type { AssessmentID } from "@/enums/AssessmentID";
import type { ClassificationTypes } from "@/enums/ClassificationTypes";
import type { FeedbackType } from "@/enums/FeedbackType";
import type { GenAiPageID, GenAiSectionID } from "@/enums/GenAiAssessmentIDs";

export type PageID = GenAiPageID;
export type SectionID = GenAiSectionID;

export interface Feedback {
  content: string;
  mitigation?: string;
  type: FeedbackType;
}

export interface QuestionOption {
  classification: ClassificationTypes;
  feedback: Feedback[];
  optionRef: string;
  question?: Question;
  text: string;
}

export interface Question {
  id: string;
  options: QuestionOption[];
  text: string;
}

export interface Page {
  description?: string;
  id: PageID;
  question: Question;
  title: string;
}

export interface AssessmentSection {
  description: string;
  id: SectionID;
  pageOrder: PageID[];
  title: string;
}

export interface AssessmentMetadata {
  /** Brief explanation of what this assessment evaluates and its purpose */
  description: string;

  /** How long will the assessment take */
  estimatedTime: string;

  /** Ordered list of evaluation sections that make up this assessment */
  sections: AssessmentSection[];

  /** Display name for this assessment shown to users */
  title: string;
}

export interface Assessment {
  id: AssessmentID;
  metadata: AssessmentMetadata;
  pages: Record<PageID, Page>;
}

export interface GenAiAssessment
  extends Omit<Assessment, "id" | "metadata" | "pages"> {
  id: AssessmentID.GEN_AI_SUITABILITY;
  metadata: Omit<AssessmentMetadata, "sections"> & {
    sections: Array<
      Omit<AssessmentSection, "id" | "pageOrder"> & {
        id: GenAiSectionID;
        pageOrder: GenAiPageID[];
      }
    >;
  };
  pages: Record<GenAiPageID, Omit<Page, "id"> & { id: GenAiPageID }>;
}
