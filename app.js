
var passwordBox = document.getElementById("password");
var range = document.getElementById("slider");
var passwordLength = document.getElementById("passwordLength");
var rangeNum;
function rangeUpdate(){
    rangeNum = range.value;
    passwordLength.innerHTML = "Password Length: " + rangeNum;
}

var eye = document.getElementById("eye");
var eye_slash = document.getElementById("eye_slash");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "`~!@#$%^&*()_+-=|[]:{};'?<>,./'";

var allChars = upperCase + lowerCase + numbers + symbols;
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
function generatePassword(){
    var password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.rangeNum)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.rangeNum)];
    password += numbers[Math.floor(Math.random() * numbers.rangeNum)];
    password += symbols[Math.floor(Math.random() * symbols.rangeNum)];

    while(rangeNum > password.rangeNum){
        password += allChars[Math.floor(Math.random() * allChars.rangeNum)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    passwordBox.value = "Copied!";
}