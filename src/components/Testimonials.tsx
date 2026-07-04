import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al Maktoum",
      role: "Property Investor",
      image: "/avatar-1.webp",
      text: "Eleva Properties found me a spectacular off-market villa in Palm Jumeirah. Their discretion, professionalism, and negotiation skills are unmatched in Dubai.",
      stars: 5,
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Corporate Executive",
      image: "/avatar-2.webp",
      text: "Relocating to Dubai was daunting, but Eleva made it seamless. They understood exactly what I needed and secured a stunning penthouse in Downtown Dubai.",
      stars: 5,
    },
    {
      id: 3,
      name: "Marcus von Berg",
      role: "Portfolio Manager",
      image: "/avatar-3.webp",
      text: "I trust Eleva with my entire Dubai real estate portfolio. Their market insights and strategic approach to property investment consistently deliver exceptional ROI.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">Client Success</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Stories of Excellence</h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <div className="bg-background border border-border p-8 rounded-2xl h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg italic mb-8 flex-grow">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <p className="text-primary text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="position-static transform-none static bg-card border-border hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="position-static transform-none static bg-card border-border hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
