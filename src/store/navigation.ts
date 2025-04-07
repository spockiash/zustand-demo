// src/store/navigation.ts
import { createStore } from "zustand/vanilla";

export type Page = 'counter' | 'compare' | `person`

type NavigationStore = { 
    currentPage: Page
    navigate: (page: Page) => void
}

export const navigationStore = createStore<NavigationStore> ((set) => ({
    currentPage: 'counter',
    navigate: (page: Page) => set({ currentPage: page })
}))