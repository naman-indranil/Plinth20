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
    p.textContent="Can we pretend that airplanes in the night sky are like shootin' stars, I could really use a wish right now, wish right now, wish right now. So, if your wishes also coincide with wright brothers you have arrived at right place.Plinth 2020 presents the RC plane flying competition. Get ready to feed your inner pilot and show your enthusiasm by building a remote control plane and show your insane flying skills..... So get ready to Rule the Sky!!";    
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="\"Can we pretend that airplanes in the night sky are like shootin' stars, I could really use a wish right now, wish right now, wish right now\". So, if your wishes also coincide with wright brothers you have arrived at right place.Plinth 2020 presents the RC plane flying competition. Get ready to feed your inner pilot and show your enthusiasm by building a remote control plane and show your insane flying skills..... So get ready to Rule the Sky!!\"";
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
     p.textContent="Chirag Tejwani : 9784585175";
     var p1=document.createElement("p");
     p1.textContent="Archit Srivastava : 9079630731";
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
     ul.innerHTML="<li>The use of 2.4 GHz radio is required for all aircraft competing in the competition. If the participants want to use any other frequency, they will have to inform the organizers in advance.</li><li>A limited number of 2.4 GHz radios will be available with the organizers for use by the teams. Teams who do not have access to radios can inform the organizers in advance to request use of these radios.</li><li>Receivers installed in the aircraft have to be in 'receiver mode only'.</li><li>All the systems (Servos, motor, etc.) will be checked by organizers for functionality before the competition. If found not working, teams will be dismissed from the competition.</li><li>Pilot can position himself at any point in the arena to fly the aircraft during the rounds. Metal propellers are not allowed.</li><li>The models can have powered take-off with a landing gear or can be launched manually by a person standing at ground level.</li><li>Plane should be built from scratch and not purchased models.</li><li>A team member can’t be a part of more than one team. Bring your college/student I-Card at the time of competition.</li><li>Any of the above mentioned rules, if found violated, teams would not be allowed to participate in the competition.</li>";
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
    p.textContent="The competition requires participants to design and fabricate a RC Plane (no Readymade Planes are allowed) and perform a set of maneuvers. Propellers, Motors, ESC, Servos, Receiver and Transmitter are allowed as off-the-shelf items.";
    var ul=document.querySelector("#mylist");
    ul.innerHTML="";
   
    p.style.fontSize="1.3em";
    

 }
});