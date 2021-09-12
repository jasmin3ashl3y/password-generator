// Assignment code here  

function generatePassword(passwordLength, allChars){
    var password = ""
    i = 1
    while ( i <= passwordLength ){
      password += allChars.substr(Math.floor(Math.random() * allChars.length), 1)
      i++
    }
    return password
}

// Write password to the #password input
function writePassword() {
    var passwordLength = prompt("Choose a password length between 8 and 128 characters")
    var affirmative = ["y","Y","yes","YES","Yes"]
    var allChars = ""
    while (allChars === ""){ 
        var useUpper = prompt ("Do you want to use uppercase?")
        var useLower = prompt ("Do you want to use lowercase?")
        var useNumbers = prompt ("Do you want to use numbers?")
        var useSpecial = ("Do you want to use special characters?") 
        if (affirmative.includes(useUpper)){
            allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if (affirmative.includes(useLower)){
            allChars += "abcdefghijklmnopqrstuvwxyz"
        }
        if (affirmative.includes(useNumbers)){
            allChars += "0123456789"
        }
        if (affirmative.includes(useSpecial)){
            allChars += "!@#$%^&*()-_+:;,.<>?[]{}|/"
        }
    }
    var password = generatePassword(passwordLength, allChars);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log (generate.password);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
    
// Get references to the #generate element
generatePassword(0);
    
  var generateBtn = document.querySelector("#generate");
  var writePassword = generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
    
