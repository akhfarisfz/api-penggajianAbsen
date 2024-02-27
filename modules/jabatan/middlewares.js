
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

const JabatanMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const JabatanMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const JabatanMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [JabatanValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [JabatanSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.NumberField({ field: "gajiPokok" }),
  LibValidationFields.NumberField({ field: "tunjangan" }),
  LibValidationExceptionMiddleware,
);

const JabatanMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.NumberField({ field: "gajiPokok" }),
  LibValidationFields.NumberField({ field: "tunjangan" }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const JabatanMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  JabatanMiddlewareCreate,
  JabatanMiddlewareUpdate,
  JabatanMiddlewareDetail,
  JabatanMiddlewareList,
  JabatanMiddlewareDelete,
};
  