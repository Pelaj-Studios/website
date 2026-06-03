import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import en from '#/locales/en.json'
import sq from '#/locales/sq.json'

export type Locale = 'en' | 'sq'

const localeLabels: Record<Locale, string> = {
    en: 'English',
    sq: 'Shqip',
}

const translations = {
    en,
    sq,
} as const

type Translation = typeof en

const LocaleContext = createContext<{
    locale: Locale
    setLocale: (locale: Locale) => void
    toggleLocale: () => void
    localeLabel: string
    nextLocaleLabel: string
    t: Translation
} | null>(null)

export function LocaleProvider({ children }: PropsWithChildren) {
    const [locale, setLocaleState] = useState<Locale>('en')

    const setLocale = (nextLocale: Locale) => {
        setLocaleState(nextLocale)
        window.localStorage.setItem('locale', nextLocale)
        document.documentElement.lang = nextLocale === 'sq' ? 'sq' : 'en'
    }

    useEffect(() => {
        const stored = window.localStorage.getItem('locale')
        if (stored === 'sq' || stored === 'en') {
            setLocaleState(stored)
            document.documentElement.lang = stored === 'sq' ? 'sq' : 'en'
            return
        }

        document.documentElement.lang = 'en'
    }, [])

    useEffect(() => {
        document.documentElement.lang = locale === 'sq' ? 'sq' : 'en'
    }, [locale])

    const value = useMemo(() => {
        const nextLocale = locale === 'en' ? 'sq' : 'en'

        return {
            locale,
            setLocale,
            toggleLocale: () => setLocale(nextLocale),
            localeLabel: localeLabels[locale],
            nextLocaleLabel: localeLabels[nextLocale],
            t: translations[locale],
        }
    }, [locale])

    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    )
}

export function useLocale() {
    const context = useContext(LocaleContext)

    if (!context) {
        throw new Error('useLocale must be used inside LocaleProvider')
    }

    return context
}
