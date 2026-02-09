import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Server Session Info</h1>

      {session ? (
        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <h2 className="font-semibold mb-2">User Info:</h2>
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      ) : (
        <p className="text-gray-600">
          No session found. User is not logged in.
        </p>
      )}
    </div>
  );
};

export default page;
