
const mongoose = require("mongoose");

const PajakSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    namaPajak: { type: String, require: true },
    potongan: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Pajak = mongoose.model("Pajak", PajakSchema);

module.exports = {
  Pajak,
};
    
