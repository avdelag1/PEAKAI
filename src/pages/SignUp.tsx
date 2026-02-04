import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, ArrowLeft, Check, Crown, Star, Diamond } from "lucide-react";
import { toast } from "sonner";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const tiers = [
  {
    id: "silver",
    name: "Silver",
    price: "$199/mo",
    icon: Star,
    features: [
      "Priority reservations",
      "Exclusive venue access",
      "24/7 concierge support",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: "$499/mo",
    icon: Crown,
    popular: true,
    features: [
      "Everything in Silver",
      "VIP table guarantees",
      "Personal concierge",
      "Event invitations",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "$999/mo",
    icon: Diamond,
    features: [
      "Everything in Gold",
      "Unlimited reservations",
      "Private experiences",
      "Global access",
      "Yacht & jet bookings",
    ],
  },
];

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedTier, setSelectedTier] = useState("gold");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.info("Sign up functionality", {
      description: "This feature requires backend integration. Enable Lovable Cloud to add authentication.",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
                Join <span className="text-gradient-gold">Mercur</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Access the world's most exclusive venues and experiences
              </p>
            </div>

            {/* Membership Tiers */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {tiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={cn(
                      "relative p-6 rounded-2xl text-left transition-all duration-300",
                      selectedTier === tier.id
                        ? "glass-card border-gold ring-2 ring-gold"
                        : "glass-card border-gold/20 hover:border-gold/40"
                    )}
                  >
                    {tier.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    
                    <Icon className={cn(
                      "h-8 w-8 mb-4",
                      selectedTier === tier.id ? "text-gold" : "text-muted-foreground"
                    )} />
                    
                    <h3 className="font-serif font-semibold text-foreground text-xl mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-gold font-semibold text-2xl mb-4">{tier.price}</p>
                    
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>

            {/* Sign Up Form */}
            <div className="max-w-md mx-auto glass-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
                  <Input
                    id="fullName"
                    variant="luxury"
                    placeholder="John Doe"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName.message}</p>
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
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      variant="luxury"
                      placeholder="••••••••"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    variant="luxury"
                    placeholder="••••••••"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="gold" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : `Join as ${tiers.find(t => t.id === selectedTier)?.name} Member`}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Already a member?{" "}
                  <Link to="/sign-in" className="text-gold hover:text-gold/80 font-medium">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;