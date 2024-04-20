import PropTypes from "prop-types"
import { createContext, useState } from "react";

// context instance
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // state
     const [isDarkTheme, setIsDarkTheme] = useState(false)

    // function to change state
     const toggleTheme = () => setIsDarkTheme(prevTheme => !prevTheme)

     return (
         <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
             {children}
         </ThemeContext.Provider>
     )
}
 
export default ThemeContext;

ThemeProvider.propTypes = {
  children: PropTypes.any
}
