import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Luxury Dubai Skyline" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Dubai's Premier Agency</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Find Your <br />
              <span className="text-primary italic font-serif font-normal">Dream Property</span> <br />
              in Dubai
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Helping buyers, sellers, and investors make smarter real estate decisions in the world's most dynamic market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollTo("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollTo("properties")}
                className="h-14 px-8 text-base font-semibold border-white/20 hover:bg-white/10 hover:text-white text-white backdrop-blur-sm"
              >
                Browse Properties
              </Button>
            </div>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative h-full flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-card/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl w-80 shadow-2xl absolute right-10"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img src="/property-1.png" alt="Featured Penthouse" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white">
                  Featured
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Skyline Penthouse</h3>
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-primary" />
                  Downtown Dubai
                </div>
                <div className="text-xl font-bold text-primary">AED 12,500,000</div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-sm text-gray-300">
                  <div className="flex items-center"><Bed className="w-4 h-4 mr-1" /> 4</div>
                  <div className="flex items-center"><Bath className="w-4 h-4 mr-1" /> 5</div>
                  <div className="flex items-center"><Square className="w-4 h-4 mr-1" /> 4,200 sqft</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
