function onScroll(elm, styleAttr, maxAttr) {
	if (Number(elm.style.styleAttr.replace('px', '')) < maxAttr) {
		elm.style.styleAttr = (5 + Number(elm.style.styleAttr.replace('px', ''))) + 'px';
		setTimeout(onScroll(elm, styleAttr, maxAttr), 25);
	}
}
window.addEventListener('scroll', function () {
	if (window.pageYOffset >= Number(getComputedStyle(document.querySelector('nav')).height.replace('px', '')) - (Number(getComputedStyle(document.querySelector('nav ul')).height.replace('px', '')) + Number(getComputedStyle(document.querySelector('nav')).paddingTop.replace('px', '')) + Number(getComputedStyle(document.querySelector('nav')).paddingBottom.replace('px', '')))) {
		document.body.className = 'scrolling';
	} else {
		document.body.className = '';
	}
});
document.addEventListener('DOMContentLoaded', function (e) {
	var doc_body = e.srcElement.body.innerHTML;
	if (doc_body.match(/tooltip/gi)) {
		$('.tooltip').gifify();
	}
});

// registering service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function () { console.log("Service Worker Registered"); });
}