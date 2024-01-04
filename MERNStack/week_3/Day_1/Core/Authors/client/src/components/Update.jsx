import { Link } from 'react-router-dom'
import {  useState,useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

const Update = () => {
    const [name,setName]=useState([])
    const [errors, setErrors] = useState([]); 
    const [nameerror, setNameerror] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/authors/${id}`)
          .then((res) => {
            setName(res.data.name);
           
            
          })
          .catch((err) => console.log(err));
      }, [id]);
      const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAuthor = {
         name,
          };
        axios
          .patch(`http://localhost:8000/api/authors/${id}`, updatedAuthor)
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
      
       
      };
      const checkLength = (value) => {
        setName(value);
        
        if (value.length < 3) {
            setNameerror(" Name must be at least 3 characters");
        } else {
            setNameerror("");
        }
      };
      const toHome=(()=>{
        navigate("/")
      })
  return (
    <div className="flex flex-col items-center ">
    <div className="max-h-screen flex flex-col items-center ">
      <Link to={`/`}>
        <h1 className="text-left font-bold text-lg mt-20">Home</h1>
      </Link>
      <form
     onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-lg w-96 mt-10"
      >
        <h1 className="text-xl font-semibold mb-4">Add A New Author</h1>
        {errors.map((err, index) => <p key={index} className="text-red-600 mb-6">{err}</p>)}
        <div className="mb-4">
          <label>Name:</label>
          <p  className="text-red-600 mb-6">{nameerror}</p>
          <input
           onChange={(e)=>{checkLength(e.target.value)}}
            type="text"
            value={name}
            className="text-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
          />
        </div>
    <div className="flex justify-around gap-5">
        <button onClick={()=>toHome()} className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
          Cancel
        </button>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
        </div>
      </form> 


    </div>
  </div>
  )
}

export default Update