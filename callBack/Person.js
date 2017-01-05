(function(){
	
	// 콜백을 저장해두는 변수가 필요합니다.
	var userBeforeCallBack 	= null,
		userAfterCallBack 	= null;
	
	
	
	window.Person = {

		// 음식을 먹기 전에 수행할 콜백함수를 변수에 저장하는 메서드 입니다.
		eatBefore: function( beforeCallBack ){
			userBeforeCallBack = beforeCallBack;
		},
			
		// 음식을 먹는 메서드입니다.
		eat: function( food ){
			
			// 먹기 전, 콜백함수가 등록되어 있다면 콜백함수를 실행합니다.
			if( typeof userBeforeCallBack === "function" ){
				userBeforeCallBack( food );
			}
			
			// 음식을 먹습니다.
			console.log( food + " 냠냠" );
			
			// 먹은 후, 콜백함수가 등록되어 있다면 콜백함수를 실행합니다.
			if( typeof userAfterCallBack === "function" ){
				userAfterCallBack( food );
			}
		},
	
		// 음식을 먹은 후에 수행할 콜백함수를 변수에 저장하는 메서드 입니다.
		eatAfter: function( afterCallBack ){
			userAfterCallBack = afterCallBack;
		},

	};
	
})();