"use strict";

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
//var image = document.createElement("img");
let image = new Image();

if (navigator.geolocation){

 let params = {enableHighAccuracy:true, timeout: 10000, maximumAge: 0};
 document.querySelector("body").appendChild(canvas);
 navigator.geolocation.getCurrentPosition(gotPosition, denied, params);


}

else{
    
 alert("Your browser does not support navigator.geolocation");
    
}

function gotPosition(position){
    var key = "AIzaSyDhogmRmuCdphAKb2nfc1BoC1UnqRBUIho";
    var  longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
   //var url = "http://maps.googleapis.com/maps/api/staticmap?center=Australia&size=400x400&style=element:labels|visibility:on&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true";
    var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude +  "," + longitude + "&zoom=14&size=400x400&key=" + key + "&markers=color:blue%7Clabel:C%7C" + latitude + "," + longitude;
   // image.src = url;
    canvas.width = 800;
    canvas.height = 800;
    console.log(image);
  // canvas.appendChild(image);
    image.onload = function(){ // we need to load the image before drawing it!!!
        
        ctx.drawImage(image, 0, 0);
    };
    
    image.src = url;
  
    
   
   
    // this runs when you click allow
    // this is where we would append a canvas and get location as well as add the image
    

}

// let url = "https://maps.googleapis.com/maps/api/staticmap?center=" + longitude + "," + latitude ; //"&zoom=14&size=400x400&key=" + key;


function denied(err){

    // this runs when you click denied
    alert("We dont have permission to find your location");
    
}



