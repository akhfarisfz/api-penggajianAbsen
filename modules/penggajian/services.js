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
const penggajianTotalPotonganCreate = (req) => {
  const potonganpajak = totalPajak(req);

  const totalpotongan = HitungPotonganAbsenPajak(
    req.absensi.jumlahpotonganAbsensi,
    potonganpajak
  );
  req.totalPotongan = totalpotongan;

  return req;
};

//Total Gaji Bersih (Gaji+tunjangan-potongan)
const penggajianGajiBersihCreate = (req) => {
  const totalGaji = HitungGajiTotal(
    req.jabatan.gajiPokok,
    req.jabatan.tunjangan
  );

  const TotalPajak = totalPajak(req);

  const TotalPotongan = HitungPotonganAbsenPajak(
    req.absensi.jumlahpotonganAbsensi,
    TotalPajak
  );

  const gajibersih = TotalGajiBersih(totalGaji, TotalPotongan);
  req.totalGaji = gajibersih;
  return req;
};

module.exports = {
  penggajianGajiBersihCreate,
  penggajianTotalPotonganCreate,
  PenggajianCreatepotonganAbsen,
  PenggajianCreatePotongan,
};
