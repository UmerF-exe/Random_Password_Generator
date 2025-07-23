var eye = document.getElementById("eye");
var eye_slash = document.getElementById("eye_slash");
function showPassword(){
    eye.style.display = "none";
    eye_slash.style.display = "block";
    passwordBox.type = "text";
}
function hidePassword(){
    eye.style.display = "block";
    eye_slash.style.display = "none";
    passwordBox.type = "password";
}
var passwordBox = document.getElementById("password");
var range = document.getElementById("slider");
var passwordLength = document.getElementById("passwordLength");
var rangeNum;
function rangeUpdate(){
    rangeNum = range.value;
    passwordLength.innerHTML = "Password Length: " + rangeNum;
}
function generatePassword(){
    var Length = rangeNum
    var match = true
    var includeUpperCase = document.getElementById("upperCase").checked
    var includeLowerCase = document.getElementById("lowerCase").checked
    var includeNumber = document.getElementById("num").checked
    var includeSymbols = document.getElementById("symbols").checked
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbols = "`~!@#$%^&*()_+-=|[]:{};'?<>,./'";   
    var allowChars = ''
    var password = ''  
    allowChars += includeUpperCase ? upperCase : ""
    allowChars += includeLowerCase ? lowerCase : ""
    allowChars += includeNumber ? numbers : ""
    allowChars += includeSymbols ? symbols : ""
    if( allowChars.length === 0){
        password = "At least one check box should be checked "
        match = false
        
    }
    else if(match){    
        for( i=0 ; i<Length; i++){
            var randomNum = Math.floor(Math.random() * allowChars.length)
            password += allowChars[randomNum]
        }
    }
    passwordBox.value = password;  
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    passwordBox.value = "Copied!";
}