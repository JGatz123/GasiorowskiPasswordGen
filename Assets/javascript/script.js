// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var numchars = "0123456789";
var Lchars ="abcdefghijklmnopqrstuvwxyz";
var spechars = "!@#$%^&*()";
var Uchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// This will hold all potential characters of the generated password
// password is a string and a string is an ordered data type. So we can use indexing to locate a specific thing in the password
// both password and finalpass are called ACCUMULATORS.  You add stuff to them as the code runs. 
var password = "";
// This will hold the final user password
var finalpass = "";



function writePassword(){
 var plength = prompt("Length of Password?");
 console.log(plength);

//check to see if plength is between 8-128 char//
    if (plength <8 || plength > 128 ){
      alert("Please Enter Password between 8-128 Characters");
      writePassword()
    }

// Check if user wants: lowercase, uppercase, numeric, and/or special characters// 
  // check for lower case
  var lochar = confirm("Include Lowercase Characters?"); 
  if(lochar === true){
    password = password + Lchars
    //password += Lchars
  } 
  console.log("current password", password);
  
  // check for upper case
  var upchar = confirm("Include Uppercase Characters?");
  if (upchar === true){
    password = password + Uchars
  }
  console.log("current password", password);
  
  // check for numeric
  var nchar = confirm("Include Numberic Characters?");
  if (nchar === true){
    password = password + numchars
  }
  console.log("current password", password);
  
  // check for special characters
  var schar = confirm("Include Special Characters?");
  if (schar === true){
    password = password + spechars
  }
  console.log("current password", password);

  // Make password with potential password characters
  // need to use a random number generator for this
  for (var i = 0; i <= plength; i++) {
    var randonum = Math.floor(Math.random() * password.length)
    console.log(" random number: ", randonum, "character at index: ", password[randonum])
    var passwordchar = password[randonum]
    // add password character to finalpass
    finalpass = finalpass + passwordchar
  }
  console.log(finalpass);

  //putting finalpass on screen
  // this is a two step process. First, select HTML. Second, do something with the HTML
  var passwordbox = document.querySelector("#password")
  passwordbox.textContent = finalpass
} 







 
 
 

