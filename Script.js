//sessionStorage Data grabber ONLY transfers one object of data
//document.getElementById("Name").innerHTML = sessionStorage.getItem("id");////// IGNORE THIS LINE FOR NOW /////

let queryId = "personName="; //Name of variable that is passed
let personName = (window.location.search).slice((window.location.search).search(queryId) + queryId.length); //finds passed variable in header, Note: will need redesigned if multiple variables are passed
//name is a string
//if name is crossed out below due to lack of data.  NO data has been parsed yet. DO NOT FRET OVER IT!!!  
//Fill in your respective bio entries where the text = "I am ....."

//Attribute settings for Jake's Profile
if (personName == "jake") {
    document.getElementById("Name").innerHTML = "Jake";
    document.getElementById("img").innerHTML = "<img alt='image of Jake' src='Jake.jpg'/>";
    document.getElementById("bio").innerHTML = "An organized professional with a strong background in web-based development. Effective at providing insight and optional improvements to existing systems for effective service delivery. I diligently provide the best services possible to create a fast and responsive experience. ";
    document.getElementById("service").innerHTML = "<ul><li>Web Development</li><li>Front-End Development</li><li>Back-End Development</li><li>Security</li><li>Network Security</li><li>Database Creation/Management</li><li>Software Development</li></ul>";
    document.getElementById("projects").innerHTML = "<div><a href='2020-CIS255-Final-master/2020-CIS255-Final-master/index.html'><img alt='image of Wayword' class='projectpic' src='Wayword.PNG'/><h3 class='projectname'>Wayword Resturant</h3></a></div><div><a href='HomePage.html'><img alt='image of axolotl' class='projectpic' src='Axolotl.PNG'/><h3 class='projectname'>Axolotl Portfolio Page</h3></a></div>";
}

//Attribute settings for True's Profile
if (personName == "true") {
    document.getElementById("title").innerHTML = "True";
    document.getElementById("Name").innerHTML = "True";
    document.getElementById("img").innerHTML = "<img alt='image of True' src='true_2.jpg'/>";
    document.getElementById("bio").innerHTML = "I am a student at Olympic college. In 2021, I graduated from Olympic College with an Associates at the age of 18. I've gone on to continue my academic career by entering into the BAS-IS (Bachelors' of Applied Science - Information Systems) program. In my High School and Junior High School careers, I attended multiple classes relating Information Technology. Most importantly I entered into an A+ certification class, where I was able to earn the A+ cert at the end. I've learned a few skills during my time at Olympic College and hope to learn more. I'm generally a quick learner and a technical thinker. I like taking on new complex subjects as I enjoy problem solving, which is why computers and cars are hobbies that interest me.";
    document.getElementById("service").innerHTML = "<ul><li>Computer Troubleshooting</li><li>Computer Repair</li><li>Basic Scripting</li></ul>";
    document.getElementById("projects").innerHTML = "<div><a href='http://cis2.oc.ctc.edu/class/mw255.spring21/truesparrow/greenteam-home.htm'><img alt='image of Neon Cafe Project Website' class='projectpic' src='project_true-1.jpg'/></a><a href='http://cis2.oc.ctc.edu/class/mw255.spring21/truesparrow/greenteam-home.htm'><h3 class='projectname'>Neon Cafe</h3></a></div><div><a href='https://tsparrow.github.io/Project/V4/index.html'><img alt='image of' class='projectpic' src='project_true-2.jpg'/></a><a href='https://tsparrow.github.io/Project/V4/index.html'><h3 class='projectname'>CYOA Game</h3></a></div>";
}

//Attribute settings for Shama's Profile
if (personName == "shama") {
    document.getElementById("Name").innerHTML = "Shama";
    document.getElementById("img").innerHTML = "<img alt='image of Shama' src='shama.jpg'/>";
    document.getElementById("bio").innerHTML = "Shama is a student at Olympic College. She is currently in the BAS-IS (Bachelor of Applied Science in Information Systems) program. This quarter she is taking the following classes: Small Group Communication, Project Management, and IS Foundations. She will be graduating with a Bachelor of Applied Science in Information Systems in Spring 2023. During her free time, she likes to spend time with her family and friends. She also enjoy hiking, gardening, and being outdoors as much as possible.";
    document.getElementById("service").innerHTML = "<ul><li>Project Management</li> <li>Backup and Disaster Recovery</li> <li>Network Security</li></ul>";
    document.getElementById ("projects").innerHTML= "<div><a href=''><img alt='image of Australia Rides Website' class='projectpic' src='project1.jpg' /></a><a href=''><h3 class='projectname'>Australia Rides</h3></a></div>                  <div><a href=''><img alt='image of Horseback Adventures in South America Website' class='projectpic' src='project2.jpg' /></a><a href=''><h3 class='projectname'>Adventures in South America</h3></a></div>";

}

//Attribute settings for Javaris' Profile
if(personName == "javaris"){
    document.getElementById("Name").innerHTML = "<h2>Javaris</h2>";
    document.getElementById("img").innerHTML = "<img alt='image of Javaris' src='Javaris.jpg'/>";
    document.getElementById("bio").innerHTML = "I am a navy veteran and Korean language specialist. Coming from my field in the Navy, I learned to process substantial amounts of information in short amounts of time to send as concise reports to my superiors. From those challenges I was molded into a versatile leader and diligent worker. I currently hold a TOP SECRET security clearance to accompany my Korean language proficiency My leadership traits came directly from the superb people I worked with and learned from. Now I work at Olympic College as a lab technician, this job has given me hands-on experience with Cisco switches, servers, and overall administration." 
    document.getElementById("service").innerHTML = "<ul><li>Manage Cisco switches</li> <li>Manage Users and Directories</li></ul>";
    document.getElementById("projects").innerHTML = "<div><a href='https://jaytaylor-dev.github.io/project/V4/index.html'><img alt='image of ____' class='projectpic' src='GlutenFreedomClip.jpg' /></a><a href='https://jaytaylor-dev.github.io/project/V4/index.html'><h3 class='projectname'>Gluten Freedom V4</h3></a></div><div><a href='https://jaytaylor-dev.github.io/project/V4/index.html'><img alt='image of ____' class='projectpic' src='project_javaris-2.jpg' /></a><a href='https://jaytaylor-dev.github.io/project/V2/index.html'><h3 class='projectname'>Gluten Freedom V2</h3></a></div>";
}

