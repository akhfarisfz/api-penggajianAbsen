
/**
 * These naming rules follow the following pattern:
 * 
 *  TunjanganValidator<YourValidationPurpose>
 * 
 * For example:
 *  const TunjanganValidationEmailExist = (value, { req }) => {}
 **/

const TunjanganValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  TunjanganValidator,
};
