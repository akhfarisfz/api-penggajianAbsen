const nominalAlpa = (Alpa,gaji) => {
    if (Alpa > 2) {
        const nominal = Alpa*(0.001*gaji)
        console.log(nominal)

        return nominal;
    } else {
        return 0;
    }
};


const nominalTerlambat = (Terlambat,gaji) => {
    if (Terlambat > 3) {
        const nominal = Terlambat*(0.0005*gaji);
        return nominal;
    } else {
        return 0;
    }
};
const hitungpotonganAbsensitotal = (jumlahAlpa, jumlahTerlambat) => {
    const totalPotonganAbsensi = jumlahAlpa + jumlahTerlambat;
    return totalPotonganAbsensi;
};


module.exports = {
    nominalAlpa,
    nominalTerlambat,
    hitungpotonganAbsensitotal
}