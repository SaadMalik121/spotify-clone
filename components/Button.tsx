import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, disabled, type = "button", ...props }, ref) => {
  return (
    <button
      type={type}
      className={twMerge(
        `w-full rounded-full bg-green-500 border border-transparent px-3 py-4 disabled:cursor-not-allowed disabled:opacity-50 text-black font-black hover:opacity-75 transition`,
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
