import { Toaster } from "@/components/ui/toaster";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="pl-64 p-8 animate-fadeIn">
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;