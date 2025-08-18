import type { JSX } from "react";

import { Link } from "react-router-dom";

import type { Assessment } from "@/interfaces/assessment";

interface AssessmentStartViewProps {
  assessment: Assessment;
  startAssessmentPath: string;
}

export function AssessmentStartView({
  assessment,
  startAssessmentPath,
}: AssessmentStartViewProps): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <main className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {assessment.metadata.title}
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            {assessment.metadata.description}
          </p>
        </header>

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What to expect
          </h2>

          <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-blue-600">
            <li>
              <strong>Time required:</strong>{" "}
              {assessment.metadata.estimatedTime}
            </li>
            <li>
              <strong>Sections:</strong> {assessment.metadata.sections.length}{" "}
              evaluation areas
            </li>
            <li>
              <strong>Progress:</strong> Your answers are automatically saved as
              you go
            </li>
            <li>
              <strong>Results:</strong> You'll receive immediate feedback and
              recommendations
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Assessment sections
          </h2>

          <ol className="grid gap-3">
            {assessment.metadata.sections.map((section, index) => (
              <li
                key={section.id}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3"
                  aria-label={`Section ${index + 1}`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className="text-sm text-gray-600">
                      {section.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex justify-center">
          <Link
            to={startAssessmentPath}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-blue-700 transition-colors inline-block text-center"
          >
            Start Assessment
          </Link>
        </section>
      </main>
    </div>
  );
}
