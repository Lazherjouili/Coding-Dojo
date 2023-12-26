
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Error from './components/Error';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="" >
       <Form />
  
       <Routes>
      
        <Route path="/:p/:id" element={<People />} />
        <Route path="*" element={<Error />} />
       </Routes>
    </div>
  );
}

export default App;
