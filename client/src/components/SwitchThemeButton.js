import { ThemeContext, themes } from "../theme/ThemeContext";
import React from "react";

function SwitchThemeButton() {
    const { theme, changeTheme } = React.useContext(ThemeContext);
    
    return (
        <button
        className="btn btn-primary d-flex mt-5 position-relative"
        onClick={() =>
            changeTheme(theme === themes.dark ? themes.light : themes.dark)
        }
        >
        {theme === themes.dark ? "Dark" : "Light"}
        </button>
    );
    }

export default SwitchThemeButton;