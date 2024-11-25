// Used for the toolbar to open the sidebar.

import IconButton from "../../components/shared/IconButton.tsx";

export default function SettingButton() {
    const openSidebar = () => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.className = "sidebar-open"
        }
    }

    return(
        <IconButton icon="settings" click={openSidebar} />
    )
}