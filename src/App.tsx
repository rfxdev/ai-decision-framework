import type { JSX } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AssessmentErrorBoundary } from "@/components/boundaries/AssessmentErrorBoundary";
import { ErrorBoundary } from "@/components/boundaries/ErrorBoundary";
import { AssessmentStartPage } from "@/pages/AssessmentStartPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AssessmentProvider } from "@/providers/AssessmentProvider";

import "./index.css";

export function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/assessment/:assessmentId/*"
            element={
              <AssessmentErrorBoundary>
                <AssessmentProvider>
                  <Routes>
                    <Route index element={<AssessmentStartPage />} />
                    {/*<Route path=":pageId" element={<AssessmentPage />} />*/}
                    {/*<Route path="conclusion" element={<AssessmentConclusionPage />} />*/}
                  </Routes>
                </AssessmentProvider>
              </AssessmentErrorBoundary>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
