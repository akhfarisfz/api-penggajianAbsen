
const mongoose = require("mongoose");

const PemasokSchema = new mongoose.Schema(
  {
    namaPemasok: { type: String, required: true },
    emailPemasok: { type: String, required: true },
    teleponPemasok: { type: String, required: true },
    alamat: { type: String, required: true },
  },
  { versionKey: false }
);

const Pemasok = mongoose.model("Pemasok", PemasokSchema);

module.exports = {
  Pemasok,
};

