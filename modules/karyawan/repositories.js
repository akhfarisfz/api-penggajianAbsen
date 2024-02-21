const { Asuransi } = require("../asuransi/models");

const karyawanrespositoriesjumlahgaji = (gaji) => {
    const gaji = gajiPokok;
    return gaji + tujangan - absensi - pajak - Asuransi;
};


module.exports = {
    karyawanrespositoriesjumlahgaji
};