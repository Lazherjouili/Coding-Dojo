
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
const [pokemons,setPokemons]=useState([])
const axiosPokemon = () => {
  axios
    .get(
      "https://pokeapi.co/api/v2/pokemon/"
    )
    .then((response) => {
      setPokemons(response.data.results);
     
    })
    .catch((error) => console.log(error));
};
  return (
    <div className="App">
      <button onClick={axiosPokemon} className="rounded-md bg-blue-700 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mt-5">axios Pokemon</button>
     
      {pokemons && pokemons.map((one,idx)=>{
        return <p key={idx}>{one.name}</p>
      })}
      
    </div>
  );
}

export default App;
