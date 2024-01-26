import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios'
import {  useState } from 'react'
const Create = () => {
    const [name,setName]=useState("")
    const [position,setPosition]=useState("")
    const [errors, setErrors] = useState([]); 
    const [nameerror, setNameerror] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const createPlayer = {
          name,
          position,
         
        };
        axios
          .post("http://localhost:8000/api/players", createPlayer)
          .then((res) => {
            navigate("/");
          })
          .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })       
        setName("");
        setPosition("")
       
      };

    const checkLength = (value) => {
        setName(value);
        
        if (value.length < 3) {
            setNameerror(" Name must be at least 3 characters");
        } else {
            setNameerror("");
        }
      };
      
  return (
    <div className=" border-2 mt-10 p-8 pr-36 pl-36">
    <Link to="/" className="text-2xl ">List |</Link> <Link to="/players/addplayer" className="text-2xl ">Add Player</Link>
    <form
           onSubmit={handleSubmit}
              className=" rounded-lg w-full mt-10 pl-40 pr-40"
            >
              <h1 className="text-xl font-semibold mb-4">Add Player</h1>
              {errors.map((err, index) => <p key={index} className="text-red-600 mb-6">{err}</p>)}
              
              <div className="mb-4">
                <label>Player Name:</label>
                <p  className="text-red-600 mb-6">{nameerror}</p>
                <input
                 onChange={(e)=>{checkLength(e.target.value)}}
                  type="text"
                   
                  className="text-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label>Preferred Position:</label>
                {/* <p  className="text-red-600 mb-6">{nameerror}</p> */}
                <input
                 onChange={(e)=>{setPosition(e.target.value)}}
                  type="text"
                   
                  className="text-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                />
              </div>
          <div className="flex justify-around gap-5">
              
              <button type="submit" className="w-32 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
               Add
              </button>
              </div>
            </form> 
</div>
  )
}

export default Create