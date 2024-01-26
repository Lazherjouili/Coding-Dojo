import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
const Status = () => {

    const [players,setPlayers]=useState([])
    const [playing,setPlaying]=useState(false)
    const [notplaying,setNotPlaying]=useState(false)
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
        .then((allPlayers) => setPlayers(allPlayers.data))
      .catch((err) => console.log(err));

    },[])
    
    const choosedPlaying = (id) => {
    const updated = {
      playing: true,
      undecided :false,
      notplaying:false,
    };

    axios
      .patch(`http://localhost:8000/api/players/${id}`, updated)
      .then((res) => {
        console.log("My Id ============================>",id,res)
        
        axios.get("http://localhost:8000/api/players")
        .then((allPlayers) => setPlayers(allPlayers.data))
      .catch((err) => console.log(err));

        // navigate("/status/game");
      })
      .catch((err) => console.log(err));
      setPlaying(false);
  };
  
  const choosedPlaying1 = (id) => {
    const updated1 = {
      playing: false,
      undecided :true,
      notplaying:false,
    };

    axios
      .patch(`http://localhost:8000/api/players/${id}`, updated1)
      .then((res) => {
        console.log("My Id ============================>",id,res)
        
          axios.get("http://localhost:8000/api/players")
          .then((allPlayers) => setPlayers(allPlayers.data))
        .catch((err) => console.log(err));

        // navigate("/status/game");
      })
      .catch((err) => console.log(err));
      setPlaying(true);
  };
  const choosedNotPlaying1 = (id) => {
    const updatedn1 = {
      notplaying: false,
      undecided :true,
      playing:false,
    };

    axios
      .patch(`http://localhost:8000/api/players/${id}`, updatedn1)
      .then((res) => {
        console.log("My Id ============================>",id,res)
        
          axios.get("http://localhost:8000/api/players")
          .then((allPlayers) => setPlayers(allPlayers.data))
        .catch((err) => console.log(err));

        // navigate("/status/game");
      })
      .catch((err) => console.log(err));
      setNotPlaying(true);
  };

  const choosedNotPlaying = (id) => {
    const updatedn = {
      notplaying: true,
      undecided :false,
      playing:false,
    };

    axios
      .patch(`http://localhost:8000/api/players/${id}`, updatedn)
      .then((res) => {
        console.log("My Id ============================>",id,res)
        
          axios.get("http://localhost:8000/api/players")
          .then((allPlayers) => setPlayers(allPlayers.data))
        .catch((err) => console.log(err));

        // navigate("/status/game");
      })
      .catch((err) => console.log(err));
      setNotPlaying(false);
  };
  return (
    <div className=" border-2 mt-10 p-8">
    <Link to="/" className="text-2xl ">List |</Link> <Link to="/players/addplayer" className="text-2xl ">Add Player</Link>
    <table className=" border-collapse  md:table     mt-5 w-full">
        <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative w-full">
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Team Name</th>
                
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions </th>
            </tr>
        </thead>
        <tbody className="block md:table-row-group ">
    {players.map((onePlayer)=>{
        return (
            <tr key={onePlayer._id} className=" border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-violet-500">{onePlayer.name}</td>
                <td className="p-2 md:border md:border-grey-500 text-left md:table-cell flex ">
                  {onePlayer.playing? <>
                    <button  onClick={() => choosedPlaying1(onePlayer._id)} className="w-32  bg-green-500 text-white px-4 py-2 rounded-lg  focus:outline-none">{playing}Playing</button>
                    {/* */}
                  </>:<>
                  <button  onClick={() => choosedPlaying(onePlayer._id)} className="w-32 border-b-2 border-b-gray-500 bg-white text-black px-4 py-2 rounded-lg  focus:outline-none" >{playing}Playing</button>
                  </>}  
                    {onePlayer.notplaying ?<>
                    <button onClick={() => choosedNotPlaying1(onePlayer._id)} className="w-32 ml-7 bg-red-500 text-white px-4 py-2 rounded-lg  focus:outline-none">{notplaying}Not Playing</button>
                    </>:<>
                    <button onClick={() => choosedNotPlaying(onePlayer._id)} className="w-32 ml-7 border-b-2 border-b-gray-500 bg-white text-black px-4 py-2 rounded-lg  focus:outline-none">{notplaying}Not Playing</button>
                    </>}
                    {onePlayer.undecided ?<>
                    <button type="submit" className="w-32 ml-7 bg-yellow-300 text-white px-4 py-2 rounded-lg  focus:outline-none">Undecided</button>
                    </>:<>
                    <button type="submit" className="w-32 ml-7 border-b-2 border-b-gray-500 bg-white text-black px-4 py-2 rounded-lg  focus:outline-none">Undecided</button>
                    </>}
                </td>
            </tr>
            
            )  })}
        </tbody>
        
    </table>
</div>
  )
}

export default Status