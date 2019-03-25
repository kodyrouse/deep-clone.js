class DeepClone {

	static clone(input) {

		// Prevents invalid input
		if (!this._validateInputForDeepClone(input)) {
			console.warn(`Deep Clone input invalid : ${input} is not of type object`);
			return;
		}
 
		// Starts deep clone of object || array depending on input
		// I use _validateArray first because typeof "object" passes true for an array
		return (this._validateArray(input)) ? this._deepCloneArray(input) : this._deepCloneObject(input);
	}

	static _deepCloneObject(object) {

		const newObject = {};
		const objectKeys = Object.keys(object);

		objectKeys.forEach(key => {

			const priorVal = object[key];

			// Either recursively deep clones nested object / array or copies object value for new key value
			const newValue = this._copyValue(priorVal);
			newObject[key] = newValue;
		});

		return newObject;
	}

	static _deepCloneArray(array) {

		const newArray = [];

		array.forEach(value => {
			const newValue = this._copyValue(value, true);
			newArray.push(newValue);
		});

		return newArray;
	}

	static _copyValue(priorVal) {

		// I use _validateArray first because typeof "object" passes true for an array
		return (this._validateArray(priorVal)) ? this._deepCloneArray(priorVal)
			: (this._validateObject(priorVal)) ? this._deepCloneObject(priorVal)
			: priorVal;
	}

	static _validateInputForDeepClone(input) {
		return this._validateObject(input) || this._validateArray(input);
	}

	static _validateObject(input) {
		return typeof input === "object";
	}

	static _validateArray(input) {
		return Array.isArray(input);
	}
}
