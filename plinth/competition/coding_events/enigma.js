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
    p.textContent="Is your life summarised by the 4 words - Eat, Sleep, Code, Repeat? Want to prove yourself to be The Ultimate Code Master? Tired of searching for the perfect team mates in every competition? Want to prove your worth as a solo coder? Looking for the perfect platform to display your skills? This solo coding competition, is designed for the masterminds who think they perform best alone. So, if this is a challenge you dare to take on, then register yourself in this ultimate CodeSprint!";
    var p1=document.createElement("p");
     p1.textContent="P.S. : The online round is rated for Div1 + Div2.";
     p.appendChild(p1);
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var p5=document.querySelector("p");
    
    var b5=document.querySelector(".h3");

    b5.textContent="SYNOPSIS";
    p5.textContent="Is your life summarised by the 4 words - Eat, Sleep, Code, Repeat? Want to prove yourself to be The Ultimate Code Master? Tired of searching for the perfect team mates in every competition? Want to prove your worth as a solo coder? Looking for the perfect platform to display your skills? This solo coding competition, is designed for the masterminds who think they perform best alone. So, if this is a challenge you dare to take on, then register yourself in this ultimate CodeSprint!";
    var p15=document.createElement("p");
     p15.textContent="P.S. : The online round is rated for Div1 + Div2.";
     p5.appendChild(p15);
    p5.style.fontSize="1.3em";

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
     p.textContent="Key Details of Enigma – The Plinth CodeSprint'19";
     p.style.fontSize="1.3em";
     var ul=document.querySelector("#mylist");
     ul.innerHTML="<li>The first online round of the contest will be held on 10th January 2019 (Thursday).</li><li>Contest duration will be 3 hours.</li><li>This is a solo contest – no team participation is allowed.</li><li>Plagiarism by any means will lead to immediate disqualification of the participant.</li><li>Participants that cross the cut off score in the Qualifier Round will be selected for the Onsite Round during PLINTH'19t at The LNMIIT, Jaipur.</li><li>Penalty of 10 Minutes will be charged for every incorrect submission.</li>";
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
    p.textContent="The contest will involve 2 rounds – an online qualifier round and a final onsite battle!";
    var p1=document.createElement("p");
    p1.textContent="The registered particpants will first compete in the online qualifier round - The participants that qualify this round will get a chance to fight the codewar, to win, in the onsite round.";
    p.appendChild(p1);
    var p3=document.createElement("p");
    p3.textContent="Both online and onsite rounds will have a set of 7 questions, each ranging from cakewalk to hard level and you get 3 hours in each round to crack as many as you can!";
    p.appendChild(p3);
    var p4=document.createElement("p");
    p4.textContent="Certificates and prizes(worth ₹ 35,000) will be awarded to the winners of the onsite round.";
    p.appendChild(p4);
    var p5=document.createElement("p");
    p5.textContent="Special Detail : Participants selected for the onsite round, will get to attend Code Sessions by ACM-ICPC World Finalist Karan Aggarwal for free of cost.";
    p.appendChild(p5);
    var p2=document.createElement("p");
    p2.textContent="Platform Partner: Codechef";
    p.appendChild(p2);
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
