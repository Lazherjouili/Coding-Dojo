import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
const LandingPage = () => {
    const [players,setPlayers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
        .then((allPlayers) => setPlayers(allPlayers.data))
      .catch((err) => console.log(err));

    },[])
    const deletePlayer=((id)=>{
        axios
    .delete(`http://localhost:8000/api/players/${id}`)
    .then((res) => {
      console.log(res);
      const filteredPlayers = players.filter((eachPlayer) => {
        return eachPlayer._id !== id;
      });
      setPlayers(filteredPlayers);
    })
    .catch((err) => console.log(err));
    })
  return (
    <div className=" border-2 mt-10 p-8">
        <Link to="/" className="text-2xl ">List |</Link> <Link to="/players/addplayer" className="text-2xl ">Add Player</Link>
        <table className=" border-collapse  md:table     mt-5 w-full">
            <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative w-full">
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Team Name</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Preferred Position</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions </th>
        
                </tr>
            </thead>
            <tbody className="block md:table-row-group ">
        {players.map((onePlayer)=>{
            return (
                <tr key={onePlayer._id} className=" border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-violet-500">{onePlayer.name}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-violet-500">{onePlayer.position}</td>
                
                    <td className="p-2 md:border md:border-grey-500 text-left md:table-cell flex ">
                        
                       
                        <button onClick={()=>deletePlayer(onePlayer._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                      
                        
                    </td>
                </tr>
                
                )  })}
            </tbody>
            
        </table>
    </div>
  )
}

export default LandingPage