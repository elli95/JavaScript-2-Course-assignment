//Reference: Email address validation pattern from https://regexr.com/3e48o
//Reference: function structure from https://content.noroff.dev/javascript-1/form-validation.html#regular-expressions
/**
 * This will check if the email is of the correct type
 * @param {string} userEmail this is the users email.
 * @returns {string} returns result of email check
 */

function userEmailValidation(userEmail) {
  const emailPattern = /^[\w-\.]+@noroff.no|^[\w-\.]+@stud.noroff.no/;
  const emailPatternCheck = emailPattern.test(userEmail);
  return emailPatternCheck;
}

/**
 * This will check if the input area has any value
 * @param {string} value This is the value in the input that is checked
 * @param {string} inputLength This is the length against which the value is measured
 * @returns {string} True or false, based on the result of the function
 */

const valueLength = (value, inputLength) => value.trim().length >= inputLength;

export { userEmailValidation, valueLength };
