
const mongoose = require("mongoose");

const PotonganSchema = new mongoose.Schema(
  {
    jumlahPotonganSakit: { type: Number, default:0 },
    jumlahPotonganAlpa: { type: Number, default:0 },
    jumlahPotonganTerlambat: { type: Number, default:0 }
  },
  { versionKey: false }
);

const Potongan = mongoose.model("Potongan", PotonganSchema);

module.exports = {
  Potongan,
};
    
