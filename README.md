# deep-clone.js Overview
Fast and simple object/array deep clone while keeping functionality (compared to losing functionality with ```JSON.parse(JSON.stringify(testObject))```. 

- ~3.5X faster compared to ```JSON.parse(JSON.stringify(testObject))``` (Safari)
- ~4.5X faster compared to ```JSON.parse(JSON.stringify(testObject))``` (Chrome)

# Side Note
DeepClone.js relies on ES6 syntax. Please ensure you are using either [Webpack](https://webpack.js.org) or [Babel.io](https://babeljs.io) to have full support in all browser versions!

# Use
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
	 name: "Billy Madison",
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
