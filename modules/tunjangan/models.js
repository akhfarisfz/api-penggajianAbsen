
const mongoose = require("mongoose");

const TunjanganSchema = new mongoose.Schema(
  {
    jabatan: { type: String },
    golongan: { type: String },
    nominalTunjanganJabatan: { type: Number },
    nominalTunjanganGolongan: { type: Number },
    nominalTunjanganKeluarga: { type: Number },
    statusPernikahan: { type: String }
  },
  { versionKey: false }
);

const Tunjangan = mongoose.model("Tunjangan", TunjanganSchema);

module.exports = {
  Tunjangan,
};
    
