# JSX-SublimeText

Language Definitions for JSX files.


## Emmet Support

You will need to add a keyboard shortcut to tab complete in JSX files.

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


## Scope Naming

https://www.sublimetext.com/docs/3/scope_naming.html

JSX-SublimeText chooses to have a slim scope surface area. (Over naming of scopes makes the syntax overly specific and hard on color schemes.)
There are 5 main areas of scope: Keywords, Entities, Constants, Strings & Comments. 

### Keywords
JSX-SublimeText opts to keep all javascript reserved words under one scope so as to distinguish between the js lanugage and the code.

### Entities
> The entity scopes are generally assigned to the names of data structures, types and other uniquely-identifiable constructs in code and markup.

JSX-SublimeText only makes two entity assignments. First to the actual jsx/xml sections (entity.name.tag) and second to flow/ts type declarations (entity.name.type).


### Issues & Problems
The line between specific/general syntax highlighting seems to be a bit of personal one. Due to my personal favouring of less rather than more JSX-SublimeText is simpler back than other JS/JSX syntaxes. If you find a part of the syntax is breaking your color scheme or you don't like a choice please feel free to open an issue. I'm more than happy to be told I'm wrong or convinced of a better way. 

### Reference
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
constant.character.entity.html // html character entities

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
