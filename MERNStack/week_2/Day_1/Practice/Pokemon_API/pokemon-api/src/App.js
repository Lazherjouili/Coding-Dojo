
import './App.css';
import { useState } from 'react';
function App() {
const [pokemons,setPokemons]=useState([])
const fetchPokemon=()=>{
  fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((serverResponse) => serverResponse.json())
        .then((jsonResponse) => setPokemons(jsonResponse.results)) // successfull
        .catch((error) => console.log("Something went wrong ❌❌❌❌", error)); // errors
        console.log(pokemons)
  }
  return (
    <div className="App">
      <button onClick={fetchPokemon} className="rounded-md bg-blue-700 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mt-5">fetchPokemon</button>
     
      {pokemons && pokemons.map((one,idx)=>{
        return <p key={idx}>{one.name}</p>
      })}
      
    </div>
  );
}

export default App;
