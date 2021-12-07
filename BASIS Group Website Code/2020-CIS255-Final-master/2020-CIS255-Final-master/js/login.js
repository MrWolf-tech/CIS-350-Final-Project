var login = 0;

document.onload = validateLogin();

function validateLogin(){
    if(localStorage.length > 0){
        findLogin();
        if(login > 0 ){
            location.href = "Employee_Order_Status.html";
        }
    }
}

function findLogin() {
    for (var key in localStorage) {
        if(key.match("login")){
            login++;
        }
    }
}

