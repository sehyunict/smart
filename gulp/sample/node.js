// Import
require('../dist/SGK.js');

var object = new SGK.Object('obj_0', 5, 5);
var rect = new SGK.Rect("rect_0", 500, 500, {
	width: 200,
	height: 200,
	"background-color": "#ff0000",
	"border-color": "#00ff00",
	"border-width": 20
});

console.log( object.toString() );
console.log( rect.toString() );