import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const themes = {
    light: {
        dark: false,
        colors: {
            background: '#f8f9fa',
            card: '#ffffff',
            text: '#333333',
            subText: '#666666',
            border: '#f0f0f0',
            primary: '#ff4458',
            notification: '#ff4458',
            tint: '#ff4458',
            tabIconDefault: '#8e8e93',
            tabIconSelected: '#ff4458',
            inputBackground: '#ffffff',
            inputBorder: '#dddddd',
            danger: 'red',
        }
    },
    dark: {
        dark: true,
        colors: {
            background: '#121212',
            card: '#1e1e1e',
            text: '#ffffff',
            subText: '#aaaaaa',
            border: '#333333',
            primary: '#ff4458',
            notification: '#ff4458',
            tint: '#ff4458',
            tabIconDefault: '#8e8e93',
            tabIconSelected: '#ff4458',
            inputBackground: '#2c2c2c',
            inputBorder: '#444444',
            danger: '#ff6b6b',
        }
    }
};

export function ThemeProvider({ children }) {
    // Default to system preference or light
    // For this implementation, let's start with light default but allow toggling
    const systemScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(false); // Default to light for consistency with current app state

    const theme = isDarkMode ? themes.dark : themes.light;

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
