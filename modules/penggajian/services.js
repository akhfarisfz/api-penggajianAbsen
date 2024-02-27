const {
  nominalAlpa,
  nominalTerlambat,
  hitungpotonganAbsensitotal,
} = require("../absensi/repositories");
const {
  HitungPotonganAbsenPajak,
  HitungGajiTotal,
  TotalGajiBersih,
  totalPajak,
  setpotonganAbsensi,
  setpotonganpenggajian,
} = require("./repositories");

//Bawaan Karyawan
const PenggajianCreatepotonganAbsen = (req) => {
  const jumlahAlpa = nominalAlpa(
    req.cleanedData.karyawan.absensi.Alpa,
    req.cleanedData.karyawan.jabatan.gajiPokok
  );
  const jumlahTerlambat = nominalTerlambat(
    req.cleanedData.karyawan.absensi.Terlambat,
    req.cleanedData.karyawan.jabatan.gajiPokok
  );
  const jumlahpotonganAbsensi = hitungpotonganAbsensitotal(
    jumlahAlpa,
    jumlahTerlambat
  );
  return setpotonganAbsensi(
    jumlahAlpa,
    jumlahTerlambat,
    jumlahpotonganAbsensi,
    req
  );
};

const PenggajianCreatePotongan = (req) => {
  const gajipkok = req.cleanedData.karyawan.jabatan.gajiPokok;
  const pajak = req.cleanedData.karyawan.potongan;
  const jumlahPotonganArray = [];
  for (let i = 0; i < pajak.length; i++) {
    const besarpotongan = parseInt(pajak[i].potongan);
    const jumlahPotongan = gajipkok * (besarpotongan / 100);
    jumlahPotonganArray.push(jumlahPotongan);
    setpotonganpenggajian(jumlahPotonganArray, req);
  }
  return req.cleanedData;
};

//Total Potongan (Absen + Pajak)=>{
const penggajianTotalPotonganCreate = (req) => {
  const potonganpajak = totalPajak(req);
  const totalpotongan = HitungPotonganAbsenPajak(
    req.cleanedData.karyawan.absensi.jumlahpotonganAbsensi,
    potonganpajak
  );
  req.cleanedData.jumlahpotongan = totalpotongan;
  return req.cleanedData;
};

//Total Gaji Bersih (Gaji+tunjangan-potongan)
const penggajianGajiBersihCreate = (req) => {
  const totalGaji = HitungGajiTotal(
    req.cleanedData.karyawan.jabatan.gajiPokok,
    req.cleanedData.karyawan.jabatan.tunjangan
  );
  const TotalPajak = totalPajak(req);
  const TotalPotongan = HitungPotonganAbsenPajak(
    req.cleanedData.karyawan.absensi.jumlahpotonganAbsensi,
    TotalPajak
  );
  const gajibersih = TotalGajiBersih(totalGaji, TotalPotongan);
  req.cleanedData.totalGaji = gajibersih;
  return req.cleanedData;
};

module.exports = {
  penggajianGajiBersihCreate,
  penggajianTotalPotonganCreate,
  PenggajianCreatepotonganAbsen,
  PenggajianCreatePotongan,
};
