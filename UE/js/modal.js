// Get the modal
var modal = document.getElementById('modal');

//var i;
// Get the button that opens the modal
//var callout = document.getElementsByClassName("bs-callout")[i];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
/*callout.onclick = function() {
    for(i=0; i<callout.length; i++){
    modal.style.display = "block";
    }
}*/

function allCallouts() {
    var callout = document.getElementsByClassName("bs-callout");
    var i;
    for (i = 0; i < callout.length; i++) {
        callout[i];
        modal.style.display = "block";
    }
}
//When user clicks on span (x)
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}