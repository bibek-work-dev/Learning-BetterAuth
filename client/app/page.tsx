import LogoutButton from "@/components/LogoutButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="p-8">
      {session ? (
        <>
          <h1>Welcome back, {session.user.name}!</h1>

          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3>Full Session Data:</h3>
            <pre className="text-xs overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>

          <div className="mt-4">
            <LogoutButton />
          </div>
        </>
      ) : (
        <div>
          <h1>You are not logged in.</h1>
          <Link href="/auth/login" className="text-blue-500 underline">
            Go to Login
          </Link>
        </div>
      )}
    </div>
  );
}
