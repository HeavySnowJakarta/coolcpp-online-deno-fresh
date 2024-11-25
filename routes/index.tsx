import { Head } from "$fresh/runtime.ts"

import Sidebar from "../islands/Sidebar.tsx"
import SettingButton from "../islands/buttons/SettingButton.tsx";
import SwitchDarkModes from "../islands/buttons/SwitchDarkModes.tsx";
import Init from "../islands/init.tsx";
// import Editor from "../islands/editor.tsx";

export default function Home() {
  return(
    <div className={"app light"} id="app">
      <Head>
        <title>Cool CPP online</title>
        <link 
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs/editor/editor.main.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"
          defer
        ></script>
        <link rel="stylesheet" href="/styles/fonts.css"></link>
        <link rel="stylesheet" href="/styles/general.css"></link>
        <link rel="stylesheet" href="/styles/toolbar.css"></link>
        <link rel="stylesheet" href="/styles/sidebar.css"></link>
      </Head>

      {/* Toolbar on the top of the page. */}
      <div className="toolbar">
        {/* The title of the page. */}
        <h1> Cool CPP online </h1>

        {/* The buttons. */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end"
        }}>
          <SwitchDarkModes />
          <SettingButton />
        </div>
      </div>

      {/* The sidebar. */}
      <Sidebar />
      
      {/* The editor. */}
      <div id="editor" style={{width: "100%", height: "90vh", top: 2}}></div>
      {/* <script type="module" src="/editor.js"></script> */}
      <Init />
    </div>
  );
}