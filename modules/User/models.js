
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
    
