class Controller {
	static pick(object, etalon) {
		const pickedObject = etalon.reduce((obj, key) => {
			if (object && Object.hasOwnProperty.bind(object)(key)) {
				obj[key] = object[key];
			}

			return obj;
		}, {});

		return pickedObject;
	}
}

module.exports = Controller;
