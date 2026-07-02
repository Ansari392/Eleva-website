import { SiFacebook, SiInstagram } from "react-icons/si";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src="/logo.jpeg" alt="Eleva Properties" className="h-12 w-auto rounded-sm opacity-90" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Dubai's premier luxury real estate agency, specializing in exclusive properties, bespoke investment strategies, and unparalleled client service.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                <SiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                <SiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
                <span className="text-lg font-bold">in</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollTo("home")} className="text-gray-400 hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollTo("properties")} className="text-gray-400 hover:text-primary transition-colors">Properties</button></li>
              <li><button onClick={() => scrollTo("why-us")} className="text-gray-400 hover:text-primary transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => scrollTo("testimonials")} className="text-gray-400 hover:text-primary transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollTo("contact")} className="text-gray-400 hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><span className="text-gray-400 hover:text-primary transition-colors cursor-pointer">Buy a Property</span></li>
              <li><span className="text-gray-400 hover:text-primary transition-colors cursor-pointer">Sell a Property</span></li>
              <li><span className="text-gray-400 hover:text-primary transition-colors cursor-pointer">Rent a Property</span></li>
              <li><span className="text-gray-400 hover:text-primary transition-colors cursor-pointer">Investment Consulting</span></li>
              <li><span className="text-gray-400 hover:text-primary transition-colors cursor-pointer">Property Management</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">Address</span>
                Level 42, Boulevard Plaza Tower 1<br />Downtown Dubai, UAE
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">Phone</span>
                <a href="tel:+97140000000" className="hover:text-primary transition-colors">+971 4 000 0000</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium mb-1">Email</span>
                <a href="mailto:vip@eleva.com" className="hover:text-primary transition-colors">vip@eleva.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Eleva Properties. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
