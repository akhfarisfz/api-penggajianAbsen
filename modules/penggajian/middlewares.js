const { LibAuthenticationMiddleware } = require("../../libs/authentications");
const {
  LibValidationExceptionMiddleware,
  LibValidationFields,
  LibValidationsMiddleware,
} = require("../../libs/validations");

/**
 * If you want to remove JWT authentication,
 * you can remove 'LibAuthenticationMiddleware' from your middleware list.
 */

const PenggajianMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PenggajianMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PenggajianMiddlewareCreate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */

  /**
   * "LibValidationExceptionMiddleware" is suitable for validating data sent by the client in body.
   * If you have your own handler, you can replace it.
   *
   * For example:
   *  ...
   *  LibValidationFields.CharField({ field: "field1" }),
   *  LibValidationFields.CharField({ field: "field2" }),
   *  LibValidationFields.CharField({
   *    field: "field3",
   *    customs: [PenggajianValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [PenggajianSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.CharField({ field: "karyawanref",}),
  // LibValidationFields.ObjectField({ field: "karyawan"}),

  // LibValidationFields.CharField({ field: "karyawan.nik" }),
  // LibValidationFields.CharField({ field: "karyawan.nama" }),
  // LibValidationFields.ObjectField({ field: "karyawan.jabatan" }),
  // LibValidationFields.CharField({ field: "karyawan.jabatan.nama" }),
  // LibValidationFields.ObjectField({ field: "karyawan.departemen" }),
  // LibValidationFields.CharField({ field: "karyawan.departemen.nama" }),
  LibValidationFields.NumberField({ field: "periodeGajiBulan" }),
  // //Object Jabatan
  // LibValidationFields.ObjectField({ field: "karyawan.jabatan" }),
  // LibValidationFields.CharField({ field: "karyawan.jabatan.nama" }),
  // LibValidationFields.NumberField({ field: "karyawan.jabatan.gajiPokok" }),
  // LibValidationFields.NumberField({ field: "karyawan.jabatan.tunjangan" }),
  // // Object Departemen
  // LibValidationFields.ObjectField({ field: "karyawan.departemen" }),
  // LibValidationFields.CharField({ field: "karyawan.departemen.nama" }),
  // //Object Absensi
  // LibValidationFields.ObjectField({ field: "karyawan.absensi" }),
  // LibValidationFields.NumberField({ field: "karyawan.absensi.Alpa", min: 0 }),
  // LibValidationFields.NumberField({
  //   field: "karyawan.absensi.Terlambat",
  //   min: 0,
  // }),
  // //Array Potongan
  // LibValidationFields.ArrayField({ field: "karyawan.potongan", min: 0 }),
  // LibValidationFields.CharField({ field: "karyawan.potongan.*.nama", min: 0 }),
  // LibValidationFields.NumberField({ field: "periodeGajiBulan" }),
  LibValidationExceptionMiddleware
);

const PenggajianMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  // LibValidationFields.ObjectField({ field: "karyawan" }),
  // LibValidationFields.CharField({ field: "karyawan.nik", required: true }),
  // LibValidationFields.CharField({ field: "karyawan.nama" }),
  // LibValidationFields.ObjectField({ field: "jabatan" }),
  // LibValidationFields.CharField({ field: "jabatan.nama" }),
  // LibValidationFields.ObjectField({ field: "departemen" }),
  // LibValidationFields.CharField({ field: "departemen.nama" }),
  // LibValidationFields.NumberField({ field: "totalGaji" }),
  // LibValidationFields.CharField({ field: "nama" }),
  // LibValidationFields.CharField({ field: "alamat" }),
  // LibValidationFields.CharField({ field: "no_Telepon" }),
  // LibValidationFields.CharField({ field: "bank" }),
  // LibValidationFields.CharField({ field: "no_rekening" }),
  // LibValidationFields.CharField({ field: "jabatan.nama" }),
  // LibValidationFields.NumberField({ field: "jabatan.gajiPokok" }),
  // LibValidationFields.NumberField({
  //   field: "jabatan.tunjangan",
  //   required: false,
  //   minLength: 0,
  //   customs: [
  //     (value, { req }) => {
  //       const gajiPokok = req.body.jabatan.gajiPokok;
  //       const maxTunjangan = 0.2 * gajiPokok; // Menghitung 20% dari gaji pokok

  //       if (value > maxTunjangan) {
  //         throw new Error("Tunjangan tidak boleh melebihi 20% dari gaji pokok");
  //       }

  //       return value;
  //     }
  //   ],
  //  }),
  // LibValidationFields.NumberField({ field: "absensi.Hadir" }),
  // LibValidationFields.NumberField({ field: "absensi.Izin" }),
  // LibValidationFields.NumberField({ field: "absensi.Sakit" }),
  // LibValidationFields.NumberField({ field: "absensi.Alpa" }),
  // LibValidationFields.NumberField({ field: "absensi.Terlambat" }),
  // LibValidationFields.NumberField({ field: "absensi.nominalAlpa" }),
  // LibValidationFields.NumberField({ field: "absensi.nominalTerlambat" }),
  // LibValidationFields.CharField({ field: "pajak.nama" }),
  // LibValidationFields.NumberField({ field: "pajak.potongan" }),
  // LibValidationFields.CharField({ field: "asuransi.nama" }),
  // LibValidationFields.CharField({ field: "asuransi.kelas" }),
  // LibValidationFields.NumberField({ field: "asuransi.potongan" }),
  // LibValidationFields.NumberField({ field: "periodeGajiBulan" }),
  // LibValidationFields.NumberField({field:"totalGaji"}),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware
);

const PenggajianMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  PenggajianMiddlewareCreate,
  PenggajianMiddlewareUpdate,
  PenggajianMiddlewareDetail,
  PenggajianMiddlewareList,
  PenggajianMiddlewareDelete,
};
