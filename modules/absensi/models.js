
const mongoose = require("mongoose");

const AbsensiSchema = new mongoose.Schema(
  {
    Hadir: { type: Number, default: 0 },
    Izin: { type: Number, default: 0 },
    Sakit: { type: Number, default: 0 },
    Alpa: { type: Number, default: 0 },
    Terlambat: { type: Number, default: 0 },
    nominalAlpa: { type: Number, default: 0 },
    nominalTerlambat: { type: Number, default: 0 },
  },
  { versionKey: false }
);

const Absensi = mongoose.model("Absensi", AbsensiSchema);

module.exports = {
  Absensi,
};
    
