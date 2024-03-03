const { nominalAlpa, nominalTerlambat, hitungpotonganAbsensitotal } = require("../absensi/repositories");
const {
    setpotongan,
    setpotonganAbsensi
} = require("./repositories");

const karyawanServiceCreate = (req) => {
    console.log(req.cleanedData.absensi.Alpa);
    const jumlahAlpa = nominalAlpa(req.cleanedData.absensi.Alpa,req.cleanedData.jabatan.gajiPokok);
    const jumlahTerlambat = nominalTerlambat(req.cleanedData.absensi.Terlambat,req.cleanedData.jabatan.gajiPokok);
    const jumlahpotonganAbsensi = hitungpotonganAbsensitotal(jumlahAlpa, jumlahTerlambat);
    return setpotonganAbsensi(jumlahAlpa,jumlahTerlambat,jumlahpotonganAbsensi,req);

};

const karyawanCreatePotongan = (req) => {
    const gajipkok = req.cleanedData.jabatan.gajiPokok;
    const pajak = req.cleanedData.potongan;
    const jumlahPotonganArray = [];
    
    console.log(req.cleanedData)
    for (let i = 0; i < pajak.length; i++) {
        const besarpotongan = parseInt(pajak[i].potongan);
        const jumlahpotongan = gajipkok * (besarpotongan / 100);
        jumlahPotonganArray.push(jumlahpotongan); 
        setpotongan(jumlahPotonganArray, req); 
    };
    
    return req.cleanedData;
}

module.exports = {
    karyawanServiceCreate,
    karyawanCreatePotongan,
};