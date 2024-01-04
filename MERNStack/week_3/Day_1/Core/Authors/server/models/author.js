// import the mongoose lib
const mongoose = require("mongoose");

// the model

const AuthorsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"],
      },
      
    
  
    },
    { timestamps: true }
  );
  
  const Author = mongoose.model("Author", AuthorsSchema);
  
  module.exports = Author;