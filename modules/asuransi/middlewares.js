
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

const AsuransiMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const AsuransiMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const AsuransiMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [AsuransiValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [AsuransiSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.CharField({ field: "namaAsuransi" }),
  LibValidationFields.CharField({ field: "kelas" }),
  LibValidationFields.NumberField({ field: "potongan" }),

  LibValidationExceptionMiddleware,
);

const AsuransiMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationFields.CharField({ field: "namaAsuransi" }),
  LibValidationFields.CharField({ field: "kelas" }),
  LibValidationFields.NumberField({ field: "potongan" }),
  LibValidationExceptionMiddleware,
);

const AsuransiMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  AsuransiMiddlewareCreate,
  AsuransiMiddlewareUpdate,
  AsuransiMiddlewareDetail,
  AsuransiMiddlewareList,
  AsuransiMiddlewareDelete,
};
  