import React from 'react'
import { useState } from 'react'
const Form = ({updateBox}) => {
    const [color,setColor]=useState("")
    const [height,setHeight]=useState("")
    const handleColor=(e)=>{
        e.preventDefault();
        const newbox=(<div className= {`h-${height} w-32 p-4 bg-${color}-700 my-2.5 mx-2.5`} ></div>)
        updateBox(newbox)
        setColor("")
        setHeight("")
    }
  return (
    <form onSubmit={handleColor} className=" container mx-auto px-4 flex  justify-center   gap-5 items-center w-80 mt-5 mb-5 ">
        <label className="block text-sm font-bold leading-6 text-gray-900">Color</label>
        <input type="text" className="block flex border-2 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-3 sm:text-sm sm:leading-" onChange={(e)=>setColor(e.target.value)} value={color}/>
        <label className="block text-sm font-bold leading-6 text-gray-900">Height</label>
        <input type="text" className="block flex border-2 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-3 sm:text-sm sm:leading-" onChange={(e)=>setHeight(e.target.value)} value={height}/>
        <button className="rounded-md bg-orange-700 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">Add</button>
    </form>
  )
}

export default Form