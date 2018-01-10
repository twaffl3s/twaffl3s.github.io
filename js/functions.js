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
	const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  if (!isLocalhost) {
    // Is not local host. Just register service worker
    if(navigator.onLine){
      localStorage.clear();
			navigator.serviceWorker
				.register('/sw.js')
				.then(function () {
					console.log("This site is now available offline.");
				}, function (err) {
					console.error(err);
				});
    }
  }
}