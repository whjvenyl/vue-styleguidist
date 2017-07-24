/**
 * Ejemplo de Componente spinner
 */
const TEMPLATE = require('./bpi-spinner.html');

Vue.component('bpi-spinner', {
	template: TEMPLATE,
	props: {
		/**
		 * Esto es un loading, de referencia
		 */
		loading: {
			default: false,
		},
	},
});
