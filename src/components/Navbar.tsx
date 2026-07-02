import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["home", "services", "properties", "why-us", "testimonials", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Properties", id: "properties" },
    { name: "Why Choose Us", id: "why-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <img src="/logo.jpeg" alt="Eleva Properties" className="h-10 w-auto rounded-sm" />
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">ELEVA</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.id ? "text-primary" : "text-gray-300"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+97140000000" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Free Consultation
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className={`text-left text-base font-medium transition-colors ${
                activeSection === link.id ? "text-primary" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-border flex flex-col space-y-4">
            <a href="tel:+97140000000" className="flex items-center gap-2 text-base font-medium text-gray-300 hover:text-white">
              <Phone size={18} />
              <span>+971 4 000 0000</span>
            </a>
            <Button onClick={() => scrollTo("contact")} className="w-full bg-primary text-primary-foreground">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
