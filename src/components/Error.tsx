import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { useEffect } from "react";

interface ErrorResponse {
  status: number;
  statusText: string;
  data?: {
    message?: string;
  };
}

const Error = () => {
  const err = useRouteError() as unknown;

  useEffect(() => {
    console.error("Routing Error:", err);
  }, [err]);

  const isKnownError = isRouteErrorResponse(err as ErrorResponse);
  const errorData = err as ErrorResponse;

  return (
    <div className="min-h-screen bg-background font-inter flex flex-col items-center justify-center p-6 text-center">
      {/* Animated medical cross */}
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
          <div className="absolute w-8 h-24 bg-red-500 rounded-lg" />
          <div className="absolute w-24 h-8 bg-red-500 rounded-lg" />
          <div className="w-28 h-28 border-4 border-red-300 rounded-full absolute animate-ping opacity-75" />
        </div>
      </div>

      {/* Error message */}
      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-secondary">
          Oops! An Error Occurred
        </span>
      </h1>

      <div className="max-w-2xl mx-auto">
        <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-text mb-2">
            {isKnownError
              ? `${errorData.status} - ${errorData.statusText}`
              : "An unexpected error occurred"}
          </h2>
          <p className="text-textSecondary mb-4">
            It seems we've encountered a problem while processing your request.
          </p>

          {isKnownError && errorData.data?.message && (
            <div className="bg-background p-3 rounded-lg text-sm text-red-500 font-mono mb-4 text-left">
              {errorData.data.message}
            </div>
          )}
        </div>

        {/* Creative diagnosis message */}
        <div className="bg-surface p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-text mb-3 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-secondary mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Diagnostic Report
          </h3>
          <ul className="space-y-2 text-textSecondary text-left max-w-md mx-auto">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>Route not found or unavailable</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Possible broken link or expired session</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Our technical team has been notified</span>
            </li>
          </ul>
        </div>

        {/* Recovery actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Return to Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-surface border border-border text-text font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh Page
          </button>
        </div>

        {/* Support contact */}
        <div className="mt-8 text-sm text-textSecondary">
          <p>Need immediate assistance?</p>
          <a
            href="mailto:support@medsupply.com"
            className="text-secondary hover:underline inline-flex items-center mt-1"
          >
            Contact our support team
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
