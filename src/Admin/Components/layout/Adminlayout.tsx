import Sidebar from "../Sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}