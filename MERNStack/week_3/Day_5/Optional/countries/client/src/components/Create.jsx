import {  useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Create = () => {
    const [name,setName]=useState("")
    const [flag,setFlag]=useState("")
    const [independent,setIndependent]=useState(true)
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const createCountry = {
          name,
          flag,
          independent

         
        };
        axios
          .post("http://localhost:8000/api/countries", createCountry)
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
        setFlag("")
        setIndependent(true)
       
      };
  return (
    <div className='pl-64 pr-64'>
         <form
           onSubmit={handleSubmit}
              className="p-8 rounded-lg shadow-lg w-full mt-10"
            >
              <h1 className="text-xl font-semibold mb-4">Add A New Country:</h1>
              {errors.map((err, index) => <p key={index} className="text-red-600 mb-6">{err}</p>)}
              
              <div className="mb-4">
                <label>Name:</label>
                {/* <p  className="text-red-600 mb-6">{nameerror}</p> */}
                <input
                 onChange={(e)=>{setName(e.target.value)}}
                  type="text"
                   
                  className="text-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                />
                </div>
                <div className="mb-4">
                <label>Flag:</label>
                {/* <p  className="text-red-600 mb-6">{nameerror}</p> */}
                <input
                 onChange={(e)=>{setFlag(e.target.value)}}
                  type="text"
                   
                  className="text-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label>Independent:</label>
                {/* <p  className="text-red-600 mb-6">{nameerror}</p> */}
                <input
                 onChange={(e)=>{setIndependent(e.target.checked)}}
                  type="checkbox"
                   
                  className="text-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                />
              </div>
          <div className="flex justify-around gap-5">
              
              <button  className="w-32 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                Submit
              </button>
              </div>
            </form> 
    
    </div>
  )
}

export default Create