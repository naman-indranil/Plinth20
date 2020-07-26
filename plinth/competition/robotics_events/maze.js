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
    p.textContent="Make an autonomous bot that completes the maze in shortest time.";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="Make an autonomous bot that completes the maze in shortest time.";
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
     ul.innerHTML="<li>Only 1 member of the team is allowed to handle the bot.</li><li>Participants are not allowed to keep anything inside the arena other than the bot.</li><li>Laptops/personal computers are not allowed near the arena. Other Wi-Fi, Bluetooth, etc. devices must be switched off. The organizers hold the right to check for these devices and their usage and disqualify the team.</li><li>Time measured by any contestant by any other means is not acceptable for scoring.</li><li>In case of any disputes / discrepancies, the organizers’ decision will be final and binding.</li><li>The organizers reserve the rights to change any or all of the above rules as they deem fit. Change in rules, if any will be highlighted on the website and notified to the registered teams.</li><ul><strong>Bot Specifications</strong><li>The autonomous bot must fit into the box of dimension 220 mm X 220 mm X 220 mm (lxbxh).</li><li>Bot must be started individually by only one switch. However, a team may have an onboard switch for restart. This switch has to be shown to the organizer before the run.</li><li>Bot must have a red LED which will glow once it reaches the end zone of the arena.</li><li>During the run, the autonomous bot must not damage the arena in any way. It is not allowed to leave anything behind or make any marks while traversing the arena. Any bot found damaging the arena will be immediately disqualified. The final decision is at the discretion of the organizers.</li><li>Bot must have ‘on board’ power supply.</li><li>When using the electric power supply, the potential difference between any 2 points must not exceed 24 V at any point of time during the game.</li><li>The autonomous bot should not separate or split into two or more units. All bots/units which are touching each other or are in the starting point will be considered as one bot.</li><li>The Machine cannot be constructed using readymade ‘Lego kits’ or any readymade mechanism. But they can make use of readymade gear assemblies. Violating this clause will lead to disqualification of the team.</li></ul>";
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
    p.textContent="Teams have to build an autonomous robot which can follow a black line and keep track of directions while going through the maze. The bot has to analyse the path in the dry run and has to go through the maze from the starting point to the ending point in minimum possible time.";
     var ul=document.querySelector("#mylist");
    ul.innerHTML="<p><strong>Gameplay</strong></p><li>The first part is the Dry Run. In this part the bot must start from the START and find its way to reach the END of the arena. The bot has to give a signal by glowing a LED as soon as it senses the black box below it at the end. The bot has to follow an algorithm to find its path to reach ‘End’ and bot can store the turns in its memory to explore the shortest path during second part of journey. There are no restrictions to cover all the checkpoints.</li><li>The second part is the Actual Run. In this part the bot has to restart from the ‘Start’ again and finds its way to the ‘End’ through the best possible path by following the path that was stored in first part. The ‘End Zone’ has a black box of 35cm x 35cm (lxb) that indicates the end of the path for the bot. The timer will be set to zero as the Actual Run begins.</li><li>A total of 3 minutes will be provided to complete the dry run.</li><li>A total of 2 minutes and 30 seconds will be provided to complete the actual run.</li><li>If the bot takes more than 3 minutes for completing the dry run, then the extra time taken will be deducted from the timing of the actual run which is 2 minutes and 30 Seconds.</li>";
   
    p.style.fontSize="1.3em";
    

 }
});