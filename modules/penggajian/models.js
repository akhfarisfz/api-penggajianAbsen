
const mongoose = require("mongoose");

const PenggajianSchema = new mongoose.Schema(
  {
    karyawan: {
      nik: { type: String, unique: true, required: true },
      nama: { type: String },
      alamat: { type: String },
      no_Telepon: { type: String },
      bank: { type: String },
      no_rekening: { type: String },
      gajiPokok: { type: Number },
      //Tunjangan
      golongan: {
        nama: { type: String },
        tunjangan: { type: Number, default: 0 },
      },
      jabatan: {
        nama: { type: String },
        tunjangan: { type: Number, default: 0 },
      },
      keluarga: {
        jumlahAnak: { type: Number, default: 0 },
        tunjangan: { type: Number, default: 0 }
      },
      statusPernikahan: {
        type: String,
        enum: ["menikah", "belum", "bercerai"],
        default: "belum",
      },
      //Potongan
      absensi: {
        Hadir: { type: Number, default: 0 },
        Izin: { type: Number, default: 0 },
        Sakit: { type: Number, default: 0 },
        Alpa: { type: Number, default: 0 },
        Terlambat: { type: Number, default: 0 },
        nominalAlpa: { type: Number, default: 0 },
        nominalTerlambat: { type: Number, default: 0 },
      },
      pajak: {
        nama: { type: String },
        potongan: { type: Number, default: 0 },
      },
      asuransi: {
        nama: { type: String },
        kelas: { type: String },
        potongan: { type: Number, default: 0 },
      },
    },
    periodeGajiBulan: { type: Number, default: 1, min: 1, max: 12 },
    totalGaji: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Penggajian = mongoose.model("Penggajian", PenggajianSchema);

module.exports = {
  Penggajian,
};

