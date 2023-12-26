import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const People = () => {
    const [onepeople,setOnepeople]=useState(null)
    
    const { p,id } = useParams();
    console.log(p)
    const nav = useNavigate();
useEffect(()=>{
    axios
    .get(
      `https://swapi.dev/api/${p}/${id}`
    )
    .then((response) => {
      setOnepeople(response.data);
      console.log(response.data);
    })
    .catch((error) => nav("/error"));

},[p,id,nav])

  return ( 
    
    <div className='ml-40 mt-10'>
        {onepeople &&<>{ p === "people"? <>
<h1 className='text-2xl font-bold mb-5'>{onepeople.name}</h1>
<p ><span className='font-bold'>Heigth:</span> {onepeople.height}</p>
<p ><span className='font-bold'>Mass:</span > {onepeople.mass}</p>
<p ><span className='font-bold'>Hair Color:</span> {onepeople.hair_color}</p>
<p ><span className='font-bold'>Skin Color:</span> {onepeople.skin_color}</p>
</>
 :<>
 <h1 className='text-2xl font-bold mb-5'>{onepeople.name}</h1>
 <p ><span className='font-bold'>Climate:</span> {onepeople.climate}</p>
 <p ><span className='font-bold'>Terrain:</span > {onepeople.terrain}</p>
 <p ><span className='font-bold'>Surface Water:</span> {onepeople.surface_water}</p>
 <p ><span className='font-bold'>Population:</span> {onepeople.population}</p>
 </>}
 </>
}
    </div>
)
}


export default People