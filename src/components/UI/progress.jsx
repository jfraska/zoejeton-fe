"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
import gsap from "gsap";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
  const indicatorRef = React.useRef(null);

  React.useEffect(() => {
    if (indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        x: `-${100 - (value || 0)}%`,
        duration: 2,
        ease: "power3.out",
      });
    }
  }, [value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        ref={indicatorRef}
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-100%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
