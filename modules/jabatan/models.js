
const mongoose = require("mongoose");

const JabatanSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    namaJabatan: { type: String, require: true },
    tunjangan: { type: Number, require: true },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Jabatan = mongoose.model("Jabatan", JabatanSchema);

module.exports = {
  Jabatan,
};
    
