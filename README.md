# deep-clone.js
Short and simple object / array deep clone while keeping functionality (compared to losing functionality with ```JSON.parse(JSON.stringify(testObject))```

# Use
Pass in an object or array to ```DeepClone.clone(object)``` like so:

```
var testObject = {
 name: "Bob Barker",
 favoriteFoods: ["Pizza", "Brownies"],
  accessoryColors: {
  shoes: "red",
 },
 favoritePeople: [
  {
	 name: "Mom",
	 favoriteFoods: ["Pasta", "Cookies"],
	 accessoryColors: {
	  shoes: "white",
	 }
  }
 ]
}

const newObject = DeepClone.clone(object);

```


