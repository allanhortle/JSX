JSX-SublimeText
===============

Language Definitions for JSX files.




Emmet Support
-------------
Emmet default's to not support js files. So you will need to add a keyboard shortcut to tab complete in JSX files.

open up `Preferences > Key Bindings - user` and add this entry:


    {
        "keys": ["tab"],
        "command": "expand_abbreviation_by_tab", 
        "context": [
            {
                "operand": "source.js.jsx", 
                "operator": "equal", 
                "match_all": true, 
                "key": "selector"
            }
        ]
    }