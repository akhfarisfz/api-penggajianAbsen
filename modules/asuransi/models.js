
const mongoose = require("mongoose");

const AsuransiSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nama: { type: String },
    kelas: { type: String },
    potongan: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Asuransi = mongoose.model("Asuransi", AsuransiSchema);

module.exports = {
  Asuransi,
};
    
