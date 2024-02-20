
const mongoose = require("mongoose");

const DepartemenSchema = new mongoose.Schema(
  {
    namaDepartemen: { type: String, require: true},
    tunjanganDepartemen: { type: Number, default: 0 }
  },
  { versionKey: false }
);

const Departemen = mongoose.model("Departemen", DepartemenSchema);

module.exports = {
  Departemen,
};
    
