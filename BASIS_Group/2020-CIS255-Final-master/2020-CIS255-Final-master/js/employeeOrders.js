var orders = [];
var query = [];
var ordersArray = [];
var queryArray = [];
var storageNames = [];
var queryStorageNames = [];
var queryCounter = 0;
var orderCounter = 0;
var login = 0;
var userName = JSON.parse(localStorage.getItem("login"));
document.onload = validateLogin();


    $(document).ready(function(){
        $(".orderHeader").click(function(){
            $(event.target).siblings().closest(".orderItemList").slideToggle(600);
        })

        $(".queryHeader").click(function(){
            $(event.target).siblings().closest(".queryItemList").slideToggle(600);
        })
    })


    function validateLogin(){
        if(localStorage.length > 0){
            findLogin();
            console.log("Login: "+login);
            if(login == 0 ){
                location.href = "Employee_Login.html";
            }else{
                $("#profilePic").css("background-image", "url('../2020-CIS255-Final/images/"+userName+".png')");
                document.getElementById("welcomeUser").innerHTML = "<h3>Welcome "+userName+"!</h3>";
                writeOrders()
            }
        }else{
            location.href = "Employee_Login.html";
        }
    }

    function writeOrders(){
        if(localStorage.length>0){
            getLocalStorage();
        }
        for(var x =0; x<ordersArray.length; x++){
            orders[x] = ordersArray[x];
            document.getElementById('orderListy').innerHTML += "<div><h3 class='orderHeader'>Order#"+x+"</h3><div class='orderItemList' id='order#"+x+"' name='order#"+x+"'><button class='listButton' type='button' onclick='deleteOrder("+x+");'>Remove Order</button><br /></div></div>";
            for(var i =0; i<orders[x].length; i++){
            document.getElementById('order#'+x).innerHTML += "<span class='orderSpans'>"+orders[x][i].name+"</span>"+"<span class='orderSpans'>"+orders[x][i].amount+"</span>"+"<span class='orderSpans'>$"+(orders[x][i].price*orders[x][i].amount).toFixed(2)+"</span><br />";
            }
            // document.getElementById('orderListy').innerHTML += "";
        }
        for(var x =0; x<queryArray.length; x++){
            query[x] = queryArray[x];
            document.getElementById('queryListy').innerHTML += "<div><h3 class='queryHeader'>Query#"+x+"</h3><div class='queryItemList' id='query#"+x+"' name='query#"+x+"'><button type='button' onclick='deleteQuery("+x+");'>Remove Query</button></div></div>";
            document.getElementById('query#'+x).innerHTML += "<br /><span class='querySpans'>First Name: "+query[x][0]+"</span>"+
            "<br /><span class='querySpans'>Last Name: "+query[x][1]+"</span>"+
            "<br /><span class='querySpans'>Email: "+query[x][2]+"</span>"+
            "<br /><span class='querySpans'>Phone Number: "+query[x][3]+"</span>"+
            "<br /><span class='querySpans'><textarea id='queryComment#"+x+"' readonly='readonly' rows='6' cols='50' maxlength='500'></textarea></span><br />";
           
         }  
         for(var x =0; x<queryArray.length; x++){
            document.getElementById('queryComment#'+x).value = queryArray[x][4];
         }
    }
    function getLocalStorage(){
        findKeys() 
        var counter = 0;
            while(storageNames.length != orderCounter){
                if(localStorage.getItem("order#"+counter)!=null){
                    parsedData = JSON.parse(localStorage.getItem("order#"+counter))
                    localStorage.removeItem("order#"+counter)
                    storageNames.push("order#"+ storageNames.length)
                    ordersArray.push(parsedData); 
                }
                counter++;
            }
            for(var i = 0; i<ordersArray.length; i++){
                localStorage.setItem("order#"+i,JSON.stringify(ordersArray[i]));
            }
            counter = 0;
            while(queryStorageNames.length != queryCounter){
                if(localStorage.getItem("query#"+counter)!=null){
                    parsedData = JSON.parse(localStorage.getItem("query#"+counter))
                    localStorage.removeItem("query#"+counter);
                    queryStorageNames.push("query#"+queryStorageNames.length)
                    queryArray.push(parsedData); 
                    
                }
                counter++;
            }
            for(var i = 0; i<queryArray.length; i++){
                localStorage.setItem("query#"+i,JSON.stringify(queryArray[i]));
            } 
            counter = 0;  
       console.log(storageNames);    
       console.log(queryStorageNames);  
       console.log(queryArray); 
    }

    function findLogin() {
        for (var key in localStorage) {
            if(key.match("login")){
                login++;
            }
        }
    }

    function deleteOrder(key){
         console.log((storageNames[key])+" was deleted!")
         localStorage.removeItem(storageNames[key]);
        //  refreshOrders();
        //  writeOrders();
        location.reload();
    }

    function deleteQuery(key){
        console.log((queryStorageNames[key])+" was deleted!")
        localStorage.removeItem(queryStorageNames[key]);
        // refreshOrders();
        // writeOrders();
        location.reload();
   }


   function refreshStorage(){
    for(var i = 0; i<storageNames.length; i++){
        localStorage.removeItem(storageNames[i])
    }
    for(var i = 0; i<queryStorageNames.length; i++){
        localStorage.removeItem(storageNames[i])
    }
    storageNames = [];
    queryStorageNames = [];
    for(var i = 0; i<ordersArray.length; i++){
        localStorage.setItem("order#"+i,JSON.stringify(ordersArray[i]));
    }
    for(var i = 0; i<queryArray.length; i++){
        queryStorageNames.push("query#"+i)
        localStorage.setItem("query#"+i,JSON.stringify(queryArray[i]));
    }  
   }

    function refreshOrders(){
        ordersArray = [];
        orders = [];
        storageNames = [];
        query = [];
        queryArray = [];
        queryStorageNames = [];
        document.getElementById('orderListy').innerHTML = "";
        document.getElementById('queryListy').innerHTML = "";
    }


    function getQuery(Key){
        var tempItem = localStorage.getItem(Key)
        return tempItem;
    }

    function findKeys() {
        queryCounter = 0;
        orderCounter = 0;
        for (var key in localStorage) {
            if(key.match("query")){
                queryCounter++;
            }else if(key.match("order")){
                orderCounter++;
            }
            //console.log(key);
        }
        console.log("There are "+queryCounter+" queries, and "+orderCounter+" orders in LocalStorage.")
    }
    
    function logOut(){
        localStorage.removeItem("login");
        location.reload();
    }