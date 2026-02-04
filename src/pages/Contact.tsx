import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const faqs = [
  {
    question: "How does the Mercur membership work?",
    answer: "Mercur offers three membership tiers—Silver, Gold, and Platinum—each providing increasing levels of access to exclusive venues, priority reservations, and personalized concierge services worldwide.",
  },
  {
    question: "Which destinations do you cover?",
    answer: "We currently operate in Monaco, Dubai, Mykonos, and Ibiza, with plans to expand to additional luxury destinations including St. Tropez, Miami, and Maldives.",
  },
  {
    question: "How far in advance should I book?",
    answer: "For standard reservations, we recommend 48-72 hours notice. For high-demand venues during peak seasons, 1-2 weeks advance notice ensures the best availability.",
  },
  {
    question: "Can you accommodate large groups?",
    answer: "Absolutely. Our concierge team specializes in organizing events and gatherings of all sizes, from intimate dinners to large celebrations.",
  },
  {
    question: "Is there a cancellation policy?",
    answer: "Cancellation policies vary by venue and membership tier. Gold and Platinum members enjoy more flexible cancellation terms. Contact your concierge for specific details.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes, all members have access to our 24/7 concierge support. Platinum members receive a dedicated personal concierge for immediate assistance.",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent!", {
      description: "Our team will get back to you within 24 hours.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our dedicated concierge team is here to assist you around the clock
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gold/10">
                    <MessageCircle className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">24/7 Concierge</h3>
                    <p className="text-muted-foreground">Available for all members</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gold/10">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">concierge@mercur.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gold/10">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (888) MERCUR-1</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gold/10">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">Monaco, French Riviera</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gold/20">
                    <AccordionTrigger className="text-foreground hover:text-gold text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl h-fit">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    variant="luxury"
                    placeholder="Your name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    variant="luxury"
                    placeholder="your@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    variant="luxury"
                    placeholder="How can we help?"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="border-gold/30 bg-charcoal focus-visible:ring-gold min-h-[150px]"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="gold" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;