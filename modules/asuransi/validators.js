
/**
 * These naming rules follow the following pattern:
 * 
 *  AsuransiValidator<YourValidationPurpose>
 * 
 * For example:
 *  const AsuransiValidationEmailExist = (value, { req }) => {}
 **/

const AsuransiValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  AsuransiValidator,
};
