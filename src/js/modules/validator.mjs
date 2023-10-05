//Reference: Email address validation pattern from https://regexr.com/3e48o
//Reference: function structure from https://content.noroff.dev/javascript-1/form-validation.html#regular-expressions
function userEmailValidation(userEmail) {
  const emailPattern = /^[\w-\.]+@noroff.no|^[\w-\.]+@stud.noroff.no/;
  const emailPatternCheck = emailPattern.test(userEmail);
  return emailPatternCheck;
}

function valueLength(value, inputLength) {
  if (value.trim().length >= inputLength) {
    return true;
  } else {
    return false;
  }
}

export { userEmailValidation, valueLength };
