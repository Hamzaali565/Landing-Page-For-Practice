import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      // username
      username: null,
      setUsername: (name) => set({ username: name }),
      clearUsername: () => set({ username: null }),
      //   email
      email: null,
      setEmail: (email) => set({ email: email }),
      clearEmail: () => set({ email: null }),
      // role
      role: null,
      setRole: (role) => set({ role: role }),
      clearRole: () => set({ role: null }),
      // login_check
      login_check: false,
      setLoginCheck: (login_check) => set({ login_check: login_check }),
      clearLoginCheck: () => set({ login_check: null }),
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export default useUserStore;
