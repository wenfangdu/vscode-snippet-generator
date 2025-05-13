# Changelog for Snippet Generator

## [0.3.9]

1. Added a configuration option ( `doNotEscapeSpecialVariables` ) that will not escape special variables when they correspond to [special snippet syntax constructs](https://code.visualstudio.com/docs/editing/userdefinedsnippets#_snippet-syntax). The default is `true` and this behavior is identical to how the plugin has always functioned.
2. This includes text that starts with a dollar sign and follows the format of `$name`, `${name:default}`, or `$TM_*`. Any text that follows this naming pattern will not be escaped.
3. If `doNotEscapeSpecialVariables` is set to `false`, then all instances of the dollar sign will be escaped with double backslashes.
