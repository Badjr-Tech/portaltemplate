import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex justify-end p-4">
        <a href="/sign-in" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">
          Sign In
        </a>
      </div>
      <h1>Welcome to the Portal!</h1>
      {userId ? (
        <p>You are signed in as user: {userId}</p>
      ) : (
        null
      )}
    </div>
  );
}
