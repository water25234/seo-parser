const ruleA = require('./rule-a');
const ruleH1 = require('./rule-h1');
const ruleImg = require('./rule-Img');
const ruleMeta = require('./rule-Meta');
const ruleStrong = require('./rule-strong');

class RuleProcessParser {

	constructor(rule, _$) {
		this.result = '';
		this.params = {
			_$: _$,
			rule: rule
		};
	}

	runRuleProcess() {
		const scope = this.params.rule.scope;
		if (scope) {
			this.result = new ruleMeta(this.params);
		} else {
			switch (this.params.rule.tag) {
				case 'img':
					this.result = new ruleImg(this.params);
					break;
				case 'a':
					this.result = new ruleA(this.params);
					break;
				case 'strong':
					this.result = new ruleStrong(this.params);
					break;
				case 'H1':
					this.result = new ruleH1(this.params);
					break;
			}
		}
		return this.result.process();
	}
}

exports = module.exports = RuleProcessParser;