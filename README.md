# eslint-plugin-study-es6

show es6 syntax recommends

If you think this plugin help you, please star it on [GitHub](https://github.com/Earthsplitter/eslint-plugin-study-es6). Thanks ^_^

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

## Editors

**For VSCode users**: 

You can install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode.

1. Open Extensions tab and search `ESLint`, install and reload window.
2. After setting up (see Usage following), you will see messages in the problem panel in VSCode.

**For Sublime Text users**:

You can install [Sublime​Linter](https://packagecontrol.io/packages/SublimeLinter) and [Sublime​Linter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)

1. Open “Command Pallet” Ctrl + Shift + p (Cmd + Shift + p on OSX)
2. Select “Package Control: Install Package”
3. Select these two package
4. After setting up (see usage following), the warning message will show at the left of line number

## Usage

Now, you may need to set up your ESLint configuration. If you don't have an config file. create `.eslintrc.json` in your project directory(same as `package.json` above). And copy:
```json
{
    "plugins": ["study-es6"],
    "rules": {
        "study-es6/spread-operator": "warn",
        "study-es6/arrow-function": "warn",
        "study-es6/object-shorthand": "warn",
        "study-es6/let-declaration": "warn",
        "study-es6/template-string": "warn",
        "study-es6/default-param": "warn"
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
6. `default-param`




