const { loadConfigFile } = require('rollup/loadConfigFile');
const path = require('node:path');
const rollup = require('rollup');

const bundle = async (src, dest, dev) => {
	// load the config file next to the current script;
	// the provided config object has the same effect as passing "--format es"
	// on the command line and will override the format of all outputs
	return loadConfigFile(path.resolve(__dirname, 'rollup.config.mjs'), {
		format: 'es'
	}).then(async ({ options, warnings }) => {
		// "warnings" wraps the default `onwarn` handler passed by the CLI.
		// This prints all warnings up to this point:
		console.log(`We currently have ${warnings.count} warnings`);

		// This prints all deferred warnings
		warnings.flush();

		// options is an array of "inputOptions" objects with an additional
		// "output" property that contains an array of "outputOptions".
		// The following will generate all outputs for all inputs, and write
		// them to disk the same way the CLI does it:
		const optionsObj = options[0];

		if (src && dest) {
			optionsObj.input = src;
			optionsObj.output[0].file = dest;
			optionsObj.output[0].format = 'iife';
		}
		if (dev) {
			console.log('options: ', optionsObj)
		}

		const bundle = await rollup.rollup(optionsObj);
		await Promise.all(optionsObj.output.map(bundle.write));

		if (dev) {
			console.log('watching...');
			// You can also pass this directly to "rollup.watch"
			rollup.watch(options);
		}
		return;
	});
}

bundle('templates/templateA/editor.js', 'templates/templateA/assets/js/editor.bundle.js')
bundle('templates/templateA/worker.js', 'templates/templateA/assets/js/worker.bundle.js')

module.exports = {
	bundle
}