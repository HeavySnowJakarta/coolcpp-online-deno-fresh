// As Monaco-related functions cannot bu bundled within Fresh Islands,
// they are put here to so that they can be bundled after the DOM are rendered
// ONLY at the client side.

import * as e from './editor.js'

// Bundle CSR-only functions with components.
export function bundleMonacoFunctions(){
    // setTheme()
    const themeSetter = document.getElementById('theme-setter');
    if (themeSetter){
        themeSetter.onchange = onThemeSetterSelect
        console.log("Theme setter is set")
    }

    // setBracketPairColorization()
    const bracketPairColorizationSetter
        = document.getElementById('bracket-colorization-setter');
    if (bracketPairColorizationSetter){
        bracketPairColorizationSetter.onchange
            = onBracketPairColorizationChange
        console.log("Bracket pair colorization setter is set")
    }

    // setFontSize()
    const fontSizeSetter = document.getElementById('font-size-setter');
    if (fontSizeSetter){
        fontSizeSetter.onchange = onFontSizeChange
        console.log("Font size setter is set")
    }

    // setFont()
    const fontFamilySetter = document.getElementById('font-setter');
    if (fontFamilySetter){
        fontFamilySetter.onchange = onFontFamilyChange
        console.log("Font family setter is set")
    }

    // setIndentation()
    const indentationSetter = document.getElementById('indentation-setter');
    if (indentationSetter){
        indentationSetter.onchange = onIndentationChange
        console.log("Indentation setter is set")
    }

    // setRenderWhiteSpaces()
    const renderWhiteSpacesSetter
        = document.getElementById('render-whitespaces-setter');
    if (renderWhiteSpacesSetter){
        renderWhiteSpacesSetter.onchange = onRenderWhiteSpacesChange
        console.log("Render white spaces setter is set")
    }
}

// Function bundled with the button to set themes.
function onThemeSetterSelect(){
    const newTheme = document.getElementById('theme-setter').value
    e.setTheme(newTheme)
}

// Function bundled with the button to set bracket pair colorization.
function onBracketPairColorizationChange(){
    const ifEnabled
        = document.getElementById('bracket-colorization-setter').checked;
    e.setBracketPairColorization(ifEnabled);
}

// Function bundled with the button to set font families.
function onFontFamilyChange(){
    const newFontFamily = document.getElementById('font-setter').value
    e.setFont(newFontFamily)
}

// Function bundled with the button to set the font size.
function onFontSizeChange(){
    const newFontSize = document.getElementById('font-size-setter').value
    e.setFontSize(newFontSize)
}

// Function bundled with the button to set if the indentation assistant is
// enabled.
function onIndentationChange(){
    const ifEnabled = document.getElementById('indentation-setter').checked;
    e.setIndentation(ifEnabled);
}

// Function bundled with the button to set render white spaces.
function onRenderWhiteSpacesChange(){
    const newOption
        = document.getElementById('render-whitespaces-setter').value
    e.setRenderWhiteSpaces(newOption)
}