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
    p.textContent="The Robocar race is an imposing sight! The low profile and flowing wheel arches give it a distinct, animalistic look. Like a cheetah, it seems ready to pounce at any moment! Don’t you want to witness it and how would it be if your own created robot, race in the field and win? Here is the platform, roborace in plinth 2020 where you can showcase your technical skills, create your own robots and see them running on the board.";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="The Robocar race is an imposing sight! The low profile and flowing wheel arches give it a distinct, animalistic look. Like a cheetah, it seems ready to pounce at any moment! Don’t you want to witness it and how would it be if your own created robot, race in the field and win? Here is the platform, roborace in plinth 2020 where you can showcase your technical skills, create your own robots and see them running on the board.";
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
     ul.innerHTML="<li>Design a manually controlled ROBOT that has capacity to cover maximum distance in shortest possible time.</li><li>Design a manually controlled robot that can race through all Possible terrains like sand, pebbles, obstacles, bumpers, bridges, Marbles, grease, inclines, dips, cliffs, ramps, banks, etc.</li><li>The aim of the event is to check the robustness of the vehicle and its competence with the opponent on the same track.</li><li>The robot which gain maximum points will be the winner.</li><li>Any team can participate in Robo race. These can be from same or different institute</li><li>A team may consist of 1 to 4 member.</li><li>Each team must specify their Team representative (leader) at the time of registration on the website.</li><li>Each student must have id card of their college</li><li>One should not use the wires for lifting up or moving the bot</li><li>Participants need to carry their own power source (preferably 12V battery).</li><li>The track will contain certain number of checkpoints and if the bot goes out of the track then it has to start with the previous checkpoint</li><li>.There will be certain number of hurdles and obstacles. Each obstacle and hurdle will be assigned some specific points and have to be completed in a stipulated time limit.</li><li>The machine must not contain any combustible, corrosive, or otherwise dangerous materials for safety reasons.</li><li>Point description will be disclosed on the spot before commencement of event.</li><li>In case of any discrepancies organizer’s decision will be final and binding</li><li>The organizers reserve the right to change any or all of the rules as they desire</li><li>Change in the rules as if any will be informed through e-mail or via Facebook page.</li>";
    /*var p1=document.createElement("p");
    p1.textContent="Team Specification :";
    p.appendChild(p1);
    var u1=document.createElement("ul");
    u1.innerHTML="";
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
     b.textContent="Game Play";
    p.textContent="The motive is to design a wired robot with specific dimensions being manually controlled machine that is capable of completing the ALL TERRAIN Arena successfully in minimum time with speed and accurate control and overcoming all hurdles that hinder its path.";
    var ul=document.querySelector("#mylist");
    ul.innerHTML="";
   
    p.style.fontSize="1.3em";
    

 }
});
