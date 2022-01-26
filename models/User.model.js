const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    address: {
		  street: String,
      number: Number,
      zipcode: Number,
      city: String,
		}, 
    bithday: Date,
    phone: Number,
    vertragsart: String,
    roll: String,
    
  });

const User = model("User", userSchema);

module.exports = User;