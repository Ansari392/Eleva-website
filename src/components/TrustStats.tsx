import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span className="font-bold">{count.toLocaleString()}{suffix}</span>;
};

export function TrustStats() {
  const stats = [
    { label: "Happy Clients", value: 500, suffix: "+" },
    { label: "Property Value Sold", value: 150, suffix: "M+", prefix: "AED " },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Years Experience", value: 10, suffix: "+" },
  ];

  return (
    <section className="py-20 border-y border-border bg-card/30 relative">
      <div className="absolute inset-0 bg-[url('/logo-transparent.png')] bg-no-repeat bg-center bg-contain opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-2">
                {stat.prefix}
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
