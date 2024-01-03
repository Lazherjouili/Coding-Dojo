
import './App.css';
import '../src/css/bootstrap.css'
import { Routes, Route,Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Create from "./components/Create";
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <div className="App">
       <h1>Product Manager</h1>
       <div className='d-flex gap-5 justify-center mb-5 mt-4'>
       <button className='btn btn-primary ' ><Link className='text-decoration-none text-light' to={`/products`}>Create</Link></button>
       <button className='btn btn-primary ' ><Link className='text-decoration-none text-light' to={`/`}>Home</Link></button>
       </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Create />} />
        <Route path="/products/:id" element={<OneProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        
      </Routes>
    </div>
  );
}

export default App;
