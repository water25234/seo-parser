const BaseParser = require('./base-parser');
const ProcessParser = require('./process-parser');

class SeoParser extends BaseParser  {

	constructor(path, options) {
		super(path, options);
	}

	seoRulerProcess() {
		this.getRules();
		this.getFilePath();
		this.getValidFormat();

		if(!this.path) {
			return this;
		}

		if (!this.resultValidFormat) {
			this.result += 'is fail';
			return this;
		}

		this.result = new ProcessParser(this.path, this.rules).process();
		return this;
	}

	consoleLog() {
		console.log(this.result);
		return this;
	}
}

exports = module.exports = SeoParser;