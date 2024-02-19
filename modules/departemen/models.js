
const mongoose = require("mongoose");

const DepartemenSchema = new mongoose.Schema(
  {
    namaDepartemen: { type: String},
    lokasi: { type: String }
  },
  { versionKey: false }
);

const Departemen = mongoose.model("Departemen", DepartemenSchema);

module.exports = {
  Departemen,
};
    
