# README.md

## Usage
```sh
npm install -i soe-jusin
```

### package
```package.json
  "dependencies": {
    "seo-justin": "^1.0.2"
  }
```

### code
```js
    const seoParser = require('seo-justin');
    const params = {
        path: './',
        option: [{
                scope: '',
                tag: '',
                attrs: {
                    alt: ''
                },
                condition: {
                   noun: '',
                   symbol: '',
                   num: '',
                }
            }],
    };
    seoParser.parser(params);
```