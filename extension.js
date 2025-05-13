'use strict'

const { commands, window, workspace, env } = require('vscode')

exports.activate = ({ subscriptions }) => {
  let doNotEscapeSpecialVariables = workspace
    .getConfiguration('snippet-generator')
    .get('doNotEscapeSpecialVariables')

  const respondToConfigChange = workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('snippet-generator')) {
      doNotEscapeSpecialVariables = workspace
        .getConfiguration('snippet-generator')
        .get('doNotEscapeSpecialVariables')
    }
  })

  const generateSnippetCommand = commands.registerCommand(
    'snippet-generator.generate-snippet',
    async () => {
      const editor = window.activeTextEditor

      if (!editor) {
        window.showErrorMessage('Error: No text editor is active')
        return
      }

      const selection = editor.document.getText(editor.selection)

      if (!selection.length) {
        window.showErrorMessage('Error: No text is selected')
        return
      }

      const name = await window.showInputBox({
        placeHolder: 'Please enter snippet name (required)',
        validateInput: input => (input ? '' : 'Snippet Name is required'),
      })

      if (name === undefined) {
        return
      }

      const scope = await window.showInputBox({
        placeHolder: 'Please enter a scope (optional)',
      })

      if (scope === undefined) {
        return
      }

      const prefix = await window.showInputBox({
        placeHolder: 'Please enter a prefix for intellisense (required)',
        validateInput: input => (input ? '' : 'Snippet Prefix is required'),
      })

      if (prefix === undefined) {
        return
      }

      const description = await window.showInputBox({
        placeHolder: 'Please enter a description (optional)',
      })

      if (description === undefined) {
        return
      }

      const tabSize = workspace.getConfiguration('editor').get('tabSize')

      const spaces = new RegExp(` {${tabSize}}`, 'g')

      const regex = doNotEscapeSpecialVariables ? /\$(?![\d{]|TM_)/g : /\$/g

      const snippetObj = {
        [name]: {
          ...(scope && { scope }),
          prefix,
          body: selection
            .split(/\r?\n/)
            .map(line => line.replace(regex, '\\$').replace(spaces, '\t')),
          ...(description && { description }),
        },
      }

      const snippetJSON = JSON.stringify(snippetObj, null, tabSize)
        .split('\n')
        .slice(1, -1)
        .join('\n')

      env.clipboard.writeText(`${snippetJSON},`)

      window.showInformationMessage(
        'Snippet has been copied into the clipboard, please use the command "Snippets: Configure Snippets" to paste it.',
      )
    },
  )

  subscriptions.push(generateSnippetCommand)
  subscriptions.push(respondToConfigChange)
}
