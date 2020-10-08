console.log('definitions connected');

var joystickState = {};

let joystickStateValues = document.getElementById('joystickState-values');
function updateJState(){
    joystickStateValues.innerHTML = JSON.stringify(joystickState);
    setTimeout(function(){
        updateJState()
    }, 50);
};
updateJState();

