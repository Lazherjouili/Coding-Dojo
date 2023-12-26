import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Form = () => {
    const [id,setId]=useState(1)
    const [select,setSelect]=useState("people")
    const navigate = useNavigate();
   const handleAddrTypeChange=(e)=>{
        setSelect(e.target.value)
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", id,select);
    navigate("/"+select+"/"+id);
  };

  return (
    <form onSubmit={ handleSubmit} className="flex items-center gap-4 mt-5 justify-center"> 
           <label  className=" text-sm font-bold leading-6 text-gray-900">Search for :</label>
         
            <select onChange={handleAddrTypeChange} className=" w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 font-bold">
              <option >people</option>
              <option >planets</option>
            </select> 
          
          <label  className="text-sm font-bold leading-6 text-gray-900 ">ID :</label>
        
          <input input type="text" onChange={(e)=>{setId(e.target.value)} } className=" w-24 rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 font-bold"></input>

          <button  className="rounded-md bg-blue-700 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">Search</button>
          </form>
  )
}

export default Form