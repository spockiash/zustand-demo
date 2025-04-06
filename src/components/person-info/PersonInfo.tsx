// src/components/PersonInfo.tsx
import { usePersonStore } from '../../store/person-info/personStore.ts'

export default function PersonInfo() {
  const person = usePersonStore((state) => state.person)

  if (!person) return <div className="panel">No person loaded.</div>

  return (
    <div className="panel">
      <img src={person.image} alt="person" style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{person.firstname} {person.lastname}</h2>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>Phone:</strong> {person.phone}</p>
      <p><strong>Birthday:</strong> {person.birthday}</p>
      <p><strong>Gender:</strong> {person.gender}</p>
      <p><strong>Website:</strong> <a href={person.website}>{person.website}</a></p>
    </div>
  )
}
