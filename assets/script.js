// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numbers = window.confirm("Would you like to use numbers?");
  var upperCase = window.confirm("Would you like to use capital letters?");
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  var specialCharaters = window.confirm("would you like to use special charaters?");
  var charaters = window.prompt("How mand charaters would you like your pasword to have?");
  if (Number.isNaN(charaters)) {
    alert('Password length must be provided as a number');
    return null;
  }
  if(numbers == false && specialCharaters == false && upperCase == false && lowerCase == false ){
    return null;
  }
  else {
   return genpasrandomiser(charaters);
  }
  function genpasrandomiser(len) {
    let pass = '';
    let output = '';
    if (numbers == true){
      pass += "0123456789"
    }
    else{
      pass += ''
    }
    if (specialCharaters == true){
      pass += "!@#$%^&*()_+{}|:<>?/.,;\][=-"
    }
    else{
      pass += ''
    }
    if (upperCase == true){
      pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else{
      pass += ''
    }
    if (lowerCase == true){
      pass += "abcdefghijklmnopqrstuvwxyz"
    }
    else{
      pass += ''
    }
  
    for (let i = 0; i < len; ++i) {
        output += pass.charAt(Math.floor(Math.random() * pass.length));
    }
    console.log(output);
    return output;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
