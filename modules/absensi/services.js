const { nominalAlpa, nominalTerlambat, hasilNominal } = require("../absensi/repositories");

const AbsensiServiceCreate = (req) => {
    const alpas = nominalAlpa(req.cleanedData.alpa);
    const terlambats = nominalTerlambat(req.cleanedData.terlambat);
    return hasilNominal(alpas, terlambats, req)
};

module.exports = {
    AbsensiServiceCreate,
}