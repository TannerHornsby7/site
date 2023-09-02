// create a button that changes the theme of the app between light and dark mode
// use the useState hook to create a state variable that will hold the theme

import React, { useState } from 'react'
const lightTheme = 'light-mode'
const darkTheme = 'dark-mode'

const ThemeChange = () => {
    const [theme, setTheme] = useState(lightTheme)
    
    const changeTheme = () => {
        if (theme === lightTheme) {
        setTheme(darkTheme)
        // set the root class to dark mode
        document.getElementById("root").className = darkTheme;
        } else {
        setTheme(lightTheme)
        // set the root class to light mode
        document.getElementById("root").className = lightTheme;
        }
    }
    
    return (
        <div className={theme}>
        <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
    }

export default ThemeChange