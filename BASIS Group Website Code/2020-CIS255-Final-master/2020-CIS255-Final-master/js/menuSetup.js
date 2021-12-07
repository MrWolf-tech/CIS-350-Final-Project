
var items = [{name:"Bean soup", description:"Our bean soup contains a mixture of great Northern, pinto, large lima, yelloweye, garbanzo, baby lima, green split, kidney, cranberry, bush bean, lentil, white kidney, and black beans for a protein packed bowl of wonder!", price:1.99}, {name:"Bread", description:"literally just bread.", price:1.99}, {name:"Vegan fried rice", description:"Cooked with a myriad of various different vegetables.", price:1.99}];
var beverages = [{name:"Crackers", description:"You can't stop us from selling the crackers.", price:1.99}, {name:"Lemonade", description:"Made from fresh lemons.", price:3.99}, {name:"Water", description:"Watery goodness.", price:0.50}];
var desserts =[{name:"Garlic bread", description:"Served hot and fluffy and topped with creamy butter and olives to produce a satisfying crunch.", price: 2.99}, {name:"Spiced Cashew-Coconut Brittle", description:"Hard sugar filled with cashews and topped with coconut flakes, cinnamon, and black pepper.", price: 3.99}];
var orders = [];
var ordersArray = [];
var storageNames = [];

function setupMenuElement(data, id) {
    let numberInput = data.name + "number";
    document.getElementById(id).innerHTML += "<section class=\"MenuItem\" id=" + dataToHtml(data.name.split(" ").join("")) + ">" + 
    "<h3>" + data.name + "</h3>" +
    "<p>" + data.description + "</br>price: $" + data.price + "</p>" +
    "<input id=" + dataToHtml(data.name + "number") + " type=\"number\" min=1 max=10 value=1>" +
    "<button id=" + data.name + "test onclick=\"addToOrders(" + valuesToHtmlStringList([data.name, data.price, numberInput]) + ")\">place order</button>" +
    "</section>";

}

function valuesToHtmlStringList(values) {//writing list into the html button attribute writes is kinda annoying and difficult to read so I just made this.
    let htmlList = "[";
    let i = 0;
    for (i = 0; i<values.length; i++) {
        htmlList += dataToHtml(values[i]);
        if (i < values.length - 1) {
            htmlList += ",";
        }
    }
    htmlList += "]";
    return htmlList;
}

function dataToHtml(value) {
    let output = "";
    if (typeof(value) == "string") {
        output += "\'" + value + "\'";
    }
    else {
        output += value;
    }
    return output;
}

function addToOrders(value) {
    let orderExist = false;
    let i = 0;
    console.log(typeof(parseInt(document.getElementById(value[2]).value)));
    if (isNaN(parseInt(document.getElementById(value[2]).value))) {
        return false;
    }
    for (i = 0; i<orders.length; i++) {
        if (orders[i].name == value[0]) {
            orderExist = true;
            orders[i].amount += parseInt(document.getElementById(value[2]).value);
        }
    }
    if (orderExist == false) {
        orders.push({name:value[0], amount:parseInt(document.getElementById(value[2]).value), price:value[1]});
    }
    createOrderElements(orders);
}

function createOrderElements(orders) {
    let i = 0;
    let priceTotal = 0;
    document.getElementById("itemsOrdered").innerHTML = "";
    for (i = 0; i<orders.length; i++) {
        priceTotal += orders[i].price * orders[i].amount;
        document.getElementById("itemsOrdered").innerHTML += "<p>Item #" + (i+1) + "</p>";
        document.getElementById("itemsOrdered").innerHTML += "<section id=" + dataToHtml(orders[i].name.split(" ").join("") + "order") + ">" + orders[i].name + "<br />Amount: " + orders[i].amount + 
            "</br>price: $" + (orders[i].price * orders[i].amount).toFixed(2) + 
            "<br /><button onclick=\"removeOrder(" + dataToHtml(orders[i].name.split(" ").join("") + "order") + "," + dataToHtml(orders[i].name) + ")\">remove order</button>"+
            "</section>";
    }
    document.getElementById("itemsOrdered").innerHTML += "<p>price total: $" + priceTotal.toFixed(2) + "</p>";
}

function removeOrder(removed, name) {
    let i = 0;
    for (i = 0; i<orders.length; i++) {
        if (orders[i].name == name) {
            orders.splice(i, 1);

        }
    }
    createOrderElements(orders);
}

function goThroughItems(items, id) {
    let i = 0;
    for (i = 0; i<items.length; i++) {
        setupMenuElement(items[i], id);
    }
}

function purchaseOrder(){
    //console.log(orders);
    if(localStorage.getItem("order#0")!=null){
        getLocalStorage()
    }
    if(orders.length !=0){
        var storageKey = "order#"+(storageNames.length);
        storageNames.push(storageKey)
        ordersArray.push(orders);
        localStorage.setItem(storageKey, JSON.stringify(ordersArray[ordersArray.length-1]));
        if(localStorage.getItem("login") == null){
            location.href = "order_submit.html"
        }else{
            alert("Order Submitted!");
            location.reload();
        }
       
   }
}
    

function getLocalStorage(){
    for(var i =0; i<localStorage.length; i++){
        if(localStorage.getItem("order#"+i)!=null){
            storageNames.push("order#"+i)
            parsedData = JSON.parse(localStorage.getItem("order#"+i))
            ordersArray.push(parsedData);
        }
    }
    
}

function getQuery(Key){
    var tempItem = localStorage.getItem(Key)
    return tempItem;
}

goThroughItems(items, "itemMenu");
goThroughItems(desserts, "dessertMenu");
goThroughItems(beverages, "beverageMenu");