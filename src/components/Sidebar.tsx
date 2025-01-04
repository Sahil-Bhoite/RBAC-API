import { Link, useLocation } from "react-router-dom";
import { Home, Users, FolderKanban, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/projects", icon: FolderKanban, label: "Projects" },
    { to: "/users", icon: Users, label: "Users" },
  ];

  return (
    <div className="h-screen w-64 bg-primary p-4 text-white fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">API Manager</h1>
      </div>
      <nav className="space-y-2">
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
              location.pathname === to
                ? "bg-white/20"
                : "hover:bg-white/10"
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 right-4">
        <button className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;