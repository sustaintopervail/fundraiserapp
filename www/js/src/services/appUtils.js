starter.factory('apputils', [ 'config', 'utils', function(config, utils) {

	var number_is_invalid = function(number) {
		return (number == "" || !(utils.is_number(number)) || number.toString().length != 6)
	};

	return {
		number_is_invalid : number_is_invalid
	};

} ]);