import { motion } from "framer-motion";
import { ShieldCheck, Map, Zap, FileSearch, Headset } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      title: "Trusted Experts",
      description: "Our agents are RERA-certified professionals with years of high-end market experience.",
      icon: ShieldCheck,
    },
    {
      title: "Premium Locations",
      description: "Exclusive access to off-market properties in Dubai's most sought-after neighborhoods.",
      icon: Map,
    },
    {
      title: "Fast Process",
      description: "Streamlined transactions from viewing to handover, ensuring a seamless experience.",
      icon: Zap,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. We provide complete financial clarity on every property deal.",
      icon: FileSearch,
    },
    {
      title: "24/7 Support",
      description: "Dedicated concierges available around the clock to address your real estate needs.",
      icon: Headset,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">The Eleva Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Investors Trust <br />
              <span className="font-serif italic text-primary font-normal">Our Expertise</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We don't just sell properties; we build legacies. Our deep understanding of the Dubai market, combined with an unwavering commitment to our clients' success, sets us apart as the premier luxury real estate agency.
            </p>
            
            <img 
              src="/logo-transparent.png" 
              alt="Eleva Emblem" 
              className="w-32 h-auto opacity-80"
            />
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
