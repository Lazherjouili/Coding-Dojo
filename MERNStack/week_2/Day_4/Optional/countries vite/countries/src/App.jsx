import { useState } from 'react'
import axios from "axios"
import './App.css'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])

  const fetchCountries=()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((res)=>{
      setCountries(res.data);
      console.log(res.data)
    })
    .catch((err)=>console.log(err))
  }
  const updateCountry=(idx)=>{
    const newList=[...countries]
    newList[idx].independent=!newList[idx].independent
    setCountries(newList)
  }
const deleteCountires=(idx)=>{
  setCountries(countries.filter((c,i)=>{
   return i!==idx
  }))
}
  return (
    <>
     <button onClick={fetchCountries} className='btn btn-success'>Fetch countries</button>
     <table>
      <thead>
        <th>Name</th>
        <th>Flag</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {countries.map((country,idx)=>{
          return(<Countries key={idx} country={country} idx={idx} updateCountry={updateCountry} deleteCountires={deleteCountires}/>)
        })}
      </tbody>
     </table>
    </>
  )
}

export default App
