let potongan = 0.05;
const nominalAlpa = (Alpa) => {
    if (Alpa > 3) {
        return potongan;
    } else {
        return 0;
    }
};



const nominalTerlambat = (Terlambat) => {
    if (Terlambat > 3) {
        return potongan;
    } else {
        return 0;
    }
};

const hasilNominal = (alpa, terlambat, req) => {
    req.cleanedData.alpa = alpa;
    req.cleanedData.terlambat = terlambat;
    return req.cleanedData;
}

module.exports = {
    nominalAlpa,
    nominalTerlambat,
    hasilNominal
}