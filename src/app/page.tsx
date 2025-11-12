import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="border-4 border-red-500">Welcome to the Portal!</h1>
      {userId ? (
        <p>You are signed in as user: {userId}</p>
      ) : (
        <p>Please sign in to continue.</p>
      )}
    </div>
  );
}
