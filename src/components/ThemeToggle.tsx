import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useLocale } from '#/lib/locale'

type ThemeMode = 'light' | 'dark'

function getInitialMode(): ThemeMode {
    if (typeof window === 'undefined') {
        return 'light'
    }

    const stored = window.localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
        return stored
    }

    return 'light'
}

function applyThemeMode(mode: ThemeMode) {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(mode)

    document.documentElement.setAttribute('data-theme', mode)

    document.documentElement.style.colorScheme = mode
}

export default function ThemeToggle() {
    const [mode, setMode] = useState<ThemeMode>('light')
    const { t } = useLocale()

    useEffect(() => {
        const initialMode = getInitialMode()
        setMode(initialMode)
        applyThemeMode(initialMode)
    }, [])

    function toggleMode() {
        const nextMode: ThemeMode = mode === 'light' ? 'dark' : 'light'
        setMode(nextMode)
        applyThemeMode(nextMode)
        window.localStorage.setItem('theme', nextMode)
    }

    const label = t.theme.modeLabel.replace(
        '{mode}',
        mode === 'dark' ? t.theme.dark : t.theme.light,
    )

    const Icon = mode === 'dark' ? Moon : Sun

    return (
        <button
            type="button"
            onClick={toggleMode}
            aria-label={label}
            title={label}
            className="inline-flex items-center gap-2 border border-border bg-background px-3 py-2 font-sans text-sm font-semibold text-muted-foreground hover:border-muted hover:text-foreground"
        >
            <Icon aria-hidden="true" className="size-4" />
            <span>{mode === 'dark' ? t.theme.dark : t.theme.light}</span>
        </button>
    )
}
