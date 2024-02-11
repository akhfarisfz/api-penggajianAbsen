
/**
 * These naming rules follow the following pattern:
 * 
 *  UserValidator<YourValidationPurpose>
 * 
 * For example:
 *  const UserValidationEmailExist = (value, { req }) => {}
 **/

const UserValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  UserValidator,
};
