
const mongoose = require("mongoose");

const KeluargaSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    jumlahAnak: { type: Number, require: true, default: 0 },
    tunjangan: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Keluarga = mongoose.model("Keluarga", KeluargaSchema);

module.exports = {
  Keluarga,
};
    
