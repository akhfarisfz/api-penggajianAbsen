
const mongoose = require("mongoose");

const JabatanSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nama: { type: String, require: true },
    tunjangan: { type: Number, default: 0 },
    gajiPokok: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
  },
  // { versionKey: false }
);

const Jabatan = mongoose.model("Jabatan", JabatanSchema);

module.exports = {
  Jabatan,
};
    
