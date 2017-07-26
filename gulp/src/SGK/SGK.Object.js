/**
	SGK.Object
	@desc 공통객체
 **/
SGK.Object = function SGKObject( userId, x, y, option ){
	
	var defaultOption = {
			"background-color": "rgba(0,0,0,1)",
			"border-color": "rgba(0,0,0,1)",
			"border-width": 1
		};
	option = option==null?defaultOption:option;
	
	this.userId = userId;
	this.x = x;
	this.y = y;
	this["background-color"] = option["background-color"]==null?
			defaultOption["background-color"]:option["background-color"];
	this["border-color"] = option["border-color"]==null?
			defaultOption["border-color"]:option["border-color"];
	this["border-width"] = option["border-width"]==null?
			defaultOption["border-width"]:option["border-width"];
	
}
SGK.Object.prototype.toString = function toString(){
	return JSON.stringify( this );
}
SGK.Object.prototype.draw = function draw( context, drawFunc ){
	// needs proto-chain
	context.save();
	context.fillStyle = this["background-color"];
	context.strokeStyle = this["border-color"];
	context.lineWidth = this["border-width"];
	drawFunc.call( this, context );
	context.restore();
}

