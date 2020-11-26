function updateJStateOnScreen() {
    joystickStateValues.innerHTML = '';
    joystickStateValues.innerHTML += JSON.stringify(movableObjectValues, null, 1);
    joystickStateValues.innerHTML += "\n";
    joystickStateValues.innerHTML += JSON.stringify(configuration, null, 1);
    joystickStateValues.innerHTML += "\n";
    joystickStateValues.innerHTML += JSON.stringify(joystickState, null, 1);


    // movableObjectValues
    let elWheelPos = document.querySelector('.wheel-value .wheel-position');
    let elAccelPos = document.querySelector('.accel-value .accel-position');

    elWheelPos.style['margin-left'] = (movableObjectValues.wheel / 100 * 400) + 'px';
    elAccelPos.style['margin-bottom'] = (movableObjectValues.accel / 100 * 250) + 'px';

    setTimeout(function() {
        updateJStateOnScreen()
    }, 50);
};
updateJStateOnScreen();

function updateMainObject() {
    for (let k in movableObjectValues) {
        if (joystickState.hasOwnProperty(configuration[k].controller)) {
            let controller = joystickState[configuration[k].controller];
            if (controller.hasOwnProperty(configuration[k].entity)) {
                let entity = controller[configuration[k].entity];
                if (entity.hasOwnProperty(configuration[k].index)) {
                    let value = configuration[k].calibration(entity[configuration[k].index]);
                    movableObjectValues[k] = value.toFixed(4);
                }
            }
        }
    }
}