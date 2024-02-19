
/**
 * These naming rules follow the following pattern:
 * 
 *  DepartemenValidator<YourValidationPurpose>
 * 
 * For example:
 *  const DepartemenValidationEmailExist = (value, { req }) => {}
 **/

const DepartemenValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  DepartemenValidator,
};
