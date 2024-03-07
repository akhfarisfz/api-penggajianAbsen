const mongoose = require("mongoose");

const PenggajianSchema = new mongoose.Schema(
  {
    /** Your schema here */
    karyawanref: { type: mongoose.Schema.ObjectId, ref: "Karyawan" },
    periodeGajiBulan: { type: Number, default: 1 },
    totalPotongan: { type: Number, default: 0 },
    totalGaji: { type: Number, default: 0 },

    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Penggajian = mongoose.model("Penggajian", PenggajianSchema);

module.exports = {
  Penggajian,
};
