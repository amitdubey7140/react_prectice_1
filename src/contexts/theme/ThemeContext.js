import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    {
        darkMode:false,
        modeChange:()=>{}
    }
)

export const useTheme = ()=>useContext(ThemeContext)

export const ThemeProvider = ThemeContext.Provider

