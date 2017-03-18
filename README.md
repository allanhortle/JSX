JSX-SublimeText
===============

Language Definitions for JSX files.




Emmet Support
-------------
Emmet's default is to not support JS files. So you will need to add a keyboard shortcut to tab complete in JSX files.

open up `Preferences > Key Bindings - user` and add this entry:


    {
        "keys": ["tab"], "command": "expand_abbreviation_by_tab", "context": [
            {
                "operand": "source.js.jsx", 
                "operator": "equal", 
                "match_all": true, 
                "key": "selector"
            },
            {   
                "key": "selection_empty", 
                "operator": "equal", 
                "operand": true,
                "match_all": true 
            }
        ]
    },
    { "keys": ["tab"], "command": "next_field", "context":
        [
            { "key": "has_next_field", "operator": "equal", "operand": true }
        ]
    }


# Scope Naming

```js

// Keywords
keyword.control.js // js reserved words

// Entities
entity.name.tag.jsx // JSX
entity.name.type // types

// Constants
constant.character.escape // escaped characters
constant.language.js // true/false/undefined...
constant.numeric.js // numbers
constant.other.js // html entities

// Strings
string.quoted.js
string.regexp.js

// Comments
comment.block.js // block.comments
comment.block.jsx // jsx comments
comment.line.js // line comments

// Meta
source.js.jsx // main file
meta.jsx // jsx

```
