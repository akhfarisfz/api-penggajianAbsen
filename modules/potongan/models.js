
const mongoose = require("mongoose");

const PotonganSchema = new mongoose.Schema(
  { 
    nama: { type: String, require: true },
    potongan: { type: Number, default: 0 },
    isPercentage: {type: Boolean, default: true },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Potongan = mongoose.model("Potongan", PotonganSchema);

module.exports = {
  Potongan,
};
    
