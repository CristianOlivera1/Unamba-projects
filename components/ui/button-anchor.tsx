import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode, AnchorHTMLAttributes } from "react";

const buttonAnchorVariants = cva(
  "inline-flex items-center justify-center rounded-full font-bold tracking-widest transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-white text-black hover:bg-accent hover:text-white shadow-lg shadow-white/5 hover:shadow-accent/20",
        outline: "border-2 border-white/20 bg-transparent text-white hover:border-accent hover:bg-accent",
        accent: "bg-accent text-white hover:bg-white hover:text-black shadow-accent/20 shadow-xl",
        ghost: "bg-transparent text-white hover:bg-white/10",
      },
      size: {
        sm: "px-4 py-1.5 text-xs",
        md: "px-6 py-2.5 text-sm",
        lg: "px-10 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonAnchorProps 
  extends AnchorHTMLAttributes<HTMLAnchorElement>, 
          VariantProps<typeof buttonAnchorVariants> {
  href: string;
  children: ReactNode;
}

export function ButtonAnchor({ 
  href, 
  children, 
  className, 
  variant, 
  size, 
  ...props 
}: ButtonAnchorProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonAnchorVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </a>
  );
}
