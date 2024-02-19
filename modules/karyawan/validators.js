
/**
 * These naming rules follow the following pattern:
 * 
 *  KaryawanValidator<YourValidationPurpose>
 * 
 * For example:
 *  const KaryawanValidationEmailExist = (value, { req }) => {}
 **/

const KaryawanValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  KaryawanValidator,
};
