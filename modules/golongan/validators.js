
/**
 * These naming rules follow the following pattern:
 * 
 *  GolonganValidator<YourValidationPurpose>
 * 
 * For example:
 *  const GolonganValidationEmailExist = (value, { req }) => {}
 **/

const GolonganValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  GolonganValidator,
};
