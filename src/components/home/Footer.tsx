import clsx from 'clsx'
import { useLocale } from '#/lib/locale'

const footerLinks = [
    { href: '#home', labelKey: 'home', newTab: false },
    { href: '#services', labelKey: 'services', newTab: false },
    { href: '#about', labelKey: 'about', newTab: false },
    { href: '#contact', labelKey: 'contact', newTab: false },
    {
        href: 'https://github.com/Pelaj-Studios',
        labelKey: 'github',
        newTab: true,
    },
] as const

export default function Footer() {
    const { t } = useLocale()

    return (
        <>
            <footer
                className={clsx(
                    'bg-background p-6',
                    'md:px-16 md:py-10 xl:px-32 2xl:px-44',
                )}
            >
                <div
                    className={clsx(
                        'grid gap-8',
                        'md:grid-cols-[1fr_auto] md:items-start',
                    )}
                >
                    <div>
                        <h1 className="text-2xl font-black">
                            PELAJ STUDIOS Sh.p.k
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            {t.footer.description}
                        </p>
                    </div>

                    <nav
                        className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end"
                        aria-label={t.nav.footerLabel}
                    >
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                className="text-muted-foreground hover:text-foreground"
                                href={link.href}
                                target={link.newTab ? '_blank' : '_self'}
                            >
                                {t.nav[link.labelKey]}
                            </a>
                        ))}
                    </nav>
                </div>

                <div
                    className={clsx(
                        'mt-10 grid gap-4 text-sm text-muted-foreground',
                        'md:grid-cols-[1fr_auto] md:items-center',
                    )}
                >
                    <p>{t.footer.rights}</p>
                    <div className="flex flex-col gap-1 md:items-end">
                        <a
                            className="hover:text-foreground"
                            href="mailto:pelajstudios@gmail.com"
                        >
                            pelajstudios@gmail.com
                        </a>
                        <a
                            className="hover:text-foreground"
                            href="tel:+38344152347"
                        >
                            +383 44 152 347
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
