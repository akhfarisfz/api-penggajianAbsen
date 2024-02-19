
/**
 * These naming rules follow the following pattern:
 * 
 *  PotonganValidator<YourValidationPurpose>
 * 
 * For example:
 *  const PotonganValidationEmailExist = (value, { req }) => {}
 **/

const PotonganValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  PotonganValidator,
};
