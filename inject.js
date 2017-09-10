(function() {
	function i(e) {
		for (var n = 0, e = e.children; n < e.length; n++) {
			if (t.indexOf(e[n].tagName.toLowerCase()) == -1)
				t.push(e[n].tagName.toLowerCase());
			if (e[n].childElementCount) i(e[n])
		}
	}
	var t = [];
	i(document.body);
	t.forEach(function(t) {
		var e = document.createElement("style");
		e.innerHTML = t + "{font-family:'Comic Sans MS'!important}", document.head.append(e)
	});
}())