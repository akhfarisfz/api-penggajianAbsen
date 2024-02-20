
/**
 * These naming rules follow the following pattern:
 * 
 *  PenggajianValidator<YourValidationPurpose>
 * 
 * For example:
 *  const PenggajianValidationEmailExist = (value, { req }) => {}
 **/

const PenggajianValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  PenggajianValidator,
};
