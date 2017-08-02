# eslint-plugin-study-es6

show es6 syntax recommends

## Installation

Make sure you have initialize your project, i.e. , have a `package.json` file. Otherwise:
```
$ npm init
```

You'll first need to install [ESLint](http://eslint.org) in your workspace:

```
$ npm i eslint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-study-es6` globally.

Next, install `eslint-plugin-study-es6`:

```
$ npm install eslint-plugin-study-es6 --save-dev
```

## Usage

**For VSCode users**: 
```
you can install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode.

Open Extensions tab and search `ESLint`, install and reload window.
```

Now, you may need to set up your ESLint configuration. If you don't have an config file. create `.eslintrc.json` in your project directory(same as `package.json` above). And copy:
```json
{
    "plugins": ["study-es6"],
    "rules": {
        "study-es6/spread-operator": "warn",
        "study-es6/arrow-function": "warn",
        "study-es6/object-shorthand": "warn",
        "study-es6/let-declaration": "warn",
        "study-es6/template-string": "warn"
    }
}
```

After configuring your settings. Run ESLint:
```
$ ./node_modules/.bin/eslint test.js
```

## Current Supported Rules

1. `arrow-function`
2. `let-declaration`
3. `object-shorthand`
4. `spread-operator`
5. `template-string`




