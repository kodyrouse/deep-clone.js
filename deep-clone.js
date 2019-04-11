class _DeepClone {

	clone = input => {

		// Prevents invalid input
		if (this._validateNull(input) || !this._validateInputForDeepClone(input)) {
			console.warn(`Deep Clone input invalid : ${input} is not of type object or array`);
			return;
		}
 
		// Starts deep clone of array || object depending on input
		// I use _validateArray first because typeof "object" passes true for an array
		return (this._validateArray(input)) ? this._deepCloneArray(input) : this._deepCloneObject(input);
	}

	_deepCloneObject = object => {

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

	_deepCloneArray = array => {

		const newArray = [];

		array.forEach(value => {
			const newValue = this._copyValue(value);
			newArray.push(newValue);
		});

		return newArray;
	}

	_copyValue = priorVal => {

		// I use _validateNull && _validateArray first because typeof "object" passes true for an array
		return (this._validateNull(priorVal)) ? priorVal
			:	(this._validateArray(priorVal)) ? this._deepCloneArray(priorVal)
			: (this._validateObject(priorVal)) ? this._deepCloneObject(priorVal)
			: priorVal;
	}

	_validateNull = input => input === null;

	_validateObject = input => typeof input === "object";

	_validateArray = input => Array.isArray(input);

	_validateInputForDeepClone = (input) => {
		return this._validateObject(input) || this._validateArray(input);
	}
}

// Creates an instance of deep clone to reduce memory footprint
export default new _DeepClone();
