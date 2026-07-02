import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    await emailjs.send(
      "service_cv4c8p2",
      "template_ubbmu3g",
      {
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        message: values.message,
        title: "New Website Inquiry",
      },
      "c-bzuueqyD5dbTIA5"
    );

    toast({
      title: "Message sent successfully",
      description: "One of our premium agents will contact you shortly.",
    });

    form.reset();
  } catch (error) {
    console.error(error);

    toast({
      title: "Failed to send message",
      description: "Please try again later.",
      variant: "destructive",
    });
  }
}

  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Contact Our Private Office</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Experience discreet, personalized service. Visit our downtown Dubai office or schedule a private consultation at a location of your choice.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Dubai Headquarters</h4>
                  <p className="text-gray-400">Level 42, Boulevard Plaza Tower 1<br/>Downtown Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Direct Line</h4>
                  <a href="tel:+97140000000" className="text-gray-400 hover:text-primary transition-colors">+971 4 000 0000</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                  <a href="mailto:vip@eleva.com" className="text-gray-400 hover:text-primary transition-colors">vip@eleva.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-border p-8 md:p-10 rounded-3xl shadow-xl"
          >
            <h4 className="text-2xl font-bold text-white mb-8">Send an Inquiry</h4>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-card border-border h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+971 50 000 0000" className="bg-card border-border h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="bg-card border-border h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="I am interested in..." 
                          className="bg-card border-border min-h-[120px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-14 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
