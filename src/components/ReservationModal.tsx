import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Users, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Venue } from "@/data/types";

const reservationSchema = z.object({
  contactName: z.string().min(2, "Name must be at least 2 characters"),
  contactEmail: z.string().email("Please enter a valid email"),
  contactPhone: z.string().min(10, "Please enter a valid phone number"),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  venue: Venue;
}

const ReservationModal = ({ open, onOpenChange, venue }: ReservationModalProps) => {
  const [date, setDate] = useState<Date>();
  const [partySize, setPartySize] = useState<string>("2");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormData) => {
    if (!date) {
      toast.error("Please select a date");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Reservation request submitted!", {
      description: `We'll confirm your reservation at ${venue.name} shortly.`,
    });
    
    reset();
    setDate(undefined);
    setPartySize("2");
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-charcoal border-gold/20">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Request Reservation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {venue.name}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Date and Party Size */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-foreground">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="luxuryOutline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Party Size</Label>
              <Select value={partySize} onValueChange={setPartySize}>
                <SelectTrigger className="border-gold/30 bg-charcoal">
                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((size) => (
                    <SelectItem key={size} value={String(size)}>
                      {size} {size === 1 ? "guest" : "guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-foreground">Full Name</Label>
              <Input
                id="contactName"
                variant="luxury"
                placeholder="John Doe"
                {...register("contactName")}
              />
              {errors.contactName && (
                <p className="text-sm text-destructive">{errors.contactName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactEmail" className="text-foreground">Email</Label>
              <Input
                id="contactEmail"
                type="email"
                variant="luxury"
                placeholder="john@example.com"
                {...register("contactEmail")}
              />
              {errors.contactEmail && (
                <p className="text-sm text-destructive">{errors.contactEmail.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPhone" className="text-foreground">Phone</Label>
              <Input
                id="contactPhone"
                type="tel"
                variant="luxury"
                placeholder="+1 (555) 000-0000"
                {...register("contactPhone")}
              />
              {errors.contactPhone && (
                <p className="text-sm text-destructive">{errors.contactPhone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequests" className="text-foreground">Special Requests</Label>
              <Textarea
                id="specialRequests"
                placeholder="Any special requests or preferences..."
                className="border-gold/30 bg-charcoal focus-visible:ring-gold min-h-[80px]"
                {...register("specialRequests")}
              />
            </div>
          </div>

          {/* Venue Hours */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-gold/10 p-3 rounded-lg">
            <Clock className="h-4 w-4" />
            <span>
              Open {venue.hours.open} - {venue.hours.close} ({venue.hours.days})
            </span>
          </div>

          {/* Submit */}
          <Button 
            type="submit" 
            variant="gold" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;