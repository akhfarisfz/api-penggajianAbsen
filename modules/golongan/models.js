
const mongoose = require("mongoose");

const GolonganSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    namaGolongan: { type: String, require: true },
    tunjangan: { type: Number, require: true },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Golongan = mongoose.model("Golongan", GolonganSchema);

module.exports = {
  Golongan,
};
    
