import { useEffect } from "react";
import { useLocation } from "wouter";
import { 
Building2,
MessageSquare,
Star
,BarChart3,} 
from "lucide-react";
import { LogOut } from "lucide-react";
export default function Dashboard() {

  const [, navigate] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (admin !== "true") {
      navigate("/admin");
    }
  }, [navigate]);

  return (
  <div className="min-h-screen bg-background text-white">
    <div className="max-w-7xl mx-auto p-8">

      <div className="flex items-center justify-between">

  <div>
    <h1 className="text-4xl font-bold">
      Eleva Admin Panel
    </h1>

    <p className="text-gray-400 mt-2">
      Welcome back, Admin 👋
    </p>
  </div>

  <button
    onClick={handleLogout}
    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition"
  >
    <LogOut size={18} />
    Logout
  </button>

</div>
     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

  <div className="bg-card border border-border rounded-2xl p-6">
    <Building2 className="w-8 h-8 text-primary mb-4" />
    <h3 className="text-gray-400">Properties</h3>
    <p className="text-3xl font-bold mt-2">6</p>
  </div>

  <div className="bg-card border border-border rounded-2xl p-6">
    <MessageSquare className="w-8 h-8 text-primary mb-4" />
    <h3 className="text-gray-400">Contact Leads</h3>
    <p className="text-3xl font-bold mt-2">0</p>
  </div>

  <div className="bg-card border border-border rounded-2xl p-6">
    <Star className="w-8 h-8 text-primary mb-4" />
    <h3 className="text-gray-400">Testimonials</h3>
    <p className="text-3xl font-bold mt-2">5</p>
  </div>

  <div className="bg-card border border-border rounded-2xl p-6">
    <BarChart3 className="w-8 h-8 text-primary mb-4" />
    <h3 className="text-gray-400">Analytics</h3>
    <p className="text-3xl font-bold mt-2">Soon</p>
  </div>

</div>
    </div>
  </div>
);
}