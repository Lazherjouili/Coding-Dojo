import { useState,useEffect } from "react"
import axios from "axios"
import { Link ,useNavigate} from "react-router-dom"

const LandingPage = () => {
    const [authors,setAuthors]=useState([])
   
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((allAuthors) => setAuthors(allAuthors.data))
      .catch((err) => console.log(err));

    },[])
   const nav=useNavigate()
    const editAuthor=((id)=>{
            nav(`/authors/${id}/edit`)
    })
    const deleteAuthor=((id)=>{
        axios
    .delete(`http://localhost:8000/api/authors/${id}`)
    .then((res) => {
      console.log(res);
      const filteredAuthors = authors.filter((eachAuthors) => {
        return eachAuthors._id !== id;
      });
      setAuthors(filteredAuthors);
    })
    .catch((err) => console.log(err));
    })
  return (
    <div className="mt-6 ">
        <div className="flex flex-col justify-center">
        <Link className="underline text-blue-400" to={"/authors/new"}>Add an author</Link>
        <h3 className="text-violet-500">We have quotes by:</h3>
        </div>
        <table className=" border-collapse  md:table     mt-5 w-2/4">
            <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative w-full">
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Author</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions </th>
        
                </tr>
            </thead>
            <tbody className="block md:table-row-group ">
        {authors.map((oneAuthor)=>{
            return (
                <tr key={oneAuthor._id} className=" border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-violet-500">{oneAuthor.name}</td>
                
                    <td className="p-2 md:border md:border-grey-500 text-left md:table-cell flex ">
                        
                        <button onClick={()=>editAuthor(oneAuthor._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-5">Edit</button>
                        <button onClick={()=>deleteAuthor(oneAuthor._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                      
                        
                    </td>
                </tr>
                
                )  })}
            </tbody>
            
        </table>
       
        
    </div>
  )
}

export default LandingPage