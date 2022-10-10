function sun(arg1) {
	return function(arg2) {
		return arg1 + arg2;
	};
}

console.log(sum(1)(2));