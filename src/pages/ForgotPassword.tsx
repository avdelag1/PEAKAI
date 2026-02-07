import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    setIsLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setIsLoading(false);
    
    if (error) {
      toast.error(error.message);
      return;
    }
    
    setSubmitted(true);
  };
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
       
       <main className="pt-24 pb-16">
         <div className="container mx-auto px-6">
           <div className="max-w-md mx-auto">
             <Link
               to="/sign-in"
               className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
             >
               <ArrowLeft className="h-4 w-4" />
               Back to Sign In
             </Link>
 
             {submitted ? (
               <div className="glass-card p-8 rounded-2xl text-center">
                 <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                   <CheckCircle className="h-8 w-8 text-gold" />
                 </div>
                 <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
                   Check Your Email
                 </h1>
                 <p className="text-muted-foreground mb-6">
                   If an account exists with that email, we've sent password reset instructions.
                 </p>
                 <Link to="/sign-in">
                   <Button variant="gold" className="w-full">
                     Return to Sign In
                   </Button>
                 </Link>
               </div>
             ) : (
               <div className="glass-card p-8 rounded-2xl">
                 <div className="text-center mb-8">
                   <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                     Reset Password
                   </h1>
                   <p className="text-muted-foreground">
                     Enter your email and we'll send you reset instructions
                   </p>
                 </div>
 
                 <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                     <FormField
                       control={form.control}
                       name="email"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel className="text-foreground">Email</FormLabel>
                           <FormControl>
                             <div className="relative">
                               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                               <Input
                                 {...field}
                                 type="email"
                                 placeholder="your@email.com"
                                 className="pl-10 bg-charcoal border-gold/20 focus:border-gold"
                               />
                             </div>
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />
 
                      <Button type="submit" variant="gold" className="w-full" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Reset Link"}
                      </Button>
                   </form>
                 </Form>
               </div>
             )}
           </div>
         </div>
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default ForgotPassword;