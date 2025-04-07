export type Person = {
    firstname: string
    lastname: string
    email: string
    phone: string
    birthday: string
    gender: string
    website: string
    image: string
  }
  
  export type PersonSlice = {
    person: Person | null
    isAdult: boolean
    setPerson: (p: Person) => void
  }
  
  export const createPersonSlice = (set: (arg0: { person: Person; }) => void): PersonSlice => ({
    person: null,
    isAdult: false,
    setPerson: (person) => set({ person }),
  })