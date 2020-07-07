// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercase = makeArray(97, 122);
const uppercase = makeArray(65, 90);
const numeric = makeArray(48, 57);
const symbol = makeArray(33, 47).concat(makeArray(58, 64)).concat(makeArray(91, 96)).concat(makeArray(123, 126));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate password based on selected criteria
function generatePassword() {
  var passLength = selectLength();
  var passType = selectType();
  if (passType.every(validType) == true) {
    alert("You must include at least one character type!")
    passType = selectType();
  }
  var chars = [];
  var passCode = [];
  if (passType[0]) {chars = chars.concat(lowercase);}
  if (passType[1]) {chars = chars.concat(uppercase);}
  if (passType[2]) {chars = chars.concat(numeric);}
  if (passType[3]) {chars = chars.concat(symbol);}
  for(i=0; i<passLength; i++) {
    var random = chars[Math.floor(Math.random()*chars.length)]
    passCode.push(String.fromCharCode(random));
  }
  return passCode.join("");
}

// Create an array of all integers between two numbers
function makeArray(low, high) {
  const array = []
  for (i=low; i<=high; i++) {
    array.push(i)
  }
  return array;
}

// Prompt for password length
function selectLength() {
  var length = prompt("Set password length? (8-128 characters)", "8");
  if (length != null) {
    if (length >= 128) {
      length = 128;
    } else if (length <= 8) {
      length = 8;
    } else if (isNaN(length)) {
      alert("Invalid input!");
      return;
    }
  }
  return length;
}

// Prompt for character types to include in the password
function selectType() {
  var lower = confirm("Include lowercase?");
  var upper = confirm("Include uppercase?");
  var num = confirm("Include numbers?");
  var special = confirm("Include special characters?");
  var types = [lower, upper, num, special];
  return types;
}

// Validate input to make sure at least one character type is selected
function validType(type) {
  return type == false;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
