
const mongoose = require("mongoose");

const KeluargaSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    created: { type: Date, default: Date.now },
    jumlahAnak: { type: Number, default:0 },
    jumlahTunjangan: { type: Number, default:0}
  },
  { versionKey: false }
);

const Keluarga = mongoose.model("Keluarga", KeluargaSchema);

module.exports = {
  Keluarga,
};
    
