import { create } from "zustand";

type SidebarStore = {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (state: boolean) => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  isMobileSidebarOpen: false,
  setIsMobileSidebarOpen: (state) => set({ isMobileSidebarOpen: state }),
}));

export default useSidebarStore;
