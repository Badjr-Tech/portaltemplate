import { auth, redirectToSignIn } from '@clerk/nextjs';

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <div className="bg-accent p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}
