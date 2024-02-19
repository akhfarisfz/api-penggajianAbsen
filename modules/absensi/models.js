
const mongoose = require("mongoose");

const AbsensiSchema = new mongoose.Schema(
  {
    tanggal: { type: Date, default: Date.now },
    jumlahHadir: { type: Number,default:0 },
    jumlahIzin: { type: Number, default:0 },
    jumlahSakit: { type: Number, default:0 },
    jumlahAlpa: { type: Number, default:0 },
    jumlahTerlambat: { type: Number, default:0 }
  },
  { versionKey: false }
);

const Absensi = mongoose.model("Absensi", AbsensiSchema);

module.exports = {
  Absensi,
};
    
