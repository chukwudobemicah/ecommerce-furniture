import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: unknown[]) {
  return twMerge(clsx(args));
}

export const copyToClipboard = (text: string) => {
  navigator?.clipboard?.writeText(text);
};

const commonStyles =
  "capitalize !flex min-w-fit bg-backgound rounded-lg justify-flex-start items-flex-start right-0 !flex-row p-4 gap-4 w-full border !items-center";

export const toastOptions = {
  unstyled: true,
  classNames: {
    error: `${commonStyles} rounded-xl !bg-[#FF0000] !border-[#FF0000]`,
    success: `${commonStyles} bg-background rounded-xl !border-[#00FF38] !text-[#00FF38]`,
    loading: `${commonStyles} rounded-xl !border-[#15BFFD] !text-[#15BFFD]`,
    info: `${commonStyles} rounded-xl !border-primary bg-background !text-primary`,
    warning: `${commonStyles} rounded-xl !border-new-border !text-[#fad48e]`,
  },
};

export function shortenString(
  str: string,
  startLength: number = 8,
  endLength: number = 8
): string {
  // Return the full string if it's short enough
  if (str.length <= startLength + endLength) {
    return str;
  }
  // Return the string with the middle replaced by ellipses
  return `${str.substring(0, startLength)}...${str.substring(
    str.length - endLength
  )}`;
}
