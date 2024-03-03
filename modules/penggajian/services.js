
const {
  HitungPotonganAbsenPajak,
  HitungGajiTotal,
  TotalGajiBersih,
  totalPajak,
} = require("./repositories");

//Total Potongan (Absen + Pajak)=>{
const penggajianTotalPotonganCreate = (req, karyawan) => {
  const potonganpajak = totalPajak(karyawan);
  const totalpotongan = HitungPotonganAbsenPajak(
    karyawan.absensi.jumlahpotonganAbsensi,
    potonganpajak
  );
  req.cleanedData.totalPotongan = totalpotongan;

  return req.cleanedData;
};

//Total Gaji Bersih (Gaji+tunjangan-potongan)
const penggajianGajiBersihCreate = (req, karyawan) => {
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
};
