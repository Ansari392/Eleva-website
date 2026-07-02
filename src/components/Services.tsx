import { motion } from "framer-motion";
import { Key, Building, TrendingUp, HandCoins } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Buy Property",
      description: "Discover exclusive off-plan and ready properties tailored to your lifestyle and budget in Dubai's prime locations.",
      icon: Key,
    },
    {
      title: "Sell Property",
      description: "Maximize your returns with our targeted marketing strategies and extensive network of high-net-worth buyers.",
      icon: Building,
    },
    {
      title: "Rent Property",
      description: "Find the perfect luxury long-term or short-term rental that meets your exacting standards of comfort and prestige.",
      icon: HandCoins,
    },
    {
      title: "Investment Consulting",
      description: "Data-driven insights and strategic advice to help you build a highly profitable Dubai real estate portfolio.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Real Estate Services</h3>
            <p className="text-gray-400 text-lg">
              End-to-end solutions for discerning clients seeking excellence in the Dubai property market.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
