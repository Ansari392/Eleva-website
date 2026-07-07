import { Link } from "wouter";
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  Star,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen p-6">

      <h2 className="text-2xl font-bold text-white mb-10">
        ELEVA
      </h2>

      <nav className="space-y-3">

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <Link href="/properties">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-secondary transition">
            <Building2 size={20} />
            Properties
            </button>
        </Link>

        <Link href="/leads">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-secondary transition">
          <MessageSquare size={20} />
          Contact Leads
           </button>
        </Link>

      <Link href="/testimonials">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-secondary transition">
        <Star size={20} />
        Testimonials
        </button>
      </Link>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-secondary transition">
          <Settings size={20} />
          Settings
        </button>

      </nav>

    </aside>
  );
}