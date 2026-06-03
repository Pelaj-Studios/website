import clsx from 'clsx'
import { useLocale } from '#/lib/locale'

export default function Home() {
    const { t } = useLocale()

    return (
        <>
            <section
                id="home"
                className={clsx(
                    'relative flex min-h-screen flex-col justify-center gap-y-9 overflow-hidden p-6 pt-24',
                    'md:items-center md:px-16 md:pt-6 md:text-center',
                    'xl:px-32 2xl:px-44',
                )}
            >
                <div
                    className={clsx(
                        'relative z-10 flex flex-col gap-y-9',
                        'md:max-w-5xl md:items-center md:gap-y-12',
                    )}
                >
                    <div>
                        <h1
                            className={clsx(
                                'text-4xl font-bold',
                                'md:text-6xl xl:text-7xl',
                            )}
                        >
                            {t.hero.brand}
                        </h1>
                        <p
                            className={clsx(
                                'mt-2 text-muted-foreground',
                                'md:text-xl',
                            )}
                        >
                            {t.hero.tagline}
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-6">
                        <h2
                            className={clsx(
                                'text-4xl italic leading-tight',
                                'md:max-w-4xl md:text-6xl md:leading-[1.04]',
                                'xl:text-7xl xl:max-w-full',
                            )}
                        >
                            {t.hero.headline}
                        </h2>

                        <div
                            className={clsx(
                                'flex flex-col gap-y-2 items-start',
                                'md:flex-row md:items-center md:justify-center md:gap-x-3',
                            )}
                        >
                            <a
                                href="#contact"
                                className="bg-primary text-primary-foreground text-lg p-2 px-6 font-medium hover:bg-accent hover:text-accent-foreground"
                            >
                                {t.hero.contact}
                            </a>
                            <a
                                href="#services"
                                className="border border-border bg-secondary text-secondary-foreground text-lg p-2 px-6 font-medium hover:border-muted hover:bg-accent hover:text-accent-foreground"
                            >
                                {t.hero.services}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
