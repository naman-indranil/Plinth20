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
    p.textContent="Imagine you are playing on a battlefield of your favorite video game .Your squad gets raided by the enemy forces and you get separated from your squad in the attack. You are stranded alone in the enemy territory. This sounds amazing , isn’t it . So we have this event transporter for you. Our aim is to design a transporter that can navigate in the rough conditions of the battlefield and clear all the obstacles and hurdles in your way to safe territory. The path is stringy and time is minimal. Fasten your seatbelts the war has just started, get ready with your claws to grab and change the phase of the battle with the innovative transporter  you made with your team.";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="Imagine you are playing on a battlefield of your favorite video game .Your squad gets raided by the enemy forces and you get separated from your squad in the attack. You are stranded alone in the enemy territory. This sounds amazing , isn’t it . So we have this event transporter for you. Our aim is to design a transporter that can navigate in the rough conditions of the battlefield and clear all the obstacles and hurdles in your way to safe territory. The path is stringy and time is minimal. Fasten your seatbelts the war has just started, get ready with your claws to grab and change the phase of the battle with the innovative transporter  you made with your team.";
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
     ul.innerHTML="<li>Team will have to report at least 15min before the time slot allotted to them at the beginning of the event, failure to do so may result in disqualification.</li><li>No last minute repairs will be allowed in the arena. However, each team can take a time-out of 2 minutes once during a match.</li><li>Organisers reserve the rights to change the rules at any point of time as they deem fit.</li><li>Depending upon the number of participants , the judging committee will decide how many teams will qualify for the main event.</li><li>Only two players are allowed to enter the arena.</li><li>The track will have one or more slopes, terrain can be rough or smooth.</li><li>Organizers decision will be final decision.</li><ul><strong>Bot Specifications</strong><li>The maximum dimensions of the bot are 30*30*30 cm.</li><li>The external remote control used to control the bot is not included in the size constraint.</li><li>The bot may be wired or wireless. In case of a wired bot, the wires must remain slack at all times during the game.</li><li>The machine must not be made from Lego parts, or any ready-made assembly kits.</li><li>The bot shall be inspected before the event. Failing the inspection shall lead to disqualification.</li><li>Each team has to bring its own power supply.The voltage difference between any two points on the bot must not exceed 24 volts.</li><li>The wire used to power/feed the bot should remain slack at all times.</li><li>The robot should not have any mechanism that can damage the arena in any manner.</li></ul>";
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
     b.textContent="Team Specifications";
    p.textContent="A Team can have a maximum of five participants. Each team must specify their team leader. All the important communications between Organizers and the registered teams will be done through their team representative. Each team must have a unique and proper name. A Team may consists of students from different colleges.The participants should present with a valid identity card of their institute. In case of any malpractice with the bot,the team will be immediately disqualified from the competition.";
    var ul=document.querySelector("#mylist");
    ul.innerHTML="";
   
    p.style.fontSize="1.3em";
    

 }
});