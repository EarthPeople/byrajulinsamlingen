
var Christmas = function() {

	/**
	 * Constructor
	 *
	 * @method initialize
	 * @return void
	 */
	function init() {
		shuffle($('.image'));
		bindEvents();
	}

	/**
	 * Binds user-events
	 *
	 * @method initialize
	 * @param {object} options - options block
	 * @return void
	 */
	function bindEvents() {
		$('.organisation').find('img').click(function(e) {
			var link = $(this).siblings().attr('href');
			window.location.href = link;
		});
	}

	/**
	 * Shuffles elements
	 *
	 * @method shuffle
	 * @param {node} elements - element nodes
	 * @return {node} elements
	 */
	function shuffle(elements) {
		
		var i, j;
		
		for (i = 0; i < elements.length; i++) {
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