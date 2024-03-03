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

const KaryawanMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KaryawanMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KaryawanMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [KaryawanValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [KaryawanSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.CharField({ field: "nik", required: true }),
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.CharField({ field: "alamat" }),
  LibValidationFields.CharField({ field: "no_Telepon" }),
  LibValidationFields.CharField({ field: "bank" }),
  LibValidationFields.CharField({ field: "no_rekening" }),
  LibValidationFields.ObjectField({ field: "jabatan" }),
  LibValidationFields.CharField({ field: "jabatan.nama" }),
  LibValidationFields.NumberField({ field: "jabatan.gajiPokok" }),
  LibValidationFields.NumberField({ field: "jabatan.tunjangan" }),
  //Object Absensi
  LibValidationFields.ObjectField({ field: "absensi" }),

  // Asumsi Hari kerja efektif 30 hari
  // LibValidationFields.NumberField({
  //   field: "absensi.Hadir",
  //   min: 0,
  //   max:30,
  //   require: false,
  //   customs: [
  //     (value, { req }) => {
  //       const TotalAbsen = req.body.absensi.Hadir +
  //         req.body.absensi.Alpa +
  //         req.body.absensi.Terlambat +
  //         req.body.absensi.Izin +
  //         req.body.absensi.Sakit;

  //       if (value < TotalAbsen) {
  //         throw new Error("Total Hari kurang dari hari kerja");
  //       }
  //       else{
  //         throw new Error("Total Hari melebihi hari kerja");
  //       }
  //       return value;
  //     }
  //   ],
  // }),

  LibValidationFields.NumberField({ field: "absensi.Hadir", min: 0 }), 

  // Departemen
  LibValidationFields.ObjectField({ field: "departemen" }),
  LibValidationFields.CharField({ field: "departemen.nama" }),

  // //Array Potongan
  LibValidationFields.ArrayField({ field: "potongan", min: 0 }),
  LibValidationFields.CharField({ field: "potongan.*.nama", min: 0 }),

  LibValidationExceptionMiddleware
);

const KaryawanMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.CharField({ field: "nik", required: true }),
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.CharField({ field: "alamat" }),
  LibValidationFields.CharField({ field: "no_Telepon" }),
  LibValidationFields.CharField({ field: "bank" }),
  LibValidationFields.ObjectField({ field: "departemen" }),
  LibValidationFields.CharField({ field: "departemen.nama" }),
  LibValidationFields.CharField({ field: "no_rekening" }),
  // LibValidationFields.ObjectField({ field: "jabatan" }),
  // LibValidationFields.ObjectField({ field: "departemen" }),
  // LibValidationFields.CharField({ field: "departemen.nama" }),

  // // LibValidationFields.CharField({ field: "jabatan._id" }),
  // LibValidationFields.CharField({ field: "jabatan.nama" }),
  // LibValidationFields.NumberField({ field: "jabatan.tunjangan" }),
  // LibValidationFields.ObjectField({ field: "keluarga" }),
  // LibValidationFields.NumberField({ field: "keluarga.jumlahAnak" }),
  // LibValidationFields.NumberField({ field: "keluarga.tunjangan" }),
  // LibValidationFields.CharField({ field: "statusPernikahan" }),
  // LibValidationFields.ObjectField({ field: "absensi" }),

  // LibValidationFields.NumberField({ field: "absensi.Alpa", min: 0 }),
  // LibValidationFields.NumberField({ field: "absensi.Terlambat", min: 0 }),
  // LibValidationFields.NumberField({ field: "absensi.nominalAlpa", min: 0 }),
  // LibValidationFields.NumberField({ field: "absensi.nominalTerlambat", min: 0 }),
  // LibValidationFields.CharField({ field: "pajak.nama" }),
  // LibValidationFields.NumberField({ field: "pajak.potongan" }),
  // LibValidationFields.CharField({ field: "asuransi.nama" }),
  // LibValidationFields.CharField({ field: "asuransi.kelas" }),
  // LibValidationFields.NumberField({ field: "asuransi.potongan" }),
  LibValidationExceptionMiddleware
);

const KaryawanMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  KaryawanMiddlewareCreate,
  KaryawanMiddlewareUpdate,
  KaryawanMiddlewareDetail,
  KaryawanMiddlewareList,
  KaryawanMiddlewareDelete,
};
