
const { min } = require("lodash");
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

const AbsensiMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const AbsensiMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const AbsensiMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [AbsensiValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [AbsensiSanitizerField4ToHash],
   *  }),
   *  ...
  */
  // LibValidationFields.DateField({ field: "TapIn" }),
  // LibValidationFields.DateField({ field: "TapOut" }),
  LibValidationFields.NumberField({ field: "Hadir" }),
  LibValidationFields.NumberField({ field: "Izin" }),
  LibValidationFields.NumberField({ field: "Sakit" }),
  LibValidationFields.NumberField({ field: "Alpa",
min:0 }),
  LibValidationFields.NumberField({ field: "Terlambat" }),
  LibValidationFields.NumberField({ field: "nominalAlpa" }),
  LibValidationFields.NumberField({ field: "nominalTerlambat" }),

  LibValidationExceptionMiddleware,
);

const AbsensiMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.NumberField({ field: "Hadir" }),
  LibValidationFields.NumberField({ field: "Izin" }),
  LibValidationFields.NumberField({ field: "Sakit" }),
  LibValidationFields.NumberField({ field: "Alpa" }),
  LibValidationFields.NumberField({ field: "Terlambat" }),
  LibValidationFields.NumberField({ field: "nominalAlpa" }),
  LibValidationFields.NumberField({ field: "nominalTerlambat" }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const AbsensiMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  AbsensiMiddlewareCreate,
  AbsensiMiddlewareUpdate,
  AbsensiMiddlewareDetail,
  AbsensiMiddlewareList,
  AbsensiMiddlewareDelete,
};
  