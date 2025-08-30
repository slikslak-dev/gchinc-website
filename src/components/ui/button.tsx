import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-base motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive motion-safe:active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground elevation-1 hover:elevation-2 hover:bg-primary/90 active:elevation-0 focus-visible:elevation-3",
        destructive:
          "bg-destructive text-destructive-foreground elevation-1 hover:elevation-2 hover:bg-destructive/90 active:elevation-0 focus-visible:elevation-3 focus-visible:outline-destructive",
        outline:
          "border border-border bg-surface-1 text-foreground elevation-0 hover:elevation-1 hover:bg-surface-2 hover:text-foreground active:elevation-0",
        secondary:
          "bg-secondary text-secondary-foreground elevation-0 hover:elevation-1 hover:bg-secondary/80 active:elevation-0",
        ghost:
          "text-foreground hover:bg-surface-2 hover:text-foreground active:bg-surface-3",
        link: "text-primary underline-offset-4 hover:underline focus-visible:outline-primary",
        brand:
          "bg-gradient-to-r from-maple-red-700 to-maple-red-600 text-white elevation-2 hover:elevation-3 hover:from-maple-red-600 hover:to-maple-red-500 active:elevation-1 focus-visible:elevation-4 focus-visible:outline-maple-red-500",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-lg has-[>svg]:px-3",
        sm: "h-8 px-3 rounded-md gap-1.5 has-[>svg]:px-2.5",
        lg: "h-11 px-8 rounded-xl text-base has-[>svg]:px-6",
        xl: "h-12 px-10 rounded-xl text-lg has-[>svg]:px-8",
        icon: "size-9 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-11 rounded-xl",
      },
      elevation: {
        none: "elevation-0",
        sm: "elevation-1",
        md: "elevation-2",
        lg: "elevation-3",
        xl: "elevation-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      elevation: "sm",
    },
  }
)

export interface ButtonProps 
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  elevation,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, elevation, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
