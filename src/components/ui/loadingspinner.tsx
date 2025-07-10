import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const spinnerVariants = cva(
  "animate-spin-slow inline-block rounded-full border-[3px] border-solid border-transparent",
  {
    variants: {
      variant: {
        default: "border-t-primary border-r-primary",
        primary: "border-t-primary-500 border-r-primary-500",
        secondary: "border-t-secondary border-r-secondary",
        destructive: "border-t-destructive border-r-destructive",
        success: "border-t-success border-r-success",
        warning: "border-t-warning border-r-warning",
        info: "border-t-info border-r-info",
        corporate: "border-t-accent-blue border-r-accent-blue",
        gradient:
          "border-t-gradient-start border-r-gradient-mid border-b-gradient-end",
      },
      size: {
        xs: "h-4 w-4 border-[2px]",
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-10 w-10",
        xl: "h-12 w-12",
        "2xl": "h-16 w-16 border-[4px]",
      },
      speed: {
        slow: "animate-spin-slow",
        medium: "animate-[spin_2s_linear_infinite]",
        fast: "animate-[spin_0.8s_linear_infinite]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      speed: "medium",
    },
  }
);

export interface LoadingSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
  labelPosition?: "left" | "right" | "top" | "bottom";
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  (
    {
      className,
      variant,
      size,
      speed,
      label,
      labelPosition = "right",
      ...props
    },
    ref
  ) => {
    const spinner = (
      <div
        ref={ref}
        className={spinnerVariants({ variant, size, speed, className })}
        {...props}
      />
    );

    if (!label) return spinner;

    const positions = {
      left: "flex-row-reverse",
      right: "flex-row",
      top: "flex-col-reverse",
      bottom: "flex-col",
    };

    const spacing = {
      xs: "gap-1",
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-2.5",
      xl: "gap-3",
      "2xl": "gap-3.5",
    };

    return (
      <div
        className={`flex items-center ${positions[labelPosition]} ${
          spacing[size || "md"]
        }`}
      >
        {spinner}
        <span
          className={`text-sm font-medium ${
            variant === "gradient" ? "text-gradient" : "text-foreground"
          }`}
        >
          {label}
        </span>
      </div>
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };