import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneProduct = () => {
  const [one,setOne]=useState(null)
const {id}=useParams()

useEffect(() => {
  axios
    .get(`http://localhost:8000/api/products/${id}`)
    .then((oneproduct) => setOne(oneproduct.data)
    )
    .catch((err) => console.log(err));
}, [id]);

  return (
    <div className="card col-3 m-auto mt-5">
      {one &&<>
      <h4>{one.title}</h4>
      <p>{one.price}</p>
      <p>{one.description}</p>
      </>}
    </div>
  )
}

export default OneProduct