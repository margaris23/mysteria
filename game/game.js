/** @constant {enum} */
var Dragon = Object.freeze({
    RED: 'red',
    YELLOW: 'yellow',
    GREEN: 'green',
    BLUE: 'blue'
});
exports.Dragon = Dragon;

/** @constant {enum} */
var Color = Object.freeze({
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
    YELLOW: 'yellow',
    PURPLE: 'purple',
    ORANGE: 'orange'
});
exports.Color = Color;

/** @constant {enum} */
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

/** @namespace */
var Engine = (function () {
  'use strict';

    /**
     * @class
     * @memberof Engine
     * @property {function} getTitle - Get title of the case.
     * @property {function} getDescription - Get description of the case.
     * @property {function|param:place} getWitness - Get witness of a specific place.
     * @property {function} getSolution - Get solution of the case.
     */
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

    /** @memberof Engine */
    var Witness = {
        id: null,
        number: -1,
        place: null,
        text: ''
    };

    /** @memberof Engine */
    var Detective = {
        name: '',
        color: null,
        notebook: null
    };

    /** @memberof Engine */
    var Suspect = {
        name: null,
        wearsHat: function () {},
        hasMoustache: function () {},
        wearsGlasses: function () {},
        isBold: function () {},
        hasScar: function () {}
    };

    /**
     * @inner
     * @memberof Engine
     */
    var _cases = [];

    return {
        cases: function () {
            return _cases;
        },
        createCase: function (){}
    };

})();
exports.Engine = Engine;
