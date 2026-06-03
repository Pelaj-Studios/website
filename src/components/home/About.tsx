import clsx from 'clsx'
import { useLocale } from '#/lib/locale'

export default function About() {
    const { t } = useLocale()

    return (
        <>
            <section
                id="about"
                className={clsx(
                    'p-6',
                    'md:px-16 md:py-24',
                    'xl:px-32 2xl:px-44',
                )}
            >
                <div className="max-w-6xl">
                    <p className="inline-block bg-primary px-3 py-2 font-sans text-sm font-black uppercase tracking-[0.28em] text-primary-foreground">
                        {t.about.label}
                    </p>
                    <h1
                        className={clsx(
                            'mt-6 max-w-5xl text-4xl leading-tight',
                            'md:text-6xl md:leading-[1.04]',
                        )}
                    >
                        {t.about.headline}
                    </h1>
                </div>

                <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] md:items-start md:gap-12">
                    <p className="max-w-4xl text-2xl leading-10 text-foreground md:text-3xl md:leading-[1.35]">
                        {t.about.body}
                    </p>
                    <div className="border-2 border-foreground bg-popover p-5 shadow-[8px_8px_0_var(--shadow-hard)]">
                        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                            {t.about.support}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
