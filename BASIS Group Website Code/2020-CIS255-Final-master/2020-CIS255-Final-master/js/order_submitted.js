var currentTime = '';

document.onload = writeMessage();


function writeMessage(){
    getTime()
    document.getElementById('message').innerHTML +=" Your Order Will Be Ready At: "+currentTime+".";
}


function getTime() {
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes() + 30;
    var sec = date.getSeconds();

    if (min >= 60) {
        hour += 1;
        min -= 60;
    }
    if (hour > 12) {
        hour = 1;
    }
    currentTime = hour +":"+min;
  }