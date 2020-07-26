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
    p.textContent="The ultimate test of engineering excellence, teamwork, strategy, and gaming is here! Robowar, an excellent opportunity to witness the UFC of robot-to-robot combat, where mass destruction, carnage, and mayhem can happen in every match as participants battle it out for the ULTIMATE PRIZE.The law of the jungle, of 'might is right,' shall prevail. Only the toughest shall survive! Sparks shall fly, and temperatures shall soar high this Plinth’19! So, be there at time you won’t get a chance to blink till the very end.";
    
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="The ultimate test of engineering excellence, teamwork, strategy, and gaming is here! Robowar, an excellent opportunity to witness the UFC of robot-to-robot combat, where mass destruction, carnage, and mayhem can happen in every match as participants battle it out for the ULTIMATE PRIZE.The law of the jungle, of 'might is right,' shall prevail. Only the toughest shall survive! Sparks shall fly, and temperatures shall soar high this Plinth’19! So, be there at time you won’t get a chance to blink till the very end.";
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
     ul.innerHTML="<li>The competition will be played on a knock-out basis.</li><li>The bot will be inspected for safety before the event begins. If found to be unsafe for the participants/spectators, it will be discarded.</li><li>The organizers reserve the right to change any or all of the rules as they deem fit. Changes in rules, if any, will be highlighted on the website.</li><li>Violation of any of the rules will result in immediate disqualification.</li><li>The maximum time limit for the clash of combatants inside the arena is 6 minutes.</li><li>Any team if asked will have to change its wireless module frequency/coded channel,to avoid clashes with the opposite teams.</li><li>If there is any ambiguity in the selection of the weapon systems, please clarify the same with the event organizers to avoid further confusion.</li><li>The bot is not allowed to leave anything behind during the run. It should not leave any mark on the arena</li><li>A bot will be declared immobile (out) if it cannot exhibit linear motion of at least one inch within 30 seconds. A bot with one side of its drive train disabled will not be counted out if it can demonstrate some degree of controlled movement.</li><li>Teams that are not ready when called for battle will be considered to have declared a walkover, and will receive no points. The bot cannot be split into two sub-units. Two distinct parts connected by a flexible cable will be considered separate units.</li><li>Damaging the arena will lead to immediate disqualification. Lego kits, readymade kits, car bases and development boards are not permitted though readymade gear boxes are permitted.</li><li>The team can comprise of a maximum of 6 students from the same institute or other institutes as well.</li><li>In all cases, the judges' decision will be final and binding.</li><li>The teams are not allowed to tamper with the opponent’s robot or hinder at their time of the competition.</li>";
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
     b.textContent="Robot Specifications";
    p.textContent=""; var ul=document.querySelector("#mylist");
    ul.innerHTML="<li>The machine should fit in a box of dimension 750mm x 750mm x 1000 mm (l x b x h) at any given point during the match. The external device used to control the machine or any external tank is not included in the size constraint.</li><li>The machine should not exceed 60 kilograms of weight excluding the weight of pneumatic/hydraulic source/tank and batteries, if any. Weight of remote controller will not be counted</li><li>Jumping and hopping is not allowed.Flying (using airfoil, helium balloons, ornithopters, etc.) is not allowed.</li><li>The weight of adapters and the remote controller will not be included in this constraint Mobility.</li><li>All robots must have easily visible and controlled mobility in order to compete.</li><ul>Methods of mobility include:<li>Rolling (wheels, tracks or the whole robot)</li><li>Walking (linear actuated legs with no rolling or cam operated motion)</li><li>Ground effect air cushions (hovercrafts)</li><li>Jumping and hopping is NOT allowed,Flying (airfoil using, helium balloons, ornithopters, etc.) is NOT allowed</li></ul>";

    p.style.fontSize="1.3em";
    

 }
});