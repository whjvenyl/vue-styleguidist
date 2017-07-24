'use strict';

/* eslint-disable no-console */
module.exports = function(source) {
	source = source.replace('Vue.component(', 'module.exports = [');
	let tempSource = source.split('').reverse().join('');
	tempSource = tempSource.replace(')', ']');
	source = tempSource.split('').reverse().join('');
	return source;
};
