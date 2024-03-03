const mongoose = require("mongoose");

const KaryawanSchema = new mongoose.Schema(
  {
    /** Your schema here */
    nik: { type: String, unique: true, required: true },
    nama: { type: String },
    alamat: { type: String },
    no_Telepon: { type: String },
    departemen: {
      nama: { type: String },
    },
    bank: { type: String },
    no_rekening: { type: String },
    jabatan: {
      nama: { type: String },
      gajiPokok: { type: Number, default: 0 },
      tunjangan: { type: Number, default: 0 },
    },
    //Potongan
    potongan: [
      {
        nama: { type: String },
        potongan: { type: Number, default: 0, max: 100 },
        jumlahpotongan: { type: Number, default: 0 },
      },
    ],
    absensi: {
      Hadir: { type: Number, default: 0 },
      Izin: { type: Number, default: 0 },
      Sakit: { type: Number, default: 0 },
      Alpa: { type: Number, default: 0, min: 0  },
      Terlambat: { type: Number, default: 0, min: 0  },
      nominalAlpa: { type: Number, default: 0 },
      nominalTerlambat: { type: Number, default: 0 },
      jumlahpotonganAbsensi: { type: Number, default: 0 },
    },
    created: { type: Date, default: Date.now },
  }
  // { versionKey: true }
);

const Karyawan = mongoose.model("Karyawan", KaryawanSchema);

module.exports = {
  Karyawan,
};
