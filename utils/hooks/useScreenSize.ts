import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export default function useScreenSize() {
	const screenWidth = useWindowSize()?.width ?? 0;
	const isDesktop = screenWidth >= 1024;
	const isTablet = screenWidth < 1024;
	const isMobile = screenWidth < 768;

	return {
		isTablet,
		isMobile,
		isDesktop,
		screenWidth,
	};
}

export const useWalletScreenSize = (breakpoint: number) => {
	const [isLargeScreen, setIsLargeScreen] = useState(
		typeof window !== "undefined" ? window.innerWidth >= breakpoint : false
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleResize = () =>
			setIsLargeScreen(window.innerWidth >= breakpoint);
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return isLargeScreen;
};
