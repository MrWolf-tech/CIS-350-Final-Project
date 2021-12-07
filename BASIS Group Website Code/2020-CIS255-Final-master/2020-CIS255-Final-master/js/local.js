var userQueries = [];
var storageNames = [];

$(document).ready(function(){
    $("#newForm").animate({"height":"50vh"}, 750);
})


function getLocalStorage(){
    var tempCounter =0;
    for(var i =0; i<localStorage.length; i++){
        if(localStorage.getItem("query#"+i)!=null){
            storageNames.push("query#"+tempCounter)
            parsedData = JSON.parse(localStorage.getItem("query#"+tempCounter))
            userQueries.push(parsedData);
            tempCounter++;
        }
    }
    tempCounter = 0;
}

function getQuery(Key){
    var tempItem = localStorage.getItem(Key)
    return tempItem;
}

function validateForm(){
    
    var firstName = document.getElementById('firstName').value.slice(0,50).replace(/[^A-Za-z]/g,'').slice(0,20);
  
    var lastName = document.getElementById('lastName').value.slice(0,20).replace(/[^A-Za-z]/g,'');
    var email = document.getElementById('email').value.slice(0,30);
    var textArea = document.getElementById('comments').value.slice(0,300);
   
  if(firstName != '' && lastName != '' && email.match(/\S+@\S+\.\S+/)){ 
    document.getElementById('phoneNum').value =  document.getElementById('phoneNum').value.slice(0,50).replace(/[^0-9]/g,'').slice(0,12);
    var phoneNum =   document.getElementById('phoneNum').value;
    var queryInputs = [firstName, lastName, email, phoneNum, textArea]

    var parsed = JSON.parse(localStorage.getItem("query#0"));
    if(localStorage.getItem("query#0")!=null){
        getLocalStorage()
    }
    console.log(queryInputs);
    var storageKey = "query#"+(storageNames.length);
    storageNames.push(storageKey)
    userQueries.push(queryInputs);
    localStorage.setItem(storageKey, JSON.stringify(userQueries[userQueries.length-1]));
  }else{
      alert("There's a problem with your order! Make sure you have a real first and last name entered.");
    
  }
}

