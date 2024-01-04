
import './App.css';
import {Routes,Route} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Create from './components/Create';
import Update from './components/Update';
function App() {
  
  return (
    <div className=" pl-96 mt-6 pr-96">
      <h1 className="text-3xl font-bold ">Favorite authors</h1>
     <Routes>
      <Route path="/" element={< LandingPage />}/>
      <Route path="/authors/new" element={< Create />}/>
      <Route path="/authors/:id/edit" element={< Update />}/>
      
     </Routes>
    </div>
  );
}

export default App;
