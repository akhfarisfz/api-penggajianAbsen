
/**
 * These naming rules follow the following pattern:
 * 
 *  KeluargaValidator<YourValidationPurpose>
 * 
 * For example:
 *  const KeluargaValidationEmailExist = (value, { req }) => {}
 **/

const KeluargaValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  KeluargaValidator,
};
