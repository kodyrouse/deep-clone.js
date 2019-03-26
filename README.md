# deep-clone.js
Short and simple object / array deep clone while keeping functionality (compared to losing functionality with ```JSON.parse(JSON.stringify(testObject))```

# Use
This method uses [ES6 Syntax](http://es6-features.org/#Constants). Please ensure you are using [Babel.io](https://babeljs.io) to have full support in all browsers!

To deep clone an object or an array, pass it into to ```DeepClone.clone(object)``` like so:

```
var testObject = {
 name: "Bob Barker",
 favoriteFoods: ["Pizza", "Brownies"],
  accessoryColors: {
  shoes: "red",
 },
 favoritePeople: [
  {
	 name: "Billy Maddison",
	 favoriteFoods: ["Pasta", "Cookies"],
	 accessoryColors: {
	  shoes: "white",
	 }
  }
 ]
}

// Returns a new object clone
const newObject = DeepClone.clone(testObject);

```
