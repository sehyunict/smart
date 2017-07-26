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