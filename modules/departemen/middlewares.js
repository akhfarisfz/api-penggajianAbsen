
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

const DepartemenMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const DepartemenMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const DepartemenMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [DepartemenValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [DepartemenSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationExceptionMiddleware,
);

const DepartemenMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationExceptionMiddleware,
);

const DepartemenMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  DepartemenMiddlewareCreate,
  DepartemenMiddlewareUpdate,
  DepartemenMiddlewareDetail,
  DepartemenMiddlewareList,
  DepartemenMiddlewareDelete,
};
  