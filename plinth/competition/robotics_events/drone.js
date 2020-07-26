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
    p.textContent="Drone racing is a rapidly evolving modern sport capturing imaginations of tech enthusiasts worldwide. Imagine flying around in a Tron like world with neon light streaks and markers all around. Your field of view, like that of a rebel pilot in Star Wars whizzing through the action. This is kind of what it feels like to be a pilot in a drone race. So, in this plinth get immersed in a futuristic atmosphere with drones whizzing past you and get ready to feel the ‘a-drone-align’ rush";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="Drone racing is a rapidly evolving modern sport capturing imaginations of tech enthusiasts worldwide. Imagine flying around in a Tron like world with neon light streaks and markers all around. Your field of view, like that of a rebel pilot in Star Wars whizzing through the action. This is kind of what it feels like to be a pilot in a drone race. So, in this plinth get immersed in a futuristic atmosphere with drones whizzing past you and get ready to feel the ‘a-drone-align’ rush";
pinitial.style.fontSize="1.3em";

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
     p.textContent="";
     var p1=document.createElement("p");
     p1.textContent="";
     p.appendChild(p1);
     var p2=document.createElement("p");  
     p2.textContent="";
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
     p.textContent="";
     p.style.fontSize="1.3em";
     var ul=document.querySelector("#mylist");
     ul.innerHTML="<li>Every team is required to submit their design for the robot, which should also contain a detailed description of the key components of the design. (mandatory)</li><li>The participating teams will be given max time of 6 minutes to complete the track.</li><li>The participating teams will be allowed to take a timeout of 2 minutes max. (The total time would exclude the time taken during the timeout.)</li><li>The timer will stop only when the drone finally lands on the landing zone.</li><li>They must not land their drone anywhere (except for the timeout)</li><li>Each team would be allowed to skip any one of the obstacles.</li><li>If any team doesn't skip any of the obstacles, they will get a time bonus of 15 sec(tentative).</li><li>There might be a few surprise obstacles too. Hence your drone should be prepared for any challenge.</li><li>In case of any disputes / discrepancies, the organizers’ decision will be final and binding.</li><li>Team gaining the maximum points will win.</li><li>In case of a tie the team taking the lesser time would be declared the winner.</li><ul>Team Specification: <li>A team may have a maximum of 4 members.</li><li>Each participant can be a part of one team only. If same participant is found as a member of more than one team, will lead to disqualification of both teams.</li></ul><ul>Drone Specification :<li>The size of the drone must be in the range of 30-60 cm.</li> </ul>";

     /*var p1=document.createElement("p");
    p1.textContent="Team Specification :";
    p.appendChild(p1);
    var u1=document.createElement("ul");
    u1.innerHTML="<li>A team may have a maximum of 4 members.</li><li>Each participant can be a part of one team only. If same participant is found as a member of more than one team, will lead to disqualification of both teams.</li>";
    ul.appendChild(u1);
    var p2=document.createElement("p");
    p2.textContent="Robot Specification :";
    p.appendChild(p2);
    var u2=document.createElement("ul");
    u2.innerHTML="<li>The size of the drone must be in the range of 30-60 cm.</li>";
    ul.appendChild(u2);*/
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
    p.textContent="Design a wireless remote-controlled flying platform to complete an obstacle course in minimum time without crashing.";
    var p1=document.createElement("p");
    p1.textContent="The length and breadth of the drone should not exceed by 60cms.";
    p.appendChild(p1);
    var p2=document.createElement("p");
    p2.textContent="";
    p.appendChild(p2);
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;
 }
});
