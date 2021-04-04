import React from 'react'

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
  const peopleList = people.map(person => (
   <h1>
     I am {person.name}. I like {person.sport}
   </h1>
  ))

  return <div>{peopleList}</div>
}

export default NameList
