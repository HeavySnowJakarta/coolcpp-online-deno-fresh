// Initialize the editor, run CSR-only after the DOM is loaded.

import { useEffect } from "preact/hooks";

// tree-sitter-related JSON configurations.

export default function Init() {

    useEffect(() => {
        (async ()=>{
            // TODO: Should be enabled in the future.
            // const {initEditor} = await import("../static/editor.js");
            // initEditor();

            console.log("Initializing the editor")

            // Import Monaco editor.
            const monaco = await import("https://esm.sh/monaco-editor@0.52.0")

            // // Import tree-sitter-related libraries.
            // const treeSitterCppResponse = await fetch("/assets/tree-sitter-cpp.wasm")
            // const treeSitterCpp = await WebAssembly.instantiateStreaming(
            //     treeSitterCppResponse,
            //     {}
            // );
            // const Parser = await import("https://esm.sh/web-tree-sitter@0.24.4")
            // const {Theme, Language, MonacoTreeSitter} = await import("https://esm.sh/monaco-tree-sitter@0.0.5")
            // const cppGrammarResponse = await fetch("../static/assets/tree-sitter-grammar/cpp.json")
            // const cppGrammar = cppGrammarResponse.json()
            // const themeResponse = await fetch("../static/assets/tree-sitter-theme/tomorrow.json")
            // const theme = await themeResponse.json()

            // // Initialize the tree-sitter libraries.
            // Theme.load(theme);
            // console.log("Here is the structure of Parser:");
            // console.log(Parser);
            // // await Parser.default.init()
            // // const language = new Language(cppGrammar)

            // (globalThis as typeof globalThis & {monaco: typeof monaco})
            //     .monaco = monaco;
        })();
    }, [])

    return <></>
}