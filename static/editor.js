// Functions related to Monaco editor-related operations.

import { bundleMonacoFunctions } from './functions.js';

// Import `tree-sitter` related libraries.
import { Theme, Language, MonacoTreeSitter } from "https://esm.sh/monaco-tree-sitter@0.0.5"
import * as Parser from "https://esm.sh/web-tree-sitter@0.24.4"
import treeSitterCpp from "./assets/tree-sitter-wasm/tree-sitter-cpp.wasm"

// The function to initialize the editor after the DOM has been loaded.
export function initEditor(){
    document.addEventListener('DOMContentLoaded', async () => {
        console.log("init: Started to initialize editor")
        // Import Monaco editor.
        const require = globalThis.require || {};
        require.config({
            paths: {
                'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs'
            },
        });

        // Initialize the config files.
        const cppGrammarResponse = await fetch("./assets/tree-sitter-grammar/cpp.json")
        const cppGrammar = await cppGrammarResponse.json()
        const themeResponse = await fetch("./assets/tree-sitter-theme/tomorrow.json")
        const theme = await themeResponse.json()

        // Initialize `tree-sitter` parser and the grammars.
        console.log("init: Loading the theme of tree-sitter")
        Theme.load(theme)
        console.log("init: Loading tree-sitter parser")
        await Parser.init()
        console.log("init: Initializing tree-sitter language grammar")
        const language = new Language(cppGrammar)
        await language.init(treeSitterCpp, Parser)

        require(['vs/editor/editor.main'], function(monaco) {
            console.log("init: Loadeding Monaco library")
            globalThis.monaco = monaco;

            // Create the editor.
            console.log("init: Creating the editor")
            const editor = monaco.editor.create(
                document.getElementById('editor'), {
                    value: '#include <iostream>\nusing namespace std;\n\nint main() {\n    std::cout << "Hello, world!" << std::endl;\n    return 0;\n}',
                    language: 'cpp',
                    fontFamily: 'cascadia-mono',
                    fontSize: 16,
                    "bracketPairColorization.enabled": true,
                }
            );
            globalThis.editor = editor

            // Initialize the editor settings and bundle the functions.
            // setTheme("github-light")
            console.log("init: Bunding Monaco functions to widgets")
            bundleMonacoFunctions();

            // Attach the `tree-sitter` library to the editor.
            console.log("init: Attaching tree-sitter to the editor")
            globalThis.monacoTreeSitter = new MonacoTreeSitter(
                monaco,
                editor,
                language
            )
        });
    });
}

initEditor();

// The function to set the theme of the editor.
// Warning: This function won't check the validity of the theme name.
export function setTheme(themeName) {
    console.log("Setting theme to " + themeName)
    fetch(`./themes/${themeName}.json`)
        .then(response => response.json())
        .then(themeData => {
            console.log(themeName)
            console.log(themeData)
            monaco.editor.defineTheme(themeName, themeData);
            monaco.editor.setTheme(themeName);
        })
}

// The function to set if bracket pair colorization is enabled.
export function setBracketPairColorization(ifEnabled) {
    editor.updateOptions({
        "bracketPairColorization.enabled": ifEnabled
    })
}

// The function to set the font family of the editor.
export function setFont(fontFamily) {
    editor.updateOptions({
        fontFamily: fontFamily
    })
}

// The function to set the font size of the editor.
export function setFontSize(fontSize) {
    editor.updateOptions({
        fontSize: fontSize
    })
}

// The function to set if the indentation assistant is enabled.
export function setIndentation(ifEnabled) {
    editor.updateOptions({
        guides: {
            indentation: ifEnabled
        }
    })
}

// This function is used to set if to render white spaces.
// WARNING: This function won't check the validity of the option.
export function setRenderWhiteSpaces(option) {
    editor.updateOptions({
        renderWhitespace: option
    })
}