
const mongoose = require("mongoose");

const KaryawanSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Karyawan = mongoose.model("Karyawan", KaryawanSchema);

module.exports = {
  Karyawan,
};
    
