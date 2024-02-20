
const mongoose = require("mongoose");

const DepartemenSchema = new mongoose.Schema(
  {
    namaDepartemen: { type: String},
    tunjangan_departemen: { type: Number,default:0 }
  },
  { versionKey: false }
);

const Departemen = mongoose.model("Departemen", DepartemenSchema);

module.exports = {
  Departemen,
};
    
