
/**
 * These naming rules follow the following pattern:
 * 
 *  AbsensiValidator<YourValidationPurpose>
 * 
 * For example:
 *  const AbsensiValidationEmailExist = (value, { req }) => {}
 **/

const AbsensiValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  AbsensiValidator,
};
