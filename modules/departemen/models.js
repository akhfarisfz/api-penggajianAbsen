
const mongoose = require("mongoose");

const DepartemenSchema = new mongoose.Schema(
  {
    namaDepartemen: { type: String, require: true},
    tunjanganDepartemen: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Departemen = mongoose.model("Departemen", DepartemenSchema);

module.exports = {
  Departemen,
};
    
