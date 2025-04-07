export type Address = {
    street: string
    streetName: string
    buildingNumber: string
    city: string
    zipcode: string
    country: string
    latitude: number
    longitude: number
  }
  
  export type AddressSlice = {
    address: Address | null
    setAddress: (a: Address) => void
  }
  
  export const createAddressSlice = (
    set: (args: { address: Address }) => void
  ): AddressSlice => ({
    address: null,
    setAddress: (address) => set({ address }),
  })
  