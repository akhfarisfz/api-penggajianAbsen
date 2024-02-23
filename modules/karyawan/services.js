const {
    potonganAbsensi ,
} = require("./repositories");

const karyawanServiceCreate = (req) => {
    const  jumlahpotonganAbsensi = potonganAbsensi(req.cleanedData.jumlahAlpa,req.cleanedData.jumlahTerlambat);
    return jumlahpotonganAbsensi;
};

module.exports = {
    karyawanServiceCreate,
};