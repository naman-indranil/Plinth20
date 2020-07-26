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
    p.textContent="An autonomous robot capable of navigating efficiently through guided black lines on a white floor and reach from starting to finishing line as soon as possible. The robot must be able to detect particular line and keep following it.";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="An autonomous robot capable of navigating efficiently through guided black lines on a white floor and reach from starting to finishing line as soon as possible. The robot must be able to detect particular line and keep following it.";
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
     ul.innerHTML="<li>Maximum Number of members in a team: 4 Members.</li><li>No human intervention is allowed in between the race.</li><li>Point description will be disclosed on the spot before commencement of event.</li><li>Points earned will be calculated within the time limit and free time will be provided only once if any technical problem occurs.</li><li>In case of any discrepancies organizer’s decision will be final and binding.</li><li>The width of the line will be 22-25 mm.</li><li>The track will contain certain number of check-points and if the bot goes out of the track then it has to start with the previous check- point and have to be completed in a stipulated time limit.</li><li>A robot is deemed to have crossed the line when the forward most wheel, track, or leg of the robot contacts or crosses over the finish line.</li><li>If the team members wish to touch the robot after the robot starts from the start line, they can take a timeout. A 20 second penalty will be levied in case of a timeout. However strategies based on timeouts may lead to disqualification.</li><li>A team can take any number of timeouts. However they will have to restart their robot from the previous checkpoint.</li><li>There will a technical inspection before every match. (The bots have to free run on an arbitrary track to ensure that it is purely based on LINE FOLLOWING ALGORITHMS)</li><li>The organizers reserve the right to change any or all of the rules as they desire. Change in the rules as if any will be informed through e-mail or via Facebook page.</li><li>Any team found flouting any rules would be automatically disqualified.</li><li>A maximum of 4 minutes will be allowed per team for completing the track.</li>";
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
     b.textContent="Problem Statement :";
    p.textContent="Design and fabricate an autonomous robot that can follow the line on a contrasting background(generally black lines on a white background). The main aim will be to test whether the robot can detect and follow the track comprising of straight lines, sharp turns, curves and lines of different angles with accuracy and precision in minimum time.";
    var p1=document.querySelector(".p");
    var ul=document.querySelector("#mylist");
    ul.innerHTML="";
    p1.innerHTML="<p>Round 1</p><li>The participating teams will be judged on the basis of points gained and total time taken.</li><li>If the team members wish to touch the robot after the robot starts , they can take a timeout. A 10 second penalty will be levied in case of timeout.</li><p>Round 2</p><li>The participating teams will be judged on the basis of points gained and total time taken.</li><li>If the team members wish to touch the robot after the robot starts , they can take a timeout. Maximum touches allowed are 10. A 10 second penalty for each touch will be levied in case of timeout.</li>";
    p.appendChild(p1);
    
    p.style.fontSize="1.3em";
    

 }
});
