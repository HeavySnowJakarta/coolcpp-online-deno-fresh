import { useEffect } from "preact/hooks";

import IconButton from "../components/shared/IconButton.tsx"
import Dropdown from "../components/shared/Dropdown.tsx";
import NumberField from "../components/shared/NumberField.tsx";
import Switch from "../components/shared/Switch.tsx";

import { themes } from "../config/themes.js"
import { fonts } from "../config/fonts.js";
import { renderWhiteSpacesList } from "../config/others.js";

// import { setTheme } from "../static/editor.js";

export default function Sidebar() {
    useEffect(() => console.log("Sidebar loaded"), []);
    const closeSidebar = () => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.className = "sidebar";
        }
    };

    // const setThm = (themeName: string) => {
    //     useEffect(() => setTheme(themeName), [themeName]);
    // }

    return (
        <div id="sidebar" className={`sidebar`}>
            {/* The close button. */}
            <div className="close-button" style={{zIndex: "500"}}>
                <IconButton icon="x" click={closeSidebar} />
            </div>
            
            {/* The title of the sidebar. */}
            <div style={{
                position: "absolute",
                top: "50px",
                left: "50px",
                width: "80%",
                height: "calc",
            }}>
                <h2>设置</h2>
            </div>

            {/* The form of the settings. */}
            <div style={{
                position: "absolute",
                top: "100px",
                left: "50px",
                width: "80%",
                height: "85%",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                gap: "5px"
            }}>
                <div style={{height: "5px"}}></div>
                <h3> 颜色 </h3>

                <div className="formitem">
                    <p> 编辑器主题 </p>
                    <Dropdown
                        options={themes}
                        onChange={() => {}}
                        dropdown_id="theme-setter"
                        defaultValue="github-light"
                    />
                </div>
                <p className="statement">
                    编辑器预计将实装 VSCode 下载量最高的 16 套主题，亮色和暗色各 8 套。
                </p>

                <div className="formitem">
                    <p> 启用括号上色 </p>
                    <Switch
                        switch_id="bracket-colorization-setter"
                        value={true}
                    />
                </div>

                <div style={{height: "5px"}}></div>
                <h3> 字体 </h3>

                <div className="formitem">
                    <p> 编辑器字体 </p>
                    <Dropdown
                        options={fonts}
                        onChange={() => {}}
                        dropdown_id="font-setter"
                        defaultValue="cascadia-mono"
                    />
                </div>

                <p className="statement">
                    切换字体时需要几秒钟加载字体文件。
                </p>

                <div className="formitem">
                    <p> 字体大小 </p>
                    <NumberField
                        textfield_id="font-size-setter"
                        value="16"
                    ></NumberField>
                </div>

                <div className="formitem">
                    <p> 显示空白字符 </p>
                    <Dropdown
                        options={renderWhiteSpacesList}
                        onChange={() => {}}
                        dropdown_id="render-whitespaces-setter"
                        defaultValue="selection"
                    />
                </div>
                <p className="statement">
                    警告：在启用显示空白字符时频繁切换字体可能会导致该功能工作不正常。
                </p>

                <div style={{height: "5px"}}></div>
                <h3> 编辑 </h3>

                {/* // This widget does not work now. */}
                <div className="formitem">
                    <p> 启用缩进辅助线 </p>
                    <Switch
                        switch_id="indentation-setter"
                        value={true}
                    />
                </div>
            </div>

            {/* <label>
            <input
                type="checkbox"
                id="dark-mode"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            </label> */}
        </div>
    )
}