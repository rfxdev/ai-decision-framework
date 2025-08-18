import type { JSX } from "react";

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();
  const handleStartOver = useCallback(() => navigate("/"), [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Please try again.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleStartOver}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
