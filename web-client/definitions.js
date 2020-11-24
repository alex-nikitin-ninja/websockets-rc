console.log('definitions connected');

var joystickState = {};
var configuration = {
	accel: {
		controller: 'controller_0',
		entity: 'axes',
		index: '_2',
		calibration: '-100'
	},
	wheel: {
		controller: 'controller_0',
		entity: 'axes',
		index: '_3',
		calibration: '100'
	}
}
var movableObjectValues = {
	accel: 0,
	wheel: 0,
}

let joystickStateValues = document.getElementById('joystickState-values');
function updateJStateOnScreen(){
    joystickStateValues.innerHTML = '';
    joystickStateValues.innerHTML += JSON.stringify(movableObjectValues, null, 1);
    joystickStateValues.innerHTML += "\n";
    joystickStateValues.innerHTML += JSON.stringify(configuration, null, 1);
    joystickStateValues.innerHTML += "\n";
    joystickStateValues.innerHTML += JSON.stringify(joystickState, null, 1);
    

    // movableObjectValues
    let elWheelPos = document.querySelector('.wheel-value .wheel-position');
    let elAccelPos = document.querySelector('.accel-value .accel-position');

    elWheelPos.style['margin-left'] = (movableObjectValues.wheel/100 * 400) + 'px';
    elAccelPos.style['margin-bottom'] = (movableObjectValues.accel/100 * 250) + 'px';

    setTimeout(function(){
        updateJStateOnScreen()
    }, 50);
};
updateJStateOnScreen();

