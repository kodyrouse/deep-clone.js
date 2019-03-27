# deep-clone.js Overview
Short and simple object / array deep clone while keeping functionality (compared to losing functionality with ```JSON.parse(JSON.stringify(testObject))```

# Side Note
The below usage relies on [Webpack](https://webpack.js.org) for the import (You don't have to use import like in the example below, just add deep-clone.min.js to your index.html if you prefer that instead). If you are not using Webpack, please ensure you are using [Babel.io](https://babeljs.io) to have full support in all browser versions!

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
