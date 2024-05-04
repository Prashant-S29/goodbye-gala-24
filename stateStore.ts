import { create } from "zustand";

type ShowCursorType = {
  showCursor: boolean;
  setShowCursor: (showCursor: boolean) => void;
};

export const useUserProfile = create<ShowCursorType>()((set) => ({
  showCursor: false,
  setShowCursor: (showCursor: boolean) => set({ showCursor }),
}));
