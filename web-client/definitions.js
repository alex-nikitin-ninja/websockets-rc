var joystickState = {};

var configuration = {
    accel: {
        controller: 'controller_0',
        entity: 'axes',
        index: '_1',
        calibration: function(val) {
            let _k = 2.5;
            let _inputCalibration = 1; // 1.31
            let _sign = val < 0 ? -1 : 1;
            let _val = Math.abs(parseFloat(val) * _inputCalibration * 100);
            let r = (Math.pow(_k, (_val / 20)) - 1) / (Math.pow(_k, 5) - 1);
            r = Math.min(1, r);
            return r * _sign * -100;
        }
    },
    wheel: {
        controller: 'controller_0',
        entity: 'axes',
        index: '_3',
        calibration: function(val) {
            let _k = 2.5;
            let _inputCalibration = 1; // 1.31
            let _sign = val < 0 ? -1 : 1;
            let _val = Math.abs(parseFloat(val) * _inputCalibration * 100);
            let r = (Math.pow(_k, (_val / 20)) - 1) / (Math.pow(_k, 5) - 1);
            r = Math.min(1, r);
            return r * _sign * 100;
        }
    }
}

var movableObjectValues = {
    accel: 0,
    wheel: 0,
}

let joystickStateValues = document.getElementById('joystickState-values');