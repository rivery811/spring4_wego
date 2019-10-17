"use strict"
var app= app||{};
app= (()=>{
const WHEN_ERR ='호출 jsp 파일 못찾음app';
	let _,js,authjs;
	let run =x=>
		$.getScript(x+'/resources/js/cmm/router.js',
				()=>{$.extend(new Session(x));
				onCreate()
		})
	let init =()=>{
			_=$.ctx();
			js=$.js();
			authjs = js+'/cmm/auth.js'
			
	}
	let onCreate =()=>{
		init()//얘 왜 있어야 하는지 질문하기 얘가 왜 지역변수를 갖다 써야 하며 온크리에이트는 얘를 왜 갖고와야 하는가 
		$.when(
			$.getScript(authjs)
				
		)
		.done(()=>{auth.onCreate()}
			
		)
		.fail(()=>{alert(WHEN_ERR)}
			
		)
	}
		 return{run : run}
})();

