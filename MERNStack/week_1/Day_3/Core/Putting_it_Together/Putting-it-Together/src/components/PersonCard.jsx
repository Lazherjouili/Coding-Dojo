import React from 'react'
// import { useState } from "react";
import Person from './Person';
const PersonCard = (props) => {
  const btnStyle = {
    padding: "12px 15px",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    background: "linear-gradient(30deg, rebeccapurple, magenta)",
    color: "#fff",
    border: "none",
  };
    const {person} =props
   
    // const [personObj, setPersonObj] = useState();
    // const happyBirthday = () => {
    //   setPersonObj({ ...personObj, age: personObj.age + 1 });
    // };
  return (
    <div>
        {person.map((elem, idx) => {

          return( <Person elem={elem} key={idx}/> )
        })}
    </div>
  )
  

}

export default PersonCard