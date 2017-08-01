# eslint-plugin-study-es6

show es6 syntax recommends

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-study-es6`:

```
$ npm install eslint-plugin-study-es6 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-study-es6` globally.

## Usage

Now, you may need to set up your ESLint configuration. If you don't have an config file. create `.eslintrc.json` in your root directory. And copy:
```json
{
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": ["study-es6"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "study-es6/spread-operator": "warn",
        "study-es6/arrow-function": "warn",
        "study-es6/object-shorthand": "warn",
        "study-es6/let-declaration": "warn"
    }
}
```

After configuring your settings. Run ESLint:
```
$ ./node_modules/.bin/eslint test.js
```

## Supported Rules

1. `arrow-function`
2. `let-declaration`
3. `object-shorthand`
4. `spread-operator`





