
const mongoose = require("mongoose");

const DepartemenSchema = new mongoose.Schema(
  {
    nama: { type: String, require: true},
    tunjangan: { type: Number, default: 0 }
  },
  { versionKey: false }
);

const Departemen = mongoose.model("Departemen", DepartemenSchema);

module.exports = {
  Departemen,
};
    
