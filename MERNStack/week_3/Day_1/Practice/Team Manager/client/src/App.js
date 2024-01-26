
import {Routes,Route,Navigate,Link} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Create from './components/Create';
import Status from "./components/Status";
function App() {
  return (
    <div className="p-20">
<Link to="/" className="text-2xl ">Manage Players |</Link> <Link to="/status/game" className="text-2xl ">Manage Player Status</Link>
      <Routes>
       <Route path="/" element={<Navigate to="/players/list" />}/>
       <Route path="/players/list" element={< LandingPage />}/>
       <Route path="/players/addplayer" element={< Create />}/>
       <Route path="/status/game" element={< Status />}/>
     </Routes>
    </div>
  );
}

export default App;
