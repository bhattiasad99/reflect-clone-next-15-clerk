import { useState } from "react";

const useToggleTheme = () => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

    const handleToggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            setIsDarkModeEnabled(false);
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkModeEnabled(true);
            localStorage.setItem('theme', 'dark');
        }
    };

    return { handleToggleTheme, isDarkModeEnabled };
}

export default useToggleTheme