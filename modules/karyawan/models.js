
const mongoose = require("mongoose");

const KaryawanSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nik:  { type: String, unique: true, required: true},
    nama: { type: String },
    alamat: { type: String },
    no_Telepon: { type: String },
    bank: { type: String },
    no_rekening: { type: String },
    gajiPokok: { type: Number },
    // golongan: {
    //   nama: { type: String },
    // },
    // jabatan: {
    //   nama: { type: String },
    // },
    // tunjangan: {
    //   tunjanganGolongan: { type: Number, default: 0 },
    //   tunjanganJabatan: { type: Number, default: 0 },
    //   tunjanganKeluarga: { type: Number, default: 0 }
    // },
    // statusPernikahan: {
    //   type: String,
    //   enum: ["menikah", "belum", "bercerai"],
    //   default: "belum",
    // },
    // created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Karyawan = mongoose.model("Karyawan", KaryawanSchema);

module.exports = {
  Karyawan,
};
    
