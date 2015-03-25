var Dragon = Object.freeze({
	RED: 'red',
	YELLOW: 'yellow',
	GREEN: 'green',
	BLUE: 'blue'
});
exports.Dragon = Dragon;

var Color = Object.freeze({
	RED: 'red',
	GREEN: 'green',
	BLUE: 'blue',
	YELLOW: 'yellow',
	PURPLE: 'purple',
	ORANGE: 'orange'
});
exports.Color = Color;

var Place = Object.freeze({
	RESTAURANT: 'restaurant',
	LAUNDRY: 'laundry',
	HAIR_BEAUTY_SALON: 'hair_beauty_salon',
	PALACE: 'palace',
	JEWELERY: 'jewelery',
	PORT: 'port',
	MARKET: 'market',
	TEMPLE: 'temple'
});
exports.Place = Place;

var Engine = (function () {
  'use strict';

	var Case = function () {
		var _title,
			_description,
			_witnesses = {},
			_solution;

		return {
			getTitle: function () {
				return _title;
			},
			getDescription: function () {
				return _description;
			},
			getWitness: function (place) {
				return null;
			},
			getSolution: function () {
				return _solution;
			}
		};
	};

	var Witness = {
		id: null,
		number: -1,
		place: null,
		text: ''
	};

	var Detective = {
		name: '',
		color: null,
		notebook: null
	};

	var Suspect = {
		name: null,
		wearsHat: function () {},
		hasMoustache: function () {},
		wearsGlasses: function () {},
		isBold: function () {},
		hasScar: function () {}
	};

	var _cases = [];

	return {
		cases: function () {
			return _cases;
		},
		createCase: function (){}
	};

})();
exports.Engine = Engine;
