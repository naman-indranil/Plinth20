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
    p.textContent="Ever dreamt of building something or making the existing gadgets better and efficient with your electronics knowledge? Are you interested to build something using basic electronics components or Arduino and sensors on a breadboard? Come and be part of Makers Auction and show your creativity to be master of circuits!  First, simply answer some questions to earn money for virtual bidding of your tools and solve the problem statement. So what are you waiting for?? Participate, bid, build and win.";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="Ever dreamt of building something or making the existing gadgets better and efficient with your electronics knowledge? Are you interested to build something using basic electronics components or Arduino and sensors on a breadboard? Come and be part of Makers Auction and show your creativity to be master of circuits!  First, simply answer some questions to earn money for virtual bidding of your tools and solve the problem statement. So what are you waiting for?? Participate, bid, build and win.";
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
     ul.innerHTML="<li>A team may have a maximum of 4 members.</li><li>Each participant can be a part of one team only. If the same participant is found as a member of more than one team, will lead to disqualification of both teams.</li><li>Anyone and everyone is allowed to be a part of the event.</li><li>The first round for everyone is a brainstorming quiz.</li><li>Only a top percentage of the winning teams will be playing the next rounds, might happen that every winning team gets a chance to play next rounds so come and participate.</li><li>The next two rounds will require you to bid your components and build an easy circuit out of them.</li><li>The one who builds first and shows correct output wins, simple as it sounds.</li><li></li><li>In case of a tie, time is the comparison factor.</li><li>During the bid, a decorum is expected to be maintained.</li><li>If in any case any team member is found guilty for destroying the components, the respected team will be disqualified.</li><li>Any kind of misconduct and not acceptable behaviour by team members will lead to the disqualification of the team.</li><li>The organising team has all rights to modify the rules and description during the event.</li><li>The decision of the organising committee and judges will be final.</li>";
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
    p.textContent="Maker’s Auction consists of two rounds. First is the quiz round in which the team needs to score more than a threshold to qualify for the bidding round which is the second round. In this, you will be provided with a list of problem statements consisting of basic electronics circuits or Arduino board based circuits. You can choose any one as per your choice and bid for the items required to complete your design in the auction. The designs are ranked based on the working, efficient usage of components, time taken by your team to make it and also the logic involved. There are lots of amazing prizes waiting!!!";
    
    var ul=document.querySelector("#mylist");
    ul.innerHTML="";
   
    p.style.fontSize="1.3em";
    

 }
});
