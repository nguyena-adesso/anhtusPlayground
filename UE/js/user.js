
var authorized = false;

var mycar = "";

function connectUser(event) {

    var socket = new SockJS('http://192.168.8.109:61613/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, ready, onError);

    //event.preventDefault();
}

function ready() {
    // Subscribe to the Public Channel
    stompClient.subscribe('/channel/updateUser', identificateCar)
}

function identificateCar(carIdentificator){

    mycar = JSON.parse(carIdentificator.body);

    console.log(mycar);


    document.getElementById("model").innerHTML = "Modell: " + mycar.model;
    document.getElementById("capacity").innerHTML = "Kapazität: " + mycar.battery;
    document.getElementById("chargingState").innerHTML ="Akkustand: " + mycar.chargingState;

    document.getElementById("model").style.display = "block";
    document.getElementById("capacity").style.display = "block";
    document.getElementById("chargingState").style.display = "block";

    document.getElementById("myRange").min = mycar.chargingState;
    document.getElementById("myRange").value = mycar.chargingState;
    document.getElementById("myRange").style.display = "block";

    document.getElementById("demo").innerHTML = mycar.chargingState;
    document.getElementById("demo").style.display = "inline";


}
/*
function login(){

    console.log("sent");

    var car = document.getElementById("userName").value;

   stompClient.send("/app/login", {}, JSON.stringify({
               carNumber: car,
   }));


}
*/

// password and login Handler
document.getElementById('loginForm').onsubmit = function (evt) {
   var car = document.getElementById('userName').value;
   var pass = document.getElementById("userPassword").value;

   if (car!= "auto1" && car != "auto2" && car != "auto3" && car!= "auto4" && car != "auto5" && car != "auto6" && car!= "auto7" && car != "auto8" && car != "auto9" && car!= "auto10") {
      document.getElementById("nameError").style.display = "block";
      evt.preventDefault();
   }
   else{
      switch(car){
          case "auto1":
              if(pass != "auto1"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;

          case "auto2":
              if(pass != "auto2"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;
          case "auto3":
              if(pass != "auto3"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;

          case "auto4":
              if(pass != "auto4"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;
          case "auto5":
              if(pass != "auto5"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;

          case "auto6":
              if(pass != "auto6"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;
          case "auto7":
              if(pass != "auto7"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;

          case "auto8":
              if(pass != "auto8"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;
          case "auto9":
              if(pass != "auto9"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;

          case "auto10":
              if(pass != "auto10"){
                  document.getElementById("passwordError").style.display = "block";
                  evt.preventDefault();
              }
              else{
                  authorized = true;
              }
          break;
      }
   }


   if(authorized == true){

        stompClient.send("/app/login", {}, JSON.stringify({
             carNumber: car.replace("auto","")
        }));
   }
}

function calculatePrice(){
    var batteryState = mycar.chargingState;
    //console.log(batteryState);
    var load = document.getElementById("myRange").value;

    //console.log(load);
    if(load <= batteryState){
        document.getElementById("price").innerHTML = "You already have that amount of Energy in your Battery";
    }
    else{
        var chargingAmount = load - batteryState;
        document.getElementById("price").innerHTML = Math.round(chargingAmount/12 *100) /100 + " Euro";
    }
}

