import {useState} from 'react'

const Person = (props) => {
    const btnStyle = {
        padding: "12px 15px",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        background: "linear-gradient(30deg, rebeccapurple, magenta)",
        color: "#fff",
        border: "none",
      };
    const {elem} =props
const [one,setOne]=useState(elem)
const happyBirthday = () => {
      setOne({ ...one, age: one.age + 1 });
    };
    return (
    <div>
        <h1>{one.lastName},{one.firstName}</h1>
        <p>Age :{one.age}</p>
        <p>Hair color :{one.hairColor}</p>
        
        <button style={btnStyle} onClick={happyBirthday}>Birthday Button for {one.firstName} {one.lastName}</button>
    </div>
    )
}

export default Person