// The button on the toolbar to switch between light and dark mode.

import { useState } from "preact/hooks";

export default function SwitchDarkModes() {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkmodeButton = () => {
        setDarkMode(!darkMode);

        // Get the app and set its class.
        const app = document.getElementById("app");

        // Get all images.
        const images = document.querySelectorAll("img");

        if (app) {
            if (!darkMode){ // Light => dark
                app.className = "app dark"
                images.forEach((image) => {
                    image.style.filter = "invert(1)"
                })
            }
            else{ // Dark => light
                app.className = "app light"
                images.forEach((image) => {
                    image.style.filter = ""
                })
            }
        }
    }

    return(
        <label class="dark-switch">
            <input
                type="checkbox"
                checked={darkMode}
                onChange={handleDarkmodeButton}
            />
            <span class="dark-slider">
                <img
                    src={`/icons/${darkMode ? "moon" : "sun"}.svg`}
                ></img>
            </span>
        </label>
    )
}