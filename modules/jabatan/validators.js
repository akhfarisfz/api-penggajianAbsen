
/**
 * These naming rules follow the following pattern:
 * 
 *  JabatanValidator<YourValidationPurpose>
 * 
 * For example:
 *  const JabatanValidationEmailExist = (value, { req }) => {}
 **/

const JabatanValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  JabatanValidator,
};
