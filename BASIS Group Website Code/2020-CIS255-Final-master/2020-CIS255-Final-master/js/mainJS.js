//User Names and Passwords
var usernames = ["jstie","abrow","dkito"];
var passwords = ["welcome1","welcome2","welcome3"];
//Clears both username input and password input fields in the Employee_Login.html
function clrbtn(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
//Username and Password Validation for Employee Login
function checkPass(){
    var counter = 0;
for(var i=0;i<usernames.length;i++){
        if(document.getElementById("username").value == usernames[i] && document.getElementById("password").value == passwords[i]){
            var userName = document.getElementById("username").value;
            localStorage.setItem("login", JSON.stringify(userName));
            location.href = "Employee_Order_Status.html";
        }
        else{
            counter++;
        }
    if(counter==usernames.length){alert("Wrong username or password");}    
    }
    counter=0;
}
//Form Validation
function validateForm(){
    oFormObject = document.forms['passForm'];
}