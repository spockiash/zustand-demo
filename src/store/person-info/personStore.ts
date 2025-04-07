import { create } from 'zustand'
import { createPersonSlice, PersonSlice } from './personSlice.ts'
import { createAddressSlice, AddressSlice } from './addressSlice.ts'
import { createAsyncSlice, AsyncSlice } from './asyncSlice.ts'

type Store = PersonSlice & AddressSlice & AsyncSlice

export const usePersonStore = create<Store>()((set, get) => ({
  ...createPersonSlice(set),
  ...createAddressSlice(set),
  ...createAsyncSlice(set, get),
}))
