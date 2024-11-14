import React, { ReactNode } from "react";
import { cn, toastOptions } from "@/utils/functions";
import { Toaster } from "sonner";
import Nav from "../Nav/Nav";
import { Josefin_Sans, Lato } from "next/font/google";

export const josefin_sans = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  subsets: ["latin"],
});
export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-josefin",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster
        duration={1150}
        position="top-center"
        toastOptions={toastOptions}
        visibleToasts={1}
      />

      <div
        id="layout"
        className={cn(
          `${josefin_sans.className} ${lato.className} font-lato bg-body_gradient relative min-h-screen overflow-x-clip`
        )}
      >
        <Nav />
        <div
          className={cn("mt-3.5 pb-8 lgx:mt-4 max-w-[1440px] mx-auto", {
            // "w-[95%]": router.pathname === "/",
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
}
