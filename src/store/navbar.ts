import { create } from "zustand"

type NavbarStore = {
    isOpen: boolean
    toggle: () => void
    close: () => void
    open: () => void
}

export const useNavbar = create<NavbarStore>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set({ isOpen: false }),
    open: () => set({ isOpen: true })
}))