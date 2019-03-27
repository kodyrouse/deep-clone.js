class DeepClone {

	clone = (input) => {

		// Prevents invalid input
		if (!this._validateInputForDeepClone(input)) {
			console.warn(`Deep Clone input invalid : ${input} is not of type object`);
			return;
		}
 
		// Starts deep clone of object || array depending on input
		// I use _validateArray first because typeof "object" passes true for an array
		return (this._validateArray(input)) ? this._deepCloneArray(input) : this._deepCloneObject(input);
	}

	_deepCloneObject = (object) => {

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

	_deepCloneArray = (array) => {

		const newArray = [];

		array.forEach(value => {
			const newValue = this._copyValue(value, true);
			newArray.push(newValue);
		});

		return newArray;
	}

	_copyValue = (priorVal) => {

		// I use _validateArray first because typeof "object" passes true for an array
		return (this._validateArray(priorVal)) ? this._deepCloneArray(priorVal)
			: (this._validateObject(priorVal)) ? this._deepCloneObject(priorVal)
			: priorVal;
	}

	_validateInputForDeepClone = (input) => {
		return this._validateObject(input) || this._validateArray(input);
	}

	_validateObject = (input) => {
		return typeof input === "object";
	}

	_validateArray = (input) => {
		return Array.isArray(input);
	}
}

// Exports instance of DeepClone to reduce memory footprint
export default new DeepClone();
