import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate,Link} from "react-router-dom"
const LandingPage = () => {
    const [countries,setCountries]=useState([])
   
    useEffect(()=>{
        axios.get("http://localhost:8000/api/countries")
        .then((allCountries) => setCountries(allCountries.data))
      .catch((err) => console.log(err));

    },[])
    const nav=useNavigate()
    const editCountry=((id)=>{
            nav(`/country/${id}/edit`)
    })
    const createCountry=(()=>{
      nav(`/country/new`)
})
    const deleteCountry=((id)=>{
      axios
  .delete(`http://localhost:8000/api/countries/${id}`)
  .then((res) => {
    console.log(res);
    const filteredCountries = countries.filter((eachCountries) => {
      return eachCountries._id !== id;
    });
    setCountries(filteredCountries);
  })
  .catch((err) => console.log(err));
  })
  return (
    <div className="p-10">
        <h1 className="text-3xl font-bold ">Countries List</h1>
        <button onClick={()=>createCountry()} className="bg-blue-500 text-white font-bold py-1 px-2 border rounded ml-7">New Country</button>
        <table className=" border-collapse  md:table     mt-5 w-full">
            <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative w-full">
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Flag</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Independent</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions </th>
        
                </tr>
            </thead>
            <tbody className="block md:table-row-group ">
         {countries.map((oneCountry)=>{
            return (
                <tr key={oneCountry._id} className=" border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-violet-500"><Link to={`/country/${oneCountry._id}`} > {oneCountry.name} </Link> </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-violet-500"><img className="w-24" src={oneCountry.flag} alt={oneCountry.name}  /> </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-violet-500">{oneCountry.independent ? <p>Yes</p>:<p>No</p>}</td>
                
                    <td className="p-2 md:border md:border-grey-500 text-left md:table-cell flex ">
                        
                       
                        <button onClick={()=>deleteCountry(oneCountry._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                        <button onClick={()=>editCountry(oneCountry._id)} className="bg-blue-500 text-white font-bold py-1 px-2 border rounded ml-7">Edit</button>
                      
                        
                    </td>
                </tr>
                
                )  })}
            </tbody>
            
        </table>
    </div>
  )
}

export default LandingPage