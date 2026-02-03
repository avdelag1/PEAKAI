import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-lg border bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-input focus-visible:ring-ring",
        luxury: "border-gold/30 bg-charcoal focus-visible:ring-gold focus-visible:border-gold/60 text-foreground",
        search: "h-14 border-gold/20 bg-charcoal/80 backdrop-blur-sm focus-visible:ring-gold focus-visible:border-gold/50 text-lg pl-14",
        glass: "border-gold/20 bg-background/50 backdrop-blur-md focus-visible:ring-gold",
      },
      inputSize: {
        default: "h-10",
        sm: "h-9 text-sm",
        lg: "h-12 text-base",
        xl: "h-14 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, inputSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
