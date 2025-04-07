import { usePersonStore } from '../../store/person-info/personStore.ts'

export const PersonInfo = () => {
    const person = usePersonStore((state) => state.person)

    // computed field
    const isAdult = usePersonStore(state => {
      const birthYear = state.person?.birthday?.split('-')[0]
      if (!birthYear) return false
      const age = new Date().getFullYear() - parseInt(birthYear)
      return age >= 18
    })

    if (!person) return <div className="panel panel-person-info">No person loaded.</div>
    return (
      <div className="panel panel-person-info">
        <h3>Person</h3>
        {/* <img src={person.image} alt="img" style={{ width: '100%', borderRadius: '8px' }} /> */}
        <h2>{person.firstname} {person.lastname}</h2>
        <p><strong>Email:</strong> {person.email}</p>
        <p><strong>Phone:</strong> {person.phone}</p>
        <p><strong>Birthday:</strong> {person.birthday}</p>
        <p>{isAdult ? "✔ Adult" : "❌ Minor"}</p>
        <p><strong>Gender:</strong> {person.gender}</p>
        <p><strong>Website:</strong> <a href={person.website}>{person.website}</a></p>
      </div>
    )
  }
  