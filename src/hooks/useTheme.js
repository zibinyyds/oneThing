import { useEffect } from 'react'
import useLocalStorage from 'use-local-storage'

const THEME_CONFIG = {
    light: 'light',
    dark: 'dark',
}

const useTheme = () => {
    // const [theme, steTheme] = useLocalStorage('theme','light');
    const defaultDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches
    const [theme, setTheme] = useLocalStorage('theme', '')

    useEffect(() => {
        setTheme(theme ? theme : defaultDark ? 'dark' : 'light')
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', THEME_CONFIG[theme])
    }, [theme])

    return [theme, setTheme]
}

export default useTheme
