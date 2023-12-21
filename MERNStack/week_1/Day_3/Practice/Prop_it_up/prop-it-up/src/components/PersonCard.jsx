import React from 'react'

const PersonCard = (props) => {
    const {person} =props
   
  return (
    <div>
        {person.map((elem, idx) => {

          return( <div key={idx}>
                  <h1 >{elem.lastName},{elem.firstName}</h1>
                  <p >Age :{elem.age}</p>
                  <p >Hair color :{elem.hairColor}</p>
                  </div> )
        })}
    </div>
  )
}

export default PersonCard