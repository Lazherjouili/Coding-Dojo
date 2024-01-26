// import the mongoose lib
const mongoose = require("mongoose");

// the model

const PlayerSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [2, "{PATH} must be at least 2 characters"],
      },
      position: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"],
      },
      playing: {
        type: Boolean,
        default: false,
      },
      notplaying: {
        type: Boolean,
        default:false,
      },
      undecided: {
        type: Boolean,
        default: true,
      },
    
  
    },
    { timestamps: true }
  );
  
  const Players = mongoose.model("Players", PlayerSchema);
  
  module.exports = Players;