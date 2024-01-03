import {useEffect,useState}from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const LandingPage = () => {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((allProducts) => setProducts(allProducts.data))
      .catch((err) => console.log(err));

    },[])

 
 const deleteProduct = (id) => {
  axios
    .delete(`http://localhost:8000/api/products/${id}`)
    .then((res) => {
      console.log(res);
      const filteredProducts = products.filter((eachProduct) => {
        return eachProduct._id !== id;
      });
      setProducts(filteredProducts);
    })
    .catch((err) => console.log(err));
};
   
  return (
    <div>{products.map((oneproduct)=>{
        return<div key={oneproduct._id} className=''>
            <Link className='text-decoration-none  text-light' to={`/products/${oneproduct._id}`} ><h2 className=' text-decoration-none'>{oneproduct.title}</h2></Link>
            <div className='d-flex gap-4 justify-content-center'>
            <button className='btn btn-primary ' ><Link className='text-decoration-none text-light' to={`/products/${oneproduct._id}/edit`}>Edit</Link></button>
            <button onClick={()=>deleteProduct(oneproduct._id)} className='btn btn-danger '  >Delete</button>
            </div>
        </div>
    })}

    </div>
  )
}

export default LandingPage