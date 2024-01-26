import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import axios from "axios";

const ShowOne = () => {
  const [oneCountry,setOneCountry]=useState(null)
  const {id}=useParams()
  const nav=useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/countries/${id}`)
      .then((one) => setOneCountry(one.data)
      )
      .catch((err) => console.log(err));
  }, [id]);
  
  const editCountry=((id)=>{
    nav(`/country/${id}/edit`)
})
  const Home=(()=>{
    nav(`/`)
})
  return (
    <div className="pl-64 pr-64 pt-40 " >
        
        <div className="relative m-auto flex  justify-center w-full  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-3">
      {oneCountry &&<div className=" flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold ">{oneCountry.name} Details</h2>
      <h4 className="text-1xl font-bold ">{oneCountry.name} </h4>

      <img className="w-24" src={oneCountry.flag} alt={oneCountry.name} />
      
      {oneCountry.independent ? <p className=" font-bold ">Independent:Yes</p>:<p className=" font-bold ">Independent:No</p>}
      <div className="flex gap-3">
      <button onClick={()=>editCountry(oneCountry._id)} className="bg-blue-500 text-white font-bold py-1 px-4 border rounded ">Edit</button>
      
      <button onClick={()=>Home()} className="bg-green-500 text-white font-bold py-1 px-2 border rounded ">HOME</button>
      </div>
      </div>}
      </div>
    </div>
  )
}

export default ShowOne