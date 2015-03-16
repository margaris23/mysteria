function DIE() {
	this.roll = function (a, b) {
		return b - a;
	};
}
var DIE = new DIE();

DIE.prototype = function () {
	return DIE;
};

exports.DIE = DIE;
