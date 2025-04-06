import { usePersonStore } from '../../store/person-info/personStore.ts'

export const PersonInfo = () => {
    const person = usePersonStore((state) => state.person)
    if (!person) return <div className="panel panel-person-info">No person loaded.</div>
    return (
      <div className="panel panel-person-info">
        <h3>Person</h3>
        {/* <img src={person.image} alt="img" style={{ width: '100%', borderRadius: '8px' }} /> */}
        <h2>{person.firstname} {person.lastname}</h2>
        <p><strong>Email:</strong> {person.email}</p>
        <p><strong>Phone:</strong> {person.phone}</p>
        <p><strong>Birthday:</strong> {person.birthday}</p>
        <p><strong>Gender:</strong> {person.gender}</p>
        <p><strong>Website:</strong> <a href={person.website}>{person.website}</a></p>
      </div>
    )
  }
  