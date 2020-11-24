function updateMainObject() {
	for (let k in movableObjectValues) {
		if (joystickState.hasOwnProperty(configuration[k].controller)) {
			let controller = joystickState[configuration[k].controller];
			if (controller.hasOwnProperty(configuration[k].entity)) {
				let entity = controller[configuration[k].entity];
				if (entity.hasOwnProperty(configuration[k].index)) {
					movableObjectValues[k] = parseFloat(entity[configuration[k].index]) * parseFloat(configuration[k].calibration);
					movableObjectValues[k] = movableObjectValues[k].toFixed(4);

					movableObjectValues[k] = 0.1 * (movableObjectValues[k] * movableObjectValues[k])

				}
			}
		}
	}
}