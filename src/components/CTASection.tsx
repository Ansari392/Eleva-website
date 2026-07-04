import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Dubai Background" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto p-12 md:p-16 rounded-3xl border border-primary/20 bg-card/60 backdrop-blur-xl shadow-2xl shadow-primary/5"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your <span className="text-primary italic font-serif font-normal">Perfect Property?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Connect with our luxury real estate experts to begin your journey. We are available 24/7 to assist you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold"
            >
              Book Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open("https://wa.me/971500000000", "_blank")}
              className="w-full sm:w-auto h-14 px-8 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-base font-semibold transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
