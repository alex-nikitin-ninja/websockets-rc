console.log('definitions connected');

var joystickState = {};
var configuration = {
	accel: {
		controller: 'controller_0',
		entity: 'axes',
		index: '_1',
		calibration: function(val){
			let _k = 2.5;
			let _inputCalibration = 1; // 1.31
			let _sign = val < 0 ? -1 : 1;
			let _val = Math.abs(parseFloat(val) * _inputCalibration * 100);
			let r = (Math.pow(_k, (_val/20))-1)/(Math.pow(_k, 5)-1)
			return r * _sign * -100;
		}
	},
	wheel: {
		controller: 'controller_0',
		entity: 'axes',
		index: '_3',
		calibration: function(val){
			let _k = 2.5;
			let _inputCalibration = 1; // 1.31
			let _sign = val < 0 ? -1 : 1;
			let _val = Math.abs(parseFloat(val) * _inputCalibration * 100);
			let r = (Math.pow(_k, (_val/20))-1)/(Math.pow(_k, 5)-1)
			return r * _sign * 100;
		}
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

