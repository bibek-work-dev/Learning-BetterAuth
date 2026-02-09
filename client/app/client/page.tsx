"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

const page = () => {
  const {
    data: session,
    isPending, // loading state
    error, // error object
    refetch, // refetch the session
  } = authClient.useSession();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Session Info</h1>

      {/* Loading state */}
      {isPending && <p className="text-blue-500">Loading session...</p>}

      {/* Error */}
      {error && (
        <p className="text-red-500">
          Error fetching session: {error.message || "Unknown error"}
        </p>
      )}

      {/* Session data */}
      {session ? (
        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <h2 className="font-semibold mb-2">User Info:</h2>
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
          <button
            onClick={() => refetch()}
            className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Refresh Session
          </button>
        </div>
      ) : (
        !isPending && (
          <p className="text-gray-600">
            No session found. You are not logged in.
          </p>
        )
      )}
    </div>
  );
};

export default page;
