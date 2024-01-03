// import the mongoose lib
const mongoose = require("mongoose");

// the model

const ProductsSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"],
      },
      
      price: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [100, "{PATH} must be valid"],
      },
      description: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [10, "{PATH} must be at least 10 characters"],
      },
      
  
    },
    { timestamps: true }
  );
  
  const Product = mongoose.model("Product", ProductsSchema);
  
  module.exports = Product;