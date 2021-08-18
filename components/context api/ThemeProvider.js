import { useState } from 'react'
import { ThemeContext } from './ThemeContext';


function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <ThemeContext.Provider value={{
            darkMode,
            setDarkMode
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

