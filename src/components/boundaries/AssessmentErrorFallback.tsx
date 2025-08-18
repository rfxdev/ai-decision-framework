import type { JSX } from "react";

import { useCallback } from "react";
import { Link } from "react-router-dom";

interface AssessmentErrorFallbackProps {
  assessmentId?: string;
  error: Error;
}

export function AssessmentErrorFallback({
  assessmentId,
  error,
}: AssessmentErrorFallbackProps): JSX.Element {
  const handleReload = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Assessment Error
          </h2>

          <p className="text-gray-600 mb-6">
            There was a problem loading this assessment. This might be due to a
            configuration issue or network problem.
          </p>

          <div className="space-y-3">
            <button
              onClick={handleReload}
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Reload Assessment
            </button>

            <Link
              to="/"
              className="block w-full px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Back to Home
            </Link>

            {assessmentId && (
              <Link
                to={`/assessment/${assessmentId}`}
                className="block w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Restart Assessment
              </Link>
            )}
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-left">
              <h3 className="text-sm font-medium text-yellow-800 mb-2">
                Development Info
              </h3>
              <p className="text-sm text-yellow-700 mb-2">
                <strong>Assessment ID:</strong> {assessmentId || "Unknown"}
              </p>
              <p className="text-sm text-yellow-700">
                <strong>Error:</strong> {error.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
