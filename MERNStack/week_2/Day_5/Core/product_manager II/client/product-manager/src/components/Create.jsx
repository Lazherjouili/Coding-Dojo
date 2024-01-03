import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const naviagte = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const createProduct = {
      title,
      price,
      description,
    };
    axios
      .post("http://localhost:8000/api/products", createProduct)
      .then((res) => {
        naviagte("/");
      })
      .catch((err) => console.log(err));
    setTitle("");
    setPrice("");
    setDescription("");
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="col-3" onSubmit={handleSubmit}>
        <div className="form-group ">
          <label className="form-label mt-4" >
            Title
          </label>
          <input className="form-control" onChange={(e) => setTitle(e.target.value)} value={title}  />
        </div>
        
        <div className="form-group ">
          <label className="form-label mt-4" >
          Price
          </label>
          <input className="form-control" onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        
        <div className="form-group ">
          <label className="form-label mt-4" >
          Description
          </label>
          <input className="form-control" onChange={(e) => setDescription(e.target.value)}
            value={description} />
        </div>
       

        <button className="btn btn-primary mt-4">Create</button>
      </form>
    </div>
  );
};

export default Create;
