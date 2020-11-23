console.log('joystick-client connected');

var haveEvents = 'GamepadEvent' in window;
var haveWebkitEvents = 'WebKitGamepadEvent' in window;
var controllers = {};

// normally this work at 60 fps
var rAF = window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.requestAnimationFrame;

function connecthandler(e) {
    addgamepad(e.gamepad);
}
function addgamepad(gamepad) {
    controllers[gamepad.index] = gamepad;
    rAF(updateStatus);
}

function disconnecthandler(e) {
    removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
    delete controllers[gamepad.index];
}

function updateStatus() {
    scangamepads();
    for (j in controllers) {
        var controller = controllers[j];

        joystickState['controller_' + j] = {
            buttons: {},
            axes: {}
        };
        
        // reading buttons
        for (var i=0; i<controller.buttons.length; i++) {
            var val = controller.buttons[i];
            var pressed = val == 1.0;
            var touched = false;
            if (typeof(val) == "object") {
                pressed = val.pressed;
                if ('touched' in val) {
                    touched = val.touched;
                }
                val = val.value;
            }
            joystickState['controller_' + j].buttons['_' + i] = val;
        }

        // reading sticks
        for (var i=0; i<controller.axes.length; i++) {
            var val = controller.axes[i].toFixed(4);
            joystickState['controller_' + j].axes['_' + i] = val;
        }
    }
    rAF(updateStatus);
}

function scangamepads() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    for (
        var i = 0; i < gamepads.length; i++) {
        if (gamepads[i] && (gamepads[i].index in controllers)) {
            controllers[gamepads[i].index] = gamepads[i];
        }
    }
}

if (haveEvents) {
    window.addEventListener("gamepadconnected", connecthandler);
    window.addEventListener("gamepaddisconnected", disconnecthandler);
} else if (haveWebkitEvents) {
    window.addEventListener("webkitgamepadconnected", connecthandler);
    window.addEventListener("webkitgamepaddisconnected", disconnecthandler);
} else {
    setInterval(scangamepads, 500);
}

