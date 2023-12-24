import {useState} from 'react'

const Form = ({add}) => {
  const [title,setTitle]=useState("")
  const handleTitle=(e)=>{
    e.preventDefault();
    const newTask={
        title:title,
        check:false
    }
    add(newTask)
    setTitle("")
  }
  return (
    <form onSubmit={handleTitle} className=' flex flex-col'>
        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text"  className="rounded-lg block flex-1 border-0 bg-gray-300 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 mb-5" ></input>
        <button  className="rounded-md bg-blue-600 px-4 py-1.5 text-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 w-20">Add</button>
  
    </form>
  )
}

export default Form