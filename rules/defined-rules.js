const rules = [
    {
        scope: '',
        tag: 'img',
        attrs: {
            alt: ''
        },
        condition: {
           noun: 'without',
        }
    },
    {
        scope: '',
        tag: 'a',
        attrs: {
            rel: ''
        },
        condition: {
            noun: 'without',
        }
    },
    {
        scope: 'head',
        tag: 'title',
        attrs: {
        },
        condition: {
            noun: 'without',
        }
    },
    {
        scope: 'head',
        tag: 'meta',
        attrs: {
            name: 'descriptions'
        },
        condition: {
            noun: 'with',
        }
    }, 
    {
        scope: 'head',
        tag: 'meta',
        attrs: {
            name: 'descriptions'
        },
        condition: {
            noun: 'without',
        }
    }, 
    {
        scope: 'head',
        tag: 'meta',
        attrs: {
            name: 'keywords'
        },
        condition: {
            noun: 'without',
        }
    },
    {
        scope: '',
        tag: 'strong',
        attrs: {
        },
        condition: {
            symbol: '>' ,
            num: 15
        }
    },
    {
        scope: '',
        tag: 'H1',
        attrs: {
        },
        condition: {
            symbol: '>',
            num: 1
        }
    }
];

module.exports = rules;