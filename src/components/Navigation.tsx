import clsx from 'clsx'
import { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useLocale } from '#/lib/locale'

const links = [
    { href: '#home', labelKey: 'home' },
    { href: '#services', labelKey: 'services' },
    { href: '#about', labelKey: 'about' },
    { href: '#contact', labelKey: 'contact' },
] as const

export default function Navigation() {
    const [active, setActive] = useState(false)
    const { locale, nextLocaleLabel, t, toggleLocale } = useLocale()

    const onLinkClick = () => {
        setActive(false)
    }

    return (
        <>
            <nav className={clsx('fixed inset-x-0 top-0 z-50 bg-background')}>
                <div className="flex h-16 items-center justify-between px-6 md:px-16 xl:px-32 2xl:px-44">
                    <div className="flex items-center gap-6">
                        <p
                            className={clsx(
                                'font-sans text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground',
                                'md:border-r md:border-border md:pr-6',
                            )}
                        >
                            <span className="text-foreground">//</span>
                            {t.nav.brand}
                        </p>
                        <div className="hidden items-center gap-1 md:flex">
                            {links.map((link) => (
                                <NavLink
                                    key={link.href}
                                    link={link.href}
                                    onLinkClick={onLinkClick}
                                >
                                    {t.nav[link.labelKey]}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="hidden items-center gap-2 md:flex">
                        <button
                            type="button"
                            onClick={toggleLocale}
                            className="border border-border bg-background px-3 py-2 font-sans text-sm font-semibold text-muted-foreground hover:border-muted hover:text-foreground"
                            aria-label={`${t.nav.languageLabel}: ${nextLocaleLabel}`}
                            title={`${t.nav.languageLabel}: ${nextLocaleLabel}`}
                        >
                            {locale === 'en' ? 'SQ' : 'EN'}
                        </button>
                        <ThemeToggle />
                    </div>

                    <button
                        onClick={() => setActive(!active)}
                        className={clsx(
                            'inline-flex size-11 items-center justify-center border border-border bg-background text-foreground',
                            'hover:border-muted hover:bg-card',
                            'md:hidden',
                        )}
                        aria-label={active ? t.nav.close : t.nav.open}
                        aria-expanded={active}
                    >
                        {active ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </button>
                </div>

                <div
                    className={clsx(
                        'fixed inset-x-0 top-16 z-40 min-h-[calc(100vh-4rem)] bg-background',
                        'flex flex-col gap-y-2 border-t border-border p-6 tracking-tight',
                        'transition-transform duration-300 ease-in-out',
                        active ? 'translate-x-0' : '-translate-x-full',
                        'md:hidden',
                    )}
                >
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            link={link.href}
                            onLinkClick={onLinkClick}
                        >
                            {t.nav[link.labelKey]}
                        </NavLink>
                    ))}
                    <div className="mt-8 flex items-center gap-2 border-t border-border pt-6">
                        <button
                            type="button"
                            onClick={toggleLocale}
                            className="border border-border bg-background px-3 py-2 font-sans text-sm font-semibold text-muted-foreground hover:border-muted hover:text-foreground"
                            aria-label={`${t.nav.languageLabel}: ${nextLocaleLabel}`}
                            title={`${t.nav.languageLabel}: ${nextLocaleLabel}`}
                        >
                            {locale === 'en' ? 'SQ' : 'EN'}
                        </button>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </>
    )
}

function NavLink({
    link,
    children,
    onLinkClick,
}: PropsWithChildren<{ link: string; onLinkClick: () => void }>) {
    return (
        <a
            className={clsx(
                'py-2 text-3xl text-foreground hover:text-muted',
                'md:px-4 md:text-sm md:font-semibold md:text-muted-foreground md:hover:bg-card md:hover:text-foreground',
            )}
            href={link}
            onClick={onLinkClick}
        >
            {children}
        </a>
    )
}
