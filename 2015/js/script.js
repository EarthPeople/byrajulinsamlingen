
var Christmas = function() {

	function init() {
		shuffle($('.image'));
	}

	function shuffle(elements) {
		
		var j;
		
		for (var i = 0; i < elements.length; i++) {
			j = Math.floor(Math.random() * elements.length);
			$(elements[i]).before($(elements[j]));
		}
		return elements;
	}

	return {
		init: init
	};
};

var christmas = new Christmas();
christmas.init();