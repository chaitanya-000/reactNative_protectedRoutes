import { create } from "zustand";

export const useStore = create((set) => ({
  loggedIn: true,
  setLoggedIn: (booleanValue) =>
    set((state) => ({
      loggedIn: false,
    })),
}));
