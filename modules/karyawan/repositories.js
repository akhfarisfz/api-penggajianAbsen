const { nominalAlpa, nominalTerlambat } = require("../absensi/repositories");
// Hitung potongan pajak





//Hitung total potongan absensi
const potonganAbsensi = (jumlahAlpa, jumlahTerlambat) => {
    const potonganAlpa = nominalAlpa(jumlahAlpa);
    const potonganTerlambat = nominalTerlambat(jumlahTerlambat);
    const totalPotonganAbsensi = potonganAlpa + potonganTerlambat;
    return totalPotonganAbsensi
};



module.exports = {
    potonganAbsensi,
  };