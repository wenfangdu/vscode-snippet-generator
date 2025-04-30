# Change Log for Snippet Generator

## [ v0.3.9 ]

1. Added a configuration option ( `doNotEscapeSpecialVariables` ) that will not escape special variables when they correspond to [special snippet syntax constructs](https://code.visualstudio.com/docs/editing/userdefinedsnippets#_snippet-syntax). The default is `TRUE` and this behavior is identical to how the plugin has always functioned.
2. This includes text that starts with a dollar sign and follows the format of `$name`, `${name:default}`, or `$TM_SELECTED_TEXT`. Any text that follows this naming pattern will not be escaped.
3. The only exception is that this setting defaults to `FALSE` when the active editor language is **PowerShell**. This is due to the inherent nature of PowerShell variable syntax as they always start with a dollar sign.
4. If you need to use snippet Tabstops, Placeholders, or Variables in a PowerShell snippet, you will have to add them manually in your snippet files, or change the `doNotEscapeSpecialVariables` setting to `TRUE` in your user or workspace configuration.
5. Take caution when generating a Powershell snippets with `doNotEscapeSpecialVariables` set to true. If you use variables that match the format of any special snippet syntax patterns, they will not be escaped and your snippet may break.
