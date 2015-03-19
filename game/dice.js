var DIE = (function () {
    var _die;

    return {
        getInstance: function () {
            if (!_die) {
                _die = {
                    roll: function (a, b) {
                        return Math.round(Math.random() * (b - a) + a);
                    }
                };
            }
            return _die;
        }
    };
})();

exports.DIE = DIE;
