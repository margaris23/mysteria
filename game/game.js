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

	var Case = {
		title: '',
		description: '',
		witnesses: [],
		solution: {},
		dragon: null
	};

	var Witness = {
		id: null,
		number: -1,
		place: null
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
