const staticHtmlBundler = require("./bundler");

const args = process.argv.slice(2);
var config_data = require("./"+args[0]);

staticHtmlBundler.bundle({
	sourceFolder: config_data.sourceFolder,
	distFolder: config_data.distFolder,
	inputHtml: config_data.inputHtml,
	outputHtml: config_data.outputHtml,
	distCssFolder: config_data.cssFolder,
	distJsFolder: config_data.jsFolder,
	tags: config_data.tags
});