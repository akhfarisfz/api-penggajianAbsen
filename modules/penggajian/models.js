
const mongoose = require("mongoose");

const PenggajianSchema = new mongoose.Schema(
  {
    karyawan: {
      /** Your schema here */
      nik: { type: String, unique: true, required: true },
      nama: { type: String },
      alamat: { type: String },
      no_Telepon: { type: String },
      bank: { type: String },
      no_rekening: { type: String },
      //Jabatan,
      jabatan: {
        nama: { type: String },
        gajiPokok: { type: Number, default: 0 },
        tunjangan: { type: Number, default: 0 },
      },
      //Departemen
      departemen:{
        nama:{type:String},
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
        Alpa: { type: Number, default: 0 },
        Terlambat: { type: Number, default: 0 },
        nominalAlpa: { type: Number, default: 0 },
        nominalTerlambat: { type: Number, default: 0 },
        jumlahpotonganAbsensi: { type: Number, default: 0 },
      },
    },
    periodeGajiBulan: { type: Number, default: 1, min: 1, max: 12 },
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

