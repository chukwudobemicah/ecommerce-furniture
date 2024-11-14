import { cn } from "@/utils/functions";
import React, { useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
  isLoading = false,
  ...props
}: {
  children: React.ReactNode;
  variant?: "secondary" | "primary" | "tertiary" | "outline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // onClick?: () => void | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  animation?: string;
  link?: string;
  linkOpensInNewTab?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* -------------------------------------------------------------------------------------------------
   * Returned tsx
   * -----------------------------------------------------------------------------------------------*/

  return (
    <button
      disabled={isLoading}
      className={cn(
        "font-titan-one cursor-pointer font-normal shadow-app active:scale-90 px-5 py-1 flex-center-center hover:brightness-125 duration-300 ease-in-out transition-all hover:shadow-xl text-white",
        {
          "bg-primary_button_gradient hover:shadow-[#FCE96050] hover:shadow-lg text-black shadow-app":
            variant === "primary",
          "border border-border bg-secondary_button_gradient hover:shadow-white/15 hover:shadow-lg ":
            variant === "secondary",
          "bg-pinkGradient  hover:shadow-[#ED6DC940]": variant === "tertiary",
          "px-4 py-1 border border-primary bg-container_gradient":
            variant === "outline",
          "opacity-50 active:scale-100": isLoading,
        },
        className
      )}
      onClick={onClick}
      {...props}
      ref={buttonRef}
    >
      <div
        className={cn({
          "ml-5 relative": isLoading,
        })}
      >
        {isLoading && (
          <div className="z-[999] absolute top-1/2 -left-8 -translate-y-[40%]">
            <ClipLoader
              color={
                variant === "primary"
                  ? "#fff"
                  : variant === "secondary"
                  ? "#FE8723"
                  : undefined
              }
              loading={isLoading}
              size={18}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        {children}
      </div>
    </button>
  );
}
