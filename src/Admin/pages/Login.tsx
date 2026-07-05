import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [location, setLocation] = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
  if (
    email === "admin@eleva.com" &&
    password === "Eleva@123"
  ) {
    localStorage.setItem("admin", "true");
    setLocation("/dashboard");
  } else {
    setError("Invalid Email or Password");
  }
};

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl"
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src="/logo.jpeg"
            alt="Eleva Properties"
            className="h-14 mb-4"
          />

          <h1 className="text-3xl font-bold text-white">
            Admin Login
          </h1>

          <p className="text-gray-400 text-sm mt-2 text-center">
            Welcome back to Eleva Properties
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none"
                  />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-12 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && (
                <p className="text-red-500 text-sm text-center">
          {error}
                </p>
            )}
          <button
              type="button"
              onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}