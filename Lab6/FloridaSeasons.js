//--------------------------------------------------------------------
//FloridaSeasons.js - Florida Seasons Web Page JS File
// Shane Irons - 30 Sep 2019 - Saint Leo University
//--------------------------------------------------------------------

//--------------------------------------------------------------------
//function SummerClick() -- handles the Summer myButotn SummerClick event.
//--------------------------------------------------------------------
function SummerClick(){
    var myDoc = document.getElementById("hd19");
    myDoc.innerHTML = "Summer";
    myDoc=document.getElementsByTagName("body");
    myDoc[0].style.backgroundColor="green";
    var myDoc = document.getElementById("d19");
    myDoc.innerHTML = "Hot and Humid";
}

//--------------------------------------------------------------------
//function WinterClick() -- handles the Winter myButton WinterClick event.
//--------------------------------------------------------------------
function WinterClick(){
    var myDoc = document.getElementById("hd19");
    myDoc.innerHTML = "Winter";
    myDoc=document.getElementsByTagName("body");
    myDoc[0].style.backgroundColor="khaki";
    var myDoc = document.getElementById("d19");
    myDoc.innerHTML = "Warm and Dry";
}

//--------------------------------------------------------------------
//function init() -- handles the button events and debug window
//--------------------------------------------------------------------
function init() {
  var DEBUG = false;
  if (DEBUG) {
    window.alert("JS Connected");
    console.log("JS Connected");
  }
  myButton = document.getElementById("SUM19");
  myButton.addEventListener("click",SummerClick);
  myButton = document.getElementById("WIN19");
  myButton.addEventListener("click",WinterClick);
}
