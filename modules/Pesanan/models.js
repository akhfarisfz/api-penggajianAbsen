
const mongoose = require("mongoose");

const PesananSchema = new mongoose.Schema(
  {
    nomor: { type: String },
    nomorMeja: { type: String },
    nama: { type: String, default: '' },
    total: { type: Number, default: 0 },
    isPaid: { type: Boolean, default: false },
    item: [
      {
        nama: { type: String },
        qty: { type: Number, default: 0 },
        harga: { type: Number, default: 0 },
        subtotal: { type: Number, default: 0 }
      }
    ],
  },
  { versionKey: false }
);

const Pesanan = mongoose.model("Pesanan", PesananSchema);

module.exports = {
  Pesanan,
};
    
