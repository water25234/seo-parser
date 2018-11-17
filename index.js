const seoParser = require('./models/seo-parser');

function parser(params = {}) {
	const filePath = params.file ? params.fil : './template/template.html';
	const options = params.options;

	const parser2 = new (seoParser)(filePath, options);
	
	parser2
		.seoRulerProcess()
		.consoleLog();
}

exports = module.exports = {
	parser: parser
};