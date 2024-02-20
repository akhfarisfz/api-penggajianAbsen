
const mongoose = require("mongoose");

const PenggajianSchema = new mongoose.Schema(
  { 
    periodeGaji:{type:Date},
    totalGaji:{type:Number,default:0},
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Penggajian = mongoose.model("Penggajian", PenggajianSchema);

module.exports = {
  Penggajian,
};
    
