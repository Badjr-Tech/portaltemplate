import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to the Portal!</h1>
      {userId ? (
        <p>You are signed in as user: {userId}</p>
      ) : (
        <p>Please sign in to continue.</p>
      )}
    </div>
  );
}
