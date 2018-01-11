'use strict';

/*var usernamePage = document.querySelector('#username-page');
var chatPage = document.querySelector('#chat-page');
var usernameForm = document.querySelector('#usernameForm');
var messageForm = document.querySelector('#messageForm');
var messageInput = document.querySelector('#message');
var messageArea = document.querySelector('#messageArea');
var connectingElement = document.querySelector('.connecting');*/

var stompClient = null;
var username = null;


function connect(event) {
    var socket = new SockJS('http://192.168.8.102:61613/ws');

    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
    //event.preventDefault();
}


function onConnected() {
    // Subscribe to the Public Channel
    stompClient.subscribe('/channel/updateProfiles', onUpdateProfile)
    stompClient.subscribe('/channel/updateInfoData', onUpdateInfoData)
    stompClient.subscribe('/channel/updateChargingInfo', onUpdateChargingInfo)
}


function onError(error) {
      console.log('Could not connect to WebSocket server.');
}



function onMessageReceived(payload) {
    var message = JSON.parse(payload.body);
}

function onUpdateInfoData(updateMessage){
    var connectedCars = JSON.parse(updateMessage.body);
    document.getElementById("numberOfConnectedCars").innerHTML = connectedCars.numberOfCars;
}

function onUpdateChargingInfo(updateMessage){

}

function onUpdateProfile(updateMessage){

    var json = JSON.parse(updateMessage.body);
    console.log(json.identifier);

    //Aktualisierung des Generating Profiles
    if(json.identifier == "generationprofile"){         //Energy-Generating Profile
        for(var i=0; i < lineChart.config.data.datasets[0].data.length; i++){
            lineChart.config.data.datasets[0].data[i] = json.data[i*4].kw;
            //lineChart.resize(json[i*4].kw);
        }
    }
    //Aktualisierung des Industrie Verbrauches
    else if(json.identifier == "loadprofile"){          //Energieverbrauch Profile
        for(var i=0; i < lineChart.config.data.datasets[3].data.length; i++){
            lineChart.config.data.datasets[3].data[i] = json.data[i*4].kw;
            //lineChart.resize(json[i*4].kw);
        }
    }
    //Atkualisierung der Ladeleistung
    for(var i=0; i < lineChart.config.data.datasets[2].data.length; i++){
        lineChart.config.data.datasets[2].data[i] = 0;
        //lineChart.resize(json[i*4].kw);
    }
    //Aktualisierung des Gesamtverbrauches
    for(var i=0; i < lineChart.config.data.datasets[1].data.length; i++){
        lineChart.config.data.datasets[1].data[i] = lineChart.config.data.datasets[2].data[i]+lineChart.config.data.datasets[3].data[i];
        //customChart.resize(json[i*4].kw);
    }




    //console.log(customChart.config.data.datasets[0].data);

    lineChart.update();
}