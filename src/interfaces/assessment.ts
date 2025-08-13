import { ClassificationTypes } from "@/enums/ClassificationTypes";
import { FeedbackType } from "@/enums/FeedbackType";
import { PageID } from "@/enums/PageID";

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
  id: string;
  pageOrder: PageID[];
  title: string;
}

export interface AssessmentMetadata {
  description: string;
  sections: AssessmentSection[];
  title: string;
}

export interface Assessment {
  id: string;
  metadata: AssessmentMetadata;
  pages: Record<PageID, Page>;
}
