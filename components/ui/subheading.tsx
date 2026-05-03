import { cn } from "@/lib/utils";

interface SubheadingProps {
  text: string;
  className?: string;
}

export function Subheading({ text, className }: SubheadingProps) {
  return (
    <div className={cn("flex items-center space-x-3 mb-4", className)}>
      <div className="w-5 h-1 rounded-full bg-accent"></div>
      <span className="text-accent uppercase text-xs tracking-wider font-semibold">
        {text}
      </span>
    </div>
  );
}
