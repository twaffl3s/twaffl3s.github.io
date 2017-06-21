function onScroll(elm, styleAttr, maxAttr){
	if(Number(elm.style.styleAttr.replace('px','')) < maxAttr){
		elm.style.styleAttr = (5 + Number(elm.style.styleAttr.replace('px','')))+'px';
		setTimeout(onScroll(elm, styleAttr, maxAttr), 25);
	}
}
window.addEventListener('scroll', function(){
	if(window.pageYOffset >= Number(getComputedStyle(document.getElementById('sidebar')).height.replace('px','')) - (Number(getComputedStyle(document.querySelector('#sidebar ul')).height.replace('px','')) + Number(getComputedStyle(document.getElementById('sidebar')).paddingTop.replace('px',''))+ Number(getComputedStyle(document.getElementById('sidebar')).paddingBottom.replace('px','')))){
		document.getElementById('container').className = 'scrolling';
	} else {
		document.getElementById('container').className = '';
	}
});
window.onload = function(){
  $('.tooltip').gifify();
}
