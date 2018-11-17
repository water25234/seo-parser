class ruleMeta {
	constructor(params) {
		this.$ = params._$;
		this.rule = params.rule;
	}

	process() {
		var result = '';
		if (this.rule.tag == 'title') {
			if (this.$('title').get().length == 0) {
				result = 'This HTML without <title> tag\n';
			}
		}
	
		if (this.rule.tag == 'meta') {
			var name = this.rule.attrs.name;
			if(name) {

				var noun = this.rule.condition.noun;
				var length = this.$(`head meta[name="` + name + `"]`).get().length;

				if((length > 0 && noun == 'with') || (length === 0 && noun == 'without')) {
					result = 'This HTML ' + noun + ' <meta name="' + name + '" … /> tag\n';
				} 
			}
		}
		return result;
	}
}

exports = module.exports = ruleMeta;
