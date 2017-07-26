(function exports(){
	

/**
	SGK
	@desc 최상위 사용자 접근 객체
 **/
var SGK = {
		version: "1.0.0",
		author: "sehyunict",
		lisence: "ISC",
		description: "2D graphic solution"
};


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


/**
	SGK.Rect
	@desc 사각형
 **/
SGK.Rect = function SGKRect( userId, x, y, option ){
	
	var defaultOption = {
			"width": 10,
			"height": 10
		};
	option = option==null?defaultOption:option;
	
	SGK.Object.apply( this, arguments );
	
	this["width"] = option["width"]==null?
			defaultOption["width"]:option["width"];
	this["height"] = option["height"]==null?
			defaultOption["height"]:option["height"];
			
}
SGK.Rect.prototype.__proto__ = SGK.Object.prototype;
SGK.Rect.prototype.draw = function draw( context ){
	SGK.Object.prototype.draw.call( this, context, function( ctx ){
		var halfW = this.width / 2;
		var halfH = this.height / 2;
		ctx.beginPath();
			ctx.moveTo( this.x - halfW, this.y - halfH );
			ctx.lineTo( this.x + halfW, this.y - halfH );
			ctx.lineTo( this.x + halfW, this.y + halfH );
			ctx.lineTo( this.x - halfW, this.y + halfH );
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	} );
}
this.SGK = SGK;


})();