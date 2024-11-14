import { Chevron } from "./icons/svgs";

export const ICON_TYPE: {
  [key: string]: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
} = {
  ICONS: {
    chevron: Chevron,
  },
};
