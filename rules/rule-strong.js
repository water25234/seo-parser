class ruleStrong {
	constructor(params) {
		this.$ = params._$;
		this.rule = params.rule;
	}

	process() {
		var result = '';
		const num = this.rule.condition.num;
		const symbol = this.rule.condition.symbol;
		var defaultNum = num !== undefined ? (defaultNum = num) : 15;
		let strongLength = this.$('strong').get().length;
		if (symbol == '>') {
			if (strongLength > defaultNum) {
			    result = `This HTML have more than ` + defaultNum + ` <strong> tag\n`;
			} else {
			    result = `This HTML dosen't have more than ` + defaultNum + ` <strong> tag\n`;
			}
		} else if (symbol == '<') {
			if (strongLength < defaultNum) {
			    result = `This HTML have less than ` + defaultNum + ` <strong> tag\n`;
			} else {
			    result = `This HTML dosen't have less than ` + defaultNum + ` <strong> tag\n`;
			}
		} else if (symbol == '=') {
			if (strongLength = defaultNum) {
			    result = `This HTML have equal ` + defaultNum + ` <strong> tag\n`;
			} else {
			    result = `This HTML dosen't have equal ` + defaultNum + ` <strong> tag\n`;
			}
		}
		return result;
	}
}

exports = module.exports = ruleStrong;
