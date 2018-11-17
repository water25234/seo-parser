const defaultRules = require('../rules/defined-rules');

class BaseParser {
	constructor(path, options) {
		this.path = path;
		this.rules = [];
		this.options = options;
		this.result = 'Success';
	}

	getRules() {
		if (this.options) {
			if (!Array.isArray(this.options)) {
				throw new ConfigError('Not Array.');
			} else {
				this.rules = this.options;
			}
		} else {
			this.rules = defaultRules;
		}
	}

	getValidFormat() {
		this.resultValidFormat = true;

		for (const key in this.rules) {
			const rule = this.rules[key];
			if (!('scope' in rule)) {
				this.result += `The index ` + key + ` and scope `;
				return this.resultValidFormat = false;
			}

			if (!('tag' in rule)) {
				this.result += `The index ` + key + ` and tag `;
				return this.resultValidFormat = false;
			}

			if (!('attrs' in rule)) {
				this.result += `The index ` + key + ` and attrs `;
				return this.resultValidFormat = false;
			}

			if (!('condition' in rule)) {
				this.result += `The index ` + key + ` and condition `;
				return this.resultValidFormat = false;
			}
		}
	}

	getFilePath() {
		if(!this.path) {
			this.result = 'not path';
		}
	}
}

exports = module.exports = BaseParser;