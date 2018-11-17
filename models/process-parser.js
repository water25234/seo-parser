const fs = require('fs');
const cheerio = require('cheerio');
const ruleProcessParser = require('../rules/rule-process-parser');

class ProcessParser {

	constructor(path, rules) {
		this.result = '';
		this.rules = rules;
		this.$ = cheerio.load(fs.readFileSync(path));
	}

	process() {
		this.rules.forEach((rule) => {
			const ruleProcess = new ruleProcessParser(rule, this.$);
			this.result += ruleProcess.runRuleProcess();
  		});

  		return this.result;
	}
}

exports = module.exports = ProcessParser;