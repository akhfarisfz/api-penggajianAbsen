const totalpotongan = (Potongan) => {
    return Potongan + totalpotonganabsensi;
};

const totalpotonganabsensi = (nominalAlpa, nominalTerlambat) => {
    return nominalAlpa + nominalTerlambat
};
module.exports = {
 totalpotongan,
 totalpotonganabsensi
};