
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

const KeluargaMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KeluargaMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KeluargaMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [KeluargaValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [KeluargaSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.NumberField({ field: "jumlahAnak" }),
  LibValidationFields.NumberField({ field: "tunjangan" }),
  LibValidationExceptionMiddleware,
);

const KeluargaMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.NumberField({ field: "jumlahAnak" }),
  LibValidationFields.NumberField({ field: "tunjangan" }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const KeluargaMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  KeluargaMiddlewareCreate,
  KeluargaMiddlewareUpdate,
  KeluargaMiddlewareDetail,
  KeluargaMiddlewareList,
  KeluargaMiddlewareDelete,
};
  