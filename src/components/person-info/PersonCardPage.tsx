// src/components/PersonCardPage.tsx
import { usePersonStore } from '../../store/person-info/personStore.ts'
import { PersonInfo } from "./PersonInfo.tsx"
import AddressInfo from './AddressInfo.tsx'

export default function PersonCardPage() {
  const fetchPerson = usePersonStore((state) => state.fetchPerson)
  const loading = usePersonStore((state) => state.loading)
  const error = usePersonStore((state) => state.error)

  return (
    <div>
      <button onClick={fetchPerson} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Person'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="person-page-container">
        <PersonInfo />
        <AddressInfo />
      </div>
    </div>
  )
}
