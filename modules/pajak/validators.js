
/**
 * These naming rules follow the following pattern:
 * 
 *  PajakValidator<YourValidationPurpose>
 * 
 * For example:
 *  const PajakValidationEmailExist = (value, { req }) => {}
 **/

const PajakValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  PajakValidator,
};
