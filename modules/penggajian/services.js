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
  const gajipkok = req.karyawanref.jabatan.gajiPokok;

  const pajak = req.karyawanref.potongan;

  const jumlahPotonganArray = [];
  for (let i = 0; i < pajak.length; i++) {
    const besarpotongan = parseInt(pajak[i].potongan);
    const jumlahPotongan = gajipkok * (besarpotongan / 100);
    jumlahPotonganArray.push(jumlahPotongan);

    setpotonganpenggajian(jumlahPotonganArray, req);
  }
  return req;
};

//Total Potongan (Absen + Pajak)=>{
const penggajianTotalPotonganCreate = (req,karyawan) => {
  const potonganpajak = totalPajak(karyawan);
  const totalpotongan = HitungPotonganAbsenPajak(
    karyawan.absensi.jumlahpotonganAbsensi,
    potonganpajak
  );
  req.cleanedData.totalPotongan = totalpotongan;

  return req.cleanedData;
};

//Total Gaji Bersih (Gaji+tunjangan-potongan)
const penggajianGajiBersihCreate = (req,karyawan) => {
  const totalGaji = HitungGajiTotal(
    karyawan.jabatan.gajiPokok,
    karyawan.jabatan.tunjangan
  );

  const TotalPajak = totalPajak(karyawan);

  const TotalPotongan = HitungPotonganAbsenPajak(
    karyawan.absensi.jumlahpotonganAbsensi,
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
