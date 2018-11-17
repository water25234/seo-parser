class ruleA {

	constructor(params) {
		this.$ = params._$;
		this.rule = params.rule;
	}

	process() {
		let rel = 0;
		this.$('a').each((index, element) => {
			if(this.rule.condition.noun == 'without') {
				rel += element.attribs.rel === undefined ? 1 : 0;
			} else if(this.rule.condition.noun == 'with') {
				rel += element.attribs.rel === undefined ? 0 : 1;
			}
		});
		return `There are ` + rel + ` <a> tag ` + this.rule.condition.noun + ` rel attribute\n`;
	}
}

exports = module.exports = ruleA;