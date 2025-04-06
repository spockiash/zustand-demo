// src/components/AddressInfo.tsx
import { usePersonStore } from '../../store/person-info/personStore.ts'

export default function AddressInfo() {
  const address = usePersonStore((state) => state.address)

  if (!address) return <div className="panel panel-person-info">No address loaded.</div>

  return (
    <div className="panel panel-person-info">
      <h3>Address</h3>
      <p>{address.street} ({address.buildingNumber})</p>
      <p>{address.streetName}</p>
      <p>{address.city}, {address.zipcode}</p>
      <p>{address.country}</p>
      <p><strong>Lat:</strong> {address.latitude}</p>
      <p><strong>Lng:</strong> {address.longitude}</p>
    </div>
  )
}
