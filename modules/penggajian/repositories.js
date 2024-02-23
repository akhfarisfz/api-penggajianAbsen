const hitungGaji = (gaji, tunjangan) => {
    let gajiTotal = gaji + tunjangan;
    return gajiTotal;
};

//total gaji
const totalgajikaryawan = (gajiPokok) => {
    return gajiPokok + tunjangan - jumlahpotongan - potonganAbsensi
};
module.exports = {
    hitungGaji,
    totalgajikaryawan
};
