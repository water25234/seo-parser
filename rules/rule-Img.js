class ruleImg {

	constructor(params) {
		this.$ = params._$;
		this.rule = params.rule;
	}

	process() {
		let imgAlt = 0;
		this.$('img').each((index, element) => {
			if(this.rule.condition.noun == 'without') {
				imgAlt += element.attribs.alt === undefined ? 1 : 0;
			} else if(this.rule.condition.noun == 'with') {
				imgAlt += element.attribs.alt === undefined ? 0 : 1;
			}
		});
		return `There are ` + imgAlt + ` <img> tag ` + this.rule.condition.noun + ` alt attribute\n`;
	}
}

exports = module.exports = ruleImg;
