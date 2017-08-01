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

Add `study-es6` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "study-es6"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "study-es6/rule-name": 2
    }
}
```

## Supported Rules

1. `arrow-function`
2. `let-declaration`
3. `object-shorthand`
4. `spread-operator`





