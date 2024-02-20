
const mongoose = require("mongoose");

const PenggajianSchema = new mongoose.Schema(
  { 
    periodeGajiBulan:{type:Number,default:1,min: 1,max: 12,},
    totalGaji:{type:Number,default:0},
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Penggajian = mongoose.model("Penggajian", PenggajianSchema);

module.exports = {
  Penggajian,
};
    
