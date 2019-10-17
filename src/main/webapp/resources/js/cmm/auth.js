var auth = auth||{};
auth=(()=>{
	const WHEN_ERR ='호출 jsp 파일 못찾음 auth';
	let _,js;
	let init =()=>{
		_=$.ctx();
		js=$.js();
	}
	let onCreate =()=>{
		init();
		$('#a_go_join').click(()=>{
			alert('회원가입클릭');
		});
	}
	return {onCreate : onCreate}
})();