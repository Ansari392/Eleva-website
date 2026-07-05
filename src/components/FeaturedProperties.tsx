import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const properties = [
  {
    id: 1,
    title: "Skyline Penthouse",
    location: "Downtown Dubai",
    price: "12,500,000",
    beds: 4,
    baths: 5,
    area: "4,200",
    image: "/property-1.webp",
    type: "Penthouse"
  },
  {
    id: 2,
    title: "Oceanfront Infinity Villa",
    location: "Palm Jumeirah",
    price: "28,000,000",
    beds: 6,
    baths: 7,
    area: "8,500",
    image: "/property-2.webp",
    type: "Villa"
  },
  {
    id: 3,
    title: "Marina Heights Apartment",
    location: "Dubai Marina",
    price: "4,200,000",
    beds: 2,
    baths: 3,
    area: "1,800",
    image: "/property-3.webp",
    type: "Apartment"
  },
  {
    id: 4,
    title: "Grand Golf Estate",
    location: "Dubai Hills Estate",
    price: "18,500,000",
    beds: 5,
    baths: 6,
    area: "6,400",
    image: "/property-4.webp",
    type: "Mansion"
  },
  {
    id: 5,
    title: "The Royal Residence",
    location: "Business Bay",
    price: "8,900,000",
    beds: 3,
    baths: 4,
    area: "2,900",
    image: "/property-5.webp",
    type: "Penthouse"
  },
  {
    id: 6,
    title: "Desert Oasis Retreat",
    location: "Al Barari",
    price: "15,000,000",
    beds: 5,
    baths: 6,
    area: "7,200",
    image: "/property-6.webp",
    type: "Villa"
  }
];

export function FeaturedProperties() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="properties" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">Exclusive Listings</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Properties</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group">
              View All Properties
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={property.image} alt={property.title} loading="lazy" decoding="async" width={600} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10">
                  {property.type}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-2xl font-bold text-primary mb-1">AED {property.price}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{property.title}</h4>
                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <MapPin className="w-4 h-4 mr-1 text-primary" />
                  {property.location}
                </div>
                
                <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-gray-300 mb-6">
                  <div className="flex items-center gap-2"><Bed className="w-4 h-4 text-primary" /> <span>{property.beds} Beds</span></div>
                  <div className="flex items-center gap-2"><Bath className="w-4 h-4 text-primary" /> <span>{property.baths} Baths</span></div>
                  <div className="flex items-center gap-2"><Square className="w-4 h-4 text-primary" /> <span>{property.area} sqft</span></div>
                </div>

                <Button 
                  onClick={() => scrollTo("contact")}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
