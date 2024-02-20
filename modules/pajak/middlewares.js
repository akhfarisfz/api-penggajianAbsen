
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

const PajakMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PajakMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PajakMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [PajakValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [PajakSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.CharField({ field: "namaPajak" }),
  // LibValidationFields.NumberField({ field: "potongan" }),
  LibValidationExceptionMiddleware,
);

const PajakMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.CharField({ field: "namaPajak" }),
  // LibValidationFields.NumberField({ field: "potongan" }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const PajakMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  PajakMiddlewareCreate,
  PajakMiddlewareUpdate,
  PajakMiddlewareDetail,
  PajakMiddlewareList,
  PajakMiddlewareDelete,
};
  