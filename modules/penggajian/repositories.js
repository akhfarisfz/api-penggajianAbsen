// Bawaan Dari Karyawan

const setpotonganAbsensi = (potonganAlpa,potonganTerlambat,totalPotonganAbsensi,req)=>{
    req.cleanedData.karyawan.absensi.nominalTerlambat=potonganTerlambat;
    req.cleanedData.karyawan.absensi.nominalAlpa=potonganAlpa;
    req.cleanedData.karyawan.absensi.jumlahpotonganAbsensi=totalPotonganAbsensi;
    return req.cleanedData;
};
const setpotonganpenggajian = (jumlahPotonganArray, req) => {
    const pajak = req.potongan;
    for (let i = 0; i < pajak.length; i++) {
        pajak[i].jumlahPotongan = jumlahPotonganArray[i];
    }
    return req;
};




//HitungPotongan Pajak
const totalPajak = (req) =>{
    const pajak = req.potongan; 
    let Totalpotonganpajak = 0;
    for (let i = 0; i < pajak.length; i++) {
        Totalpotonganpajak+=parseInt(pajak[i].jumlahpotongan); 
    };

    return Totalpotonganpajak;

}
// HITUNG POTONGAN Absen + Pajak
const HitungPotonganAbsenPajak = (jumlahpotonganAbsen,jumlahPotongan) =>{
    totalPotongan =  jumlahPotongan+jumlahpotonganAbsen;
    return totalPotongan;
};

// Hitung Gaji+tunjangan
const HitungGajiTotal = (gaji, tunjangan) => {
    let gajiTotal = gaji + tunjangan;
    return gajiTotal;
};
// Hitung Gaji Bersih
const TotalGajiBersih = (gajiKotor,Potongan) => {
    return gajiKotor-Potongan;
};


module.exports = {
    HitungPotonganAbsenPajak,
    HitungGajiTotal,
    TotalGajiBersih,
    totalPajak,
    setpotonganpenggajian,
    setpotonganAbsensi
};
