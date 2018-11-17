class ruleH1 {
	constructor(params) {
		this.$ = params._$;
		this.rule = params.rule;
	}

	process() {
		var result = '';
		const num = this.rule.condition.num;
		const symbol = this.rule.condition.symbol;
		var defaultNum = num !== undefined ? (defaultNum = num) : 1;
		let h1Length = this.$('h1').get().length;

		if (symbol == '>') {
		      if (h1Length > defaultNum) {
		      	result += `This HTML have more than ` + defaultNum + ` <h1> tag\n`;
		      } else {
		      	result += `This HTML dosen't have more than ` + defaultNum + ` <h1> tag\n`;
		      }
		} else if (symbol == '<') {
		      if (h1Length < defaultNum) {
		       	result += `This HTML have less than ` + defaultNum + ` <h1> tag\n`;
		      } else {
		        	result += `This HTML dosen't have less than ` + defaultNum + ` <h1> tag\n`;
		      }
		} else if (symbol == '=') {
		      if (h1Length = defaultNum) {
		        	result += `This HTML have equal ` + defaultNum + ` <h1> tag\n`;
		      } else {
		        	result += `This HTML dosen't have equal ` + defaultNum + ` <h1> tag\n`;
		      }
		}
		return result;
	}
}

exports = module.exports = ruleH1;
