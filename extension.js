'use strict'

const { commands, window, workspace, env } = require('vscode')

exports.activate = ({ subscriptions }) => {
  const disposable = commands.registerCommand('snippet-generator.generate-snippet', async () => {
    const editor = window.activeTextEditor

    if (!editor) {
      return window.showErrorMessage('No active text editor')
    }

    const selection = editor.document.getText(editor.selection)

    if (!selection.length) {
      return window.showErrorMessage('No selected text')
    }

    const name = await window.showInputBox({
      placeHolder: 'Please enter name (required)',
      validateInput: input => (input ? '' : 'Name is required'),
    })

    if (name === undefined) {
      return
    }

    const scope = await window.showInputBox({
      placeHolder: 'Please enter scope (optional)',
    })

    if (scope === undefined) {
      return
    }

    const prefix = await window.showInputBox({
      placeHolder: 'Please enter prefix (required)',
      validateInput: input => (input ? '' : 'Prefix is required'),
    })

    if (prefix === undefined) {
      return
    }

    const description = await window.showInputBox({
      placeHolder: 'Please enter description (optional)',
    })

    if (description === undefined) {
      return
    }

    const tabSize = workspace.getConfiguration('editor').get('tabSize')

    const spaces = new RegExp(` {${tabSize}}`, 'g')

    const snippetObj = {
      [name]: {
        ...(scope && { scope }),
        prefix,
        body: selection
          .split(/\r?\n/)
          .map(line => line.replace(/\$(?![\d{])/g, '\\$').replace(spaces, '\t')),
        ...(description && { description }),
      },
    }

    const snippetJSON = JSON.stringify(snippetObj, null, tabSize)
      .split('\n')
      .slice(1, -1)
      .join('\n')

    env.clipboard.writeText(snippetJSON)

    window.showInformationMessage('Snippet has been copied into the clipboard')
  })

  subscriptions.push(disposable)
}
