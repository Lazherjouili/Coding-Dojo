
import {Routes,Route} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Create from './components/Create';
import Update from './components/Update';
import ShowOne from "./components/ShowOne";
function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/" element={< LandingPage />}/>
      <Route path="/country/new" element={< Create />}/>
      <Route path="/country/:id/edit" element={< Update />}/>
      <Route path="/country/:id" element={< ShowOne />}/>
      
     </Routes>
    </div>
  );
}

export default App;
