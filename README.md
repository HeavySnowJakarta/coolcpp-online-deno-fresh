# CoolCPP Online with Deno+Fresh

Hello here.

This is a demo of CoolCPP online, which is based on Deno and Fresh. Here are some needed libraries imported for now:

+ monaco-editor
+ monaco-tree-sitter
+ tree-sitter-cpp(`static/assets/tree-sitter-wasm/tree-sitter-cpp.wasm`)
+ web-tree-sitter

## To run and repro

```
deno task start
```

and you'll see the server runs normally as normal. When run the client (<localhost:8000>), errors will occur on the server's console. See [denoland/fresh#2775](https://github.com/denoland/fresh/issues/2775) for details.

Never mind the Chinese texts on the sidebar. They are components to configure the editor like setting the theme.

## A small guide of the code structure

### `components/shared`

Some components like dropdown lists and icon buttons.

### `islands/`

+ `buttons`: Two buttons of the page.
+ `init.tsx`: Where to try to include the codes into the islands, and where the errors occur.
+ `Sidebar.tsx`: The component of the sidebar.

### `routes/`

+ `index.tsx`: The general components, including a toolbar a sidebar and the editor area. Static scripts can be included here to run the Monaco editor client-side completely.

### `scripts/`

A Python script to generate CSS style sheets.

### `static/`

+ `assets`: Some files copied from [monaco-tree-sitter](https://github.com/Menci/monaco-tree-sitter).
+ `styles`: Some CSS styles for the light&dark mode, the sidebar, toolbar and to import fonts for the editor.
+ `themes`: Some Monarch themes.
+ `fonts`: Fonts for the editor.
+ `icons`: Four icons for the project.
+ `editor.js`: The static JavaScript codes that can be used to initialize the editor itself. These codes actually can create the monaco editor successfully but it has problems to import wasm modules (for me). Also it provides functions to operate some Monaco APIs (like changing the font).
+ `functions.js`: Functions to be bundled with the components on the sidebar. They read the components' state and call the functions in `editor.js` to configure the editor.