
//Set jumlahpotongan kembali ke data
const setpotongan = (jumlahPotonganArray, req) => {
    const pajak = req.cleanedData.potongan;
    for (let i = 0; i < pajak.length; i++) {
        pajak[i].jumlahpotongan = jumlahPotonganArray[i];
    }
    return req.cleanedData;
};

//Set hasil perhitungan absensi ke data 
const setpotonganAbsensi = (potonganAlpa,potonganTerlambat,totalPotonganAbsensi,req)=>{
    req.cleanedData.absensi.nominalTerlambat=potonganTerlambat;
    req.cleanedData.absensi.nominalAlpa=potonganAlpa;
    req.cleanedData.absensi.jumlahpotonganAbsensi=totalPotonganAbsensi;
    return req.cleanedData;
};


module.exports = {
    setpotonganAbsensi,
    setpotongan
};