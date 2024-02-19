
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
  LibValidationFields.CharField({ field: "nik" }),
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.NumberField({ field: "gajiPokok" }),
  LibValidationFields.CharField({ field: "golongan.nama" }),
  LibValidationFields.CharField({ field: "jabatan.nama" }),
  LibValidationFields.NumberField({ field: "tunjangan.tunjanganGolongan" }),
  LibValidationFields.NumberField({ field: "tunjangan.tunjanganJabatan", }),
  LibValidationFields.NumberField({ field: "tunjangan.tunjanganKeluarga", }),
  LibValidationExceptionMiddleware,
);

const KaryawanMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.CharField({ field: "nik" }),
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.NumberField({ field: "gajiPokok" }),
  LibValidationFields.CharField({ field: "golongan.nama" }),
  LibValidationFields.CharField({ field: "jabatan.nama" }),
  LibValidationFields.NumberField({ field: "tunjangan.tunjanganGolongan" }),
  LibValidationFields.NumberField({ field: "tunjangan.tunjanganJabatan", }),
  LibValidationFields.NumberField({ field: "tunjangan.tunjanganKeluarga", }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
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
  