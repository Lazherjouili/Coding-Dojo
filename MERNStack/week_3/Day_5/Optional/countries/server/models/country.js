// import the mongoose lib
const mongoose = require("mongoose");

// the model

const CountrySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [2, "{PATH} must be at least 2 characters"],
      },
      flag: {
        type: String,
        required: [true, "{PATH} is required"]
      },
      independent: {
        type: Boolean,
        default: true,
      },
      
    
  
    },
    { timestamps: true }
  );
  
  const Country = mongoose.model("Country", CountrySchema);
  
  module.exports = Country;