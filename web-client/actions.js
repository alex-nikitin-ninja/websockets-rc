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