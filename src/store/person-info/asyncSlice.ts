import { Person } from './personSlice.ts'
import { Address } from './addressSlice.ts'

export type AsyncSlice = {
  loading: boolean
  error: string | null
  fetchPerson: () => Promise<void>
}

export const createAsyncSlice = (
  set: (args: Partial<AsyncSlice>) => void,
  get: () => {
    setPerson: (p: Person) => void
    setAddress: (a: Address) => void
  }
): AsyncSlice => ({
  loading: false,
  error: null,
  fetchPerson: async () => {
    set({ loading: true, error: null })

    try {
      const res = await fetch('https://fakerapi.it/api/v2/persons?_quantity=1')
      const json = await res.json()
      const data = json.data[0]

      const person: Person = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        birthday: data.birthday,
        gender: data.gender,
        website: data.website,
        image: data.image,
      }

      const address: Address = {
        street: data.address.street,
        streetName: data.address.streetName,
        buildingNumber: data.address.buildingNumber,
        city: data.address.city,
        zipcode: data.address.zipcode,
        country: data.address.country,
        latitude: data.address.latitude,
        longitude: data.address.longitude,
      }

      get().setPerson(person)
      get().setAddress(address)

      set({ loading: false })
    } catch (err) {
      set({ error: 'Failed to fetch person', loading: false })
    }
  },
})
