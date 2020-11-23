console.log('definitions connected');

var joystickState = {};

let joystickStateValues = document.getElementById('joystickState-values');
function updateJStateOnScreen(){
    joystickStateValues.innerHTML = JSON.stringify(joystickState);
    setTimeout(function(){
        updateJStateOnScreen()
    }, 50);
};
updateJStateOnScreen();

