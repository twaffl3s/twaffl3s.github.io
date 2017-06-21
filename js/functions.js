function onScroll(elm, styleAttr, maxAttr){
	if(Number(elm.style.styleAttr.replace('px','')) < maxAttr){
		elm.style.styleAttr = (5 + Number(elm.style.styleAttr.replace('px','')))+'px';
		setTimeout(onScroll(elm, styleAttr, maxAttr), 25);
	}
}
window.addEventListener('scroll', function(){
	if(window.pageYOffset >= Number(getComputedStyle(document.querySelector('nav')).height.replace('px','')) - (Number(getComputedStyle(document.querySelector('nav ul')).height.replace('px','')) + Number(getComputedStyle(document.querySelector('nav')).paddingTop.replace('px',''))+ Number(getComputedStyle(document.querySelector('nav')).paddingBottom.replace('px','')))){
		document.body.className = 'scrolling';
	} else {
		document.body.className = '';
	}
});
window.onload = function(){
  $('.tooltip').gifify();
}
