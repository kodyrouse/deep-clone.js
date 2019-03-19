function deepCloneObject(inputObject) {

  	// Prevents invalid input
	if (typeof inputObject !== "object") return;

	var newObject = {};

	for (key in inputObject) {

		if (!inputObject.hasOwnProperty(key)) continue;

		const priorKey = key;
    
    		// Either recursively deep clones nested object or copies object value for new key value
		const newObjectVal = (typeof inputObject[priorKey] == "object") ? deepCloneObject(inputObject[priorKey]) : inputObject[priorKey];
    
    		// Sets new value
		newObject[priorKey] = newObjectVal;
	}

	return newObject;
}
