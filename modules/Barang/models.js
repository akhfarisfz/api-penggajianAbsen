
const mongoose = require("mongoose");

const BarangSchema = new mongoose.Schema(
  {
    namaBarang: { type: String, required: true },
    hargaJual: { type: Number, required: true },
    hargaBeli: { type: Number, required: true },
    stok: { type: Number, required: true },
    created: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

const Barang = mongoose.model("Barang", BarangSchema);

module.exports = {
  Barang,
};

