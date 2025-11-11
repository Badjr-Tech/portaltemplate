import Header from '@/components/Header';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
