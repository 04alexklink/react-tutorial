import React from 'react'
import Person from './Person'

function NameList() {

  const people = [
    {
      id: 1,
      name: 'Alex',
      sport: 'Tennis'
    },
    {
      id: 2,
      name: 'Adam',
      sport: 'none'
    },
    {
      id: 3,
      name: 'Ben',
      sport: 'Surfing'
    }
  ]
  const peopleList = people.map(person => <Person key={person.id} name={person.name} sport={person.sport}/> )

  return <div>{peopleList}</div>
}

export default NameList
