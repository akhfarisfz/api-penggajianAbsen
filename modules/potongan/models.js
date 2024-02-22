
const mongoose = require("mongoose");

const PotonganSchema = new mongoose.Schema(
  { 
    nama: { type: String, require: true },
    potongan: { type: Number, default: 0 },
    absensi: {
      Alpa: { type: Number, default: 0 },
      Terlambat: { type: Number, default: 0 },
      nominalAlpa: { type: Number, default: 0 },
      nominalTerlambat: { type: Number, default: 0 },
    },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Potongan = mongoose.model("Potongan", PotonganSchema);

module.exports = {
  Potongan,
};
    
