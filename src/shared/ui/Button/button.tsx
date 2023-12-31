import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const button = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        default:
          "bg-primary fill-primary-foreground text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        selectDrop:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        linkVariant:
          "text-primary hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        default: "h-12 w-fit px-4 shrink-0 py-2",
        sm: "h-10 w-fit shrink-0 px-4 ",
        lg: "h-12 px-10 shrink-0",
        fluid: "group",
        withIcon: "h-11 gap-1 group shrink-0 px-4",
        withIconFull: "h-11 w-full justify-between px-4 gap-1",
      },
      shape: {
        default: "h-10 rounded-[10px] px-4 py-2",
        pill: "h-9 rounded-md px-3",
        round: "rounded-full",
      },
    },

    defaultVariants: {
      intent: "default",
      size: "default",
      shape: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children?: ReactNode;
  preset?: ReactNode;
  suffet?: ReactNode;
}

export function Button({
  className,
  intent,
  shape,
  size,
  children,
  type = "button",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={button({ intent, size, shape, className })}
      type={type}
      {...props}
    >
      {props?.suffet && props.suffet}
      {children && children}
      {props?.preset && props.preset}
    </button>
  );
}

// Define a type for the props specific to the LinkButton component
type LinkButtonProps = {
  children?: ReactNode;
  preset?: ReactNode;
  suffet?: ReactNode;
} & VariantProps<typeof button> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
export function LinkButton({
  className,
  intent,
  shape,
  size,
  children,
  href = "#",
  ...props
}: LinkButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className={button({ intent, size, shape, className })}
      {...props}
    >
      {props?.suffet && props.suffet}
      {children && children}
      {props?.preset && props.preset}
    </Link>
  );
}
