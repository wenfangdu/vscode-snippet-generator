# Snippet Generator

[![Version](https://img.shields.io/visual-studio-marketplace/v/wenfangdu.snippet-generator?color=blue)](https://marketplace.visualstudio.com/items?itemName=wenfangdu.snippet-generator)
[![License](https://img.shields.io/github/license/wenfangdu/vscode-snippet-generator?color=brightgreen)](https://github.com/wenfangdu/vscode-snippet-generator/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blueviolet.svg)](https://github.com/wenfangdu/vscode-snippet-generator)
[![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dwenfangdu.snippet-generator)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dwenfangdu.snippet-generator)

> 📜 Generate snippets from code in VSCode

[💿 Install Via Marketplace](https://marketplace.visualstudio.com/items?itemName=wenfangdu.snippet-generator)

Command: `Generate Snippet`

![Demo](https://raw.githubusercontent.com/wenfangdu/vscode-snippet-generator/main/images/demo.gif)

## Getting Started

- Type the snippet code and then highlight it with your cursor.
- Open the command pallete (`cmd + shift + p`)
- Type `Generate Snippet` in the command palette
- Give it a name (this is the display name in the config)
- Enter an optional config scope
- Enter the prefix (type this to invoke the snippet)
- Enter an optional description
- On completion of the generation flow the snippet definition will be added to your clipboard
- Open the command palette again (`cmd + shift + p`)
- Type `Snippets: Configure User Snippets`
- Add the snippet definition to a definition file (this could be set to a language, global, or project based more on [snippet scopes]([https://marketplace.visualstudio.com/items?itemName=wenfangdu.snippet-generator](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets))).
- Use the new snippet by adding the prefix to a configured file.

## Inspired By

- [Johnson Chu's comment](https://github.com/johnsoncodehk/volar/issues/183#issuecomment-842804053)
- [snippet-generator.app](https://snippet-generator.app/)
- [VS Code Snippet Generator](https://marketplace.visualstudio.com/items?itemName=dkultasev.vs-code-snippet-generator)
