var state = '';
var city = '';
$(document).ready(function(){
    $(".contactHeader").click(function(){
        $(event.target).siblings().closest(".contactItems").slideToggle(600);
    })

    $(".queryHeader").click(function(){
        $(event.target).siblings().closest(".queryItemList").slideToggle(600);
    })
})

function findState(item){
     state = item.options[item.selectedIndex].text;
    
    if(state == 'Arizona'){
        console.log("Arizona");
        document.getElementById("googleMap").innerHTML = "";
        document.getElementById("cities").innerHTML = "";
        document.getElementById("cities").innerHTML = "<select id='city' onchange='findCity(this)'><option selected>Select A City</option><option>Phoenix</option><option>Tucson</option><option>Mesa</option></select>"
    }else if(state == 'California'){
        console.log("California");
        document.getElementById("googleMap").innerHTML = "";
        document.getElementById("cities").innerHTML = "";
        document.getElementById("cities").innerHTML = "<select id='city' onchange='findCity(this)'><option selected>Select A City</option><option>Fresno</option><option>Los Angeles</option><option>Sacramento</option></select>"
    }else if(state == 'Nevada'){
        console.log("Nevada");
        document.getElementById("googleMap").innerHTML = "";
        document.getElementById("cities").innerHTML = "";
        document.getElementById("cities").innerHTML = "<select id='city' onchange='findCity(this)'><option selected>Select A City</option><option>Henderson</option><option>Carson City</option><option>Sparks</option></select>"
    }else if(state == 'Oklahoma'){
        console.log("Oklahoma");
        document.getElementById("googleMap").innerHTML = "";
        document.getElementById("cities").innerHTML = "";
        document.getElementById("cities").innerHTML = "<select id='city' onchange='findCity(this)'><option selected>Select A City</option><option>Oklahoma City</option><option>Tulsa</option><option>Norman</option></select>"
    }else if(state == 'Washington'){
        console.log("Washington");
        document.getElementById("googleMap").innerHTML = "";
        document.getElementById("cities").innerHTML = "";
        document.getElementById("cities").innerHTML = "<select id='city' onchange='findCity(this)'><option selected>Select A City</option><option>Bellevue</option><option>Seattle</option><option>Tacoma</option></select>"
    }else{
        document.getElementById("googleMap").innerHTML = "";
        document.getElementById("cities").innerHTML = "";
    }
    
}

function findCity(item){
    city = item.options[item.selectedIndex].text;
    if(city != 'Select A City'){
        //===========================================[]-Arizona-[]================================================================================================================
        if(city == 'Phoenix'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.0130651732!2d-112.40523041633368!3d33.605099114992306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1592317993949!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Tucson'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216178.87412402633!2d-111.02388780876768!3d32.155832839997714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d665410b2ced2b%3A0x73c32d384d16c715!2sTucson%2C%20AZ!5e0!3m2!1sen!2sus!4v1592318066110!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Mesa'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106594.06539589039!2d-111.80779809477784!3d33.395480277711314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba7c2c0c592c1%3A0xd10fc215694e771b!2sMesa%2C%20AZ!5e0!3m2!1sen!2sus!4v1592318087624!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }
        //===========================================[]-California-[]================================================================================================================
        else if(city == 'Fresno'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102252.06064353429!2d-119.86460097052196!3d36.78551291948083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de1549e4e9d%3A0x7b12406449a3b811!2sFresno%2C%20CA!5e0!3m2!1sen!2sus!4v1592322424484!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Los Angeles'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27395913703!2d-118.69191175853832!3d34.020161326298485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1592322406132!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Sacramento'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99833.19502969336!2d-121.51295197920774!3d38.561713083856084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1592322373258!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }
        //===========================================[]-Nevada-[]================================================================================================================
        else if(city == 'Henderson'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103279.61039829637!2d-115.12990303808387!3d36.00837919122422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c9ae1f5f4291%3A0xef1b2a38ca2061b5!2sHenderson%2C%20NV!5e0!3m2!1sen!2sus!4v1592318286292!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Carson City'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98985.72339233327!2d-119.84636646474182!3d39.16781248762387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80990aa1f8deb471%3A0xf79c6c82bde23828!2sCarson%20City%2C%20NV!5e0!3m2!1sen!2sus!4v1592318316528!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Sparks'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49204.82091194564!2d-119.7504623746423!3d39.57535919466958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80993ed409896c93%3A0xf189599a50856df9!2sSparks%2C%20NV!5e0!3m2!1sen!2sus!4v1592318338022!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }
        //===========================================[]-Oklahoma-[]================================================================================================================
        else if(city == 'Oklahoma City'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207928.17962011683!2d-97.6192799651311!3d35.48256700969086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad8a547ef8d281%3A0x33a21274d14f3a9d!2sOklahoma%20City%2C%20OK!5e0!3m2!1sen!2sus!4v1592318676224!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Tulsa'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206181.69428829895!2d-96.01809290308732!3d36.152219929180106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1592318702357!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Norman'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104268.16028885935!2d-97.43240950498567!3d35.24680077406507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b263b67f93eee7%3A0x445b233faba85cf8!2sNorman%2C%20OK!5e0!3m2!1sen!2sus!4v1592318717112!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }
        //===========================================[]-Washington-[]================================================================================================================
        else if(city == 'Bellevue'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86094.90246533124!2d-122.2211707952723!3d47.59763363366305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906bcfa3a66041%3A0xbacf5482ead00765!2sBellevue%2C%20WA!5e0!3m2!1sen!2sus!4v1592317450250!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Seattle'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.4482453893547!2d-122.32206738393512!3d47.67571417918923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901463e820938b%3A0x9b784b2c0053f1cf!2sWayward%20Vegan%20Cafe!5e0!3m2!1sen!2sus!4v1591820774941!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }else if(city == 'Tacoma'){
            document.getElementById("googleMap").innerHTML = "<iframe id='location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86666.5851404869!2d-122.52686470498267!3d47.2492346616631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549054ee2b659567%3A0x62219c07ebb09e82!2sTacoma%2C%20WA!5e0!3m2!1sen!2sus!4v1592317571162!5m2!1sen!2sus' frameborder='0'  allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
        }
    }else{
        city = '';
        document.getElementById("googleMap").innerHTML = "";
    }
    
}

function contactForm(){
    if(localStorage.getItem("login")== null){
        location.href = "contact_submit.html";
    }else{
        alert("Query Submitted!");
        location.reload();
    }
    
}