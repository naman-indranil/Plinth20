$("#back").click(function (){
        
    /*var p=document.querySelector("p");
    var b=document.querySelector(".h3");
    p.innerHTML=null;
    b.innerHTML=null;
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;*/
var j=window.location.href;
var k=j.lastIndexOf("/");
j=j.substring(0,k);
k=j.lastIndexOf("/");
j=j.substring(0,k);
j=j+"/competition.html";
var s=document.getElementById("back");
s.href=j;
})

$("#synopsis").click(function () {
// $("#querycontent").addClass("d-none");
 //$("#morecontent").addClass("d-none");
 //$("#rulescontent").addClass("d-none");
 //$("#synopsiscontent").removeClass("d-none");
 console.log($("#synopsis").html().trim());
 if($("#synopsis").html().trim()=="Synopsis"){
     console.log("asdf");
     var p=document.querySelector("p");
    
    var b=document.querySelector(".h3");

    b.textContent="SYNOPSIS";
    p.textContent="Ten thousand teams. Two regions. Two splendid top performances. The journey from an being ordinary student to representing India at the most prestigious programming contest in the world - The International Collegiate Programming Contest, this speaker has surely had an eventful journey. For the first time ever, Cybros in association with Women Techmakers brings to you an opportunity to learn from one of India's best coders – Karan Aggarwal – an opportunity to Master Code with The Code Master!";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var p6=document.querySelector("p");
    
var b6=document.querySelector(".h3");

b6.textContent="SYNOPSIS";
p6.textContent="Ten thousand teams. Two regions. Two splendid top performances. The journey from an being ordinary student to representing India at the most prestigious programming contest in the world - The International Collegiate Programming Contest, this speaker has surely had an eventful journey. For the first time ever, Cybros in association with Women Techmakers brings to you an opportunity to learn from one of India's best coders – Karan Aggarwal – an opportunity to Master Code with The Code Master!";
p6.style.fontSize="1.3em";


$("#query").click(function () {
 //$("#synopsiscontent").addClass("d-none");
 //$("#morecontent").addClass("d-none");
 //$("#rulescontent").addClass("d-none");
 //$("#querycontent").removeClass("d-none");
 console.log($("#query").html().trim());
 if($("#query").html().trim()=="Query"){
     console.log("asdf");
     var p=document.querySelector("p");
    
     var b=document.querySelector(".h3");
     b.textContent="QUERY";
     p.style.fontSize="1.3em";
     p.textContent="Nikhil Gogia: +91-8529832077";
     var p1=document.createElement("p");
     p1.textContent="Vrinda Goel: +91-8003890410";
     p.appendChild(p1);
     var p2=document.createElement("p");  
     p2.textContent="For any query, contact us at coding@plinth.in";
     p.appendChild(p2);
     var ul=document.querySelector("#mylist");
     ul.innerHTML=null;
 }
});

$("#rules").click(function () {
 //$("#querycontent").addClass("d-none");
 //$("#synopsiscontent").addClass("d-none");
 //$("#rulescontent").addClass("d-none");
 //$("#morecontent").removeClass("d-none");
 console.log($("#rules").html().trim());
 if($("#rules").html().trim()=="Rules"){
     console.log("asdf");
     var p=document.querySelector("p");
    
     var b=document.querySelector(".h3");
     b.textContent="Rules";
     p.textContent="Key Details of IUPC'19";
     p.style.fontSize="1.3em";
     var ul=document.querySelector("#mylist");
     ul.innerHTML="<li>Be on time. That's it !</li>";
 }
});
$("#more").click(function () {
 //$("#synopsiscontent").addClass("d-none");
 //$("#morecontent").addClass("d-none");
 //$("#querycontent ").addClass("d-none");
 //$("#rulescontent").removeClass("d-none");
 console.log($("#more").html().trim());
 if($("#more").html().trim()=="Description"){
     console.log("asdf");
     var p=document.querySelector("p");
    
     var b=document.querySelector(".h3");
     b.textContent="Description";
    p.textContent="Programming is a sport - It is passion, it is undeterred dedication, it is patience - it is an addiction. And who would know this better than the one who represented India at the most prestigious coding competition in the world - The ACM ICPC. Cybros in association with Women Techmakers presents CodeSessions with Karan Aggarwal - one of the best coders in the country.";
    var p1=document.createElement("p");
    p1.textContent="Special Detail: Mr Karan would also be teaching a topic(to be declared onsite) whose question would be included in the enigma onsite round.";
    p.appendChild(p1);
    var p2=document.createElement("p");
    p2.textContent="Special Offer: The workshop will be complimentary for contestants who qualify for the onsite round of Enigma";
    p.appendChild(p2);
    var p3=document.createElement("p");
    p3.textContent="Special Prize: to Best female coder in enigma which would be conducted just after CodeSessions.";
    p.appendChild(p3);
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;
 }
});



/*let navtabside = document.querySelector("nav.navtab");
let navtabItemside = document.querySelectorAll("li.navtab-item");
var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="This introductory workshop on Artificial Intelligence gives an overview of many concepts, techniques, and algorithms in Fuzzy Logic, machine learning, and beginning with topics such as classification and linear regression and ending up with more recent topics such as working with neural network, network training, adaptive training, Best Meaning Fitting, Support Vector Machine etc. The course will give the student the basic ideas and intuition behind modern machine learning methods as well as a bit more formal understanding of how, why, and when they work.";
pinitial.style.fontSize="1.3em";

navtabItemside.forEach((navtabItem, activeIndex) => navtabItem.addEventListener("click", () => {
navtabItemside.forEach(navtabItem => navtabItem.classList.remove("active"));
navtabItem.classList.add("active");
navtabside.style.setProperty("--active-index", `${activeIndex}`);
var c=document.querySelector(".active");

var a=document.querySelector(".active").querySelector("i").innerHTML;

var p=document.querySelector("p");
console.log(a);
var b=document.querySelector(".h3");
if(a=="<!--syn-->"){
    b.textContent="SYNOPSIS";
    p.textContent="This introductory workshop on Artificial Intelligence gives an overview of many concepts, techniques, and algorithms in Fuzzy Logic, machine learning, and beginning with topics such as classification and linear regression and ending up with more recent topics such as working with neural network, network training, adaptive training, Best Meaning Fitting, Support Vector Machine etc. The course will give the student the basic ideas and intuition behind modern machine learning methods as well as a bit more formal understanding of how, why, and when they work.";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;
}
if(a=="<!--str-->"){
    b.textContent="STRUCTURE";
    p.textContent="Topics to be covered";
    var p1=document.createElement("p");
    p1.textContent="Module 1:";
    p.appendChild(p1);
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML="<li>Introduction to Artificial Intelligence</li><li>Applications of AI & Current trends</li><li>Different AI Techniques</li><li>AI Agents</li><li>PEAS Analysis</li><li>Different Types of AI Agents</li><li>Machine Learning</li><li>Introduction and Applications of Machine Learning</li><li>Supervised and Unsupervised Learning</li><li>Classification & Regression Problem</li><li>Clustering, Anomaly Detection</li><li>Getting started with Linear Regression</li><li>Building Linear Model</li><li>Gradient Descent Algorithm</li><li>Error Correction</li>";
}
if(a=="<!--ben-->"){
    b.textContent="BENEFITS";
    p.textContent="";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML="<li>Receive an unparalleled education from HT India Labs team with personal one-on-one attention.</li><li>Learn and interact with one of the respected authorities on computer security.</li><li>HT India Labs certification programs are recognized in the security industry.</li><li>Improve your job prospects and get an edge over your counterparts.</li><li>Interactive Query sessions, Live Demos, PowerPoint Presentation.</li><li>Certificate of Participation for all the workshop participants from HT India Labs.</li><li>At the end of this workshop, a small competition will be organized among the participating students and winners will be awarded with a 'Certificate of Excellence'.</li>";
 }
if(a=="<!--que-->"){
    b.textContent="QUERY";
    p.style.fontSize="1.3em";
    p.textContent="For more info, visit : www.htindialabs.com";
    var p1=document.createElement("p");
    p1.textContent="Suyash Agrawal: +91-7339875167";
    p.appendChild(p1);
    var p2=document.createElement("p");  
    p2.textContent="For any query, contact us at workshops@plinth.in";
    p.appendChild(p2);
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;
}
}));*/
