import clsx from 'clsx'
import { useLocale } from '#/lib/locale'

export default function WhyUs() {
    const { t } = useLocale()

    return (
        <>
            <section
                className={clsx(
                    'p-6',
                    'md:px-16 md:py-24',
                    'xl:px-32 2xl:px-44',
                )}
            >
                <div className="max-w-4xl space-y-5">
                    <p className="inline-block bg-primary px-3 py-2 font-sans text-sm font-black uppercase tracking-[0.28em] text-primary-foreground">
                        {t.whyUs.label}
                    </p>
                    <h1
                        className={clsx(
                            'text-4xl leading-tight',
                            'md:text-6xl',
                        )}
                    >
                        {t.whyUs.headline}
                    </h1>
                    <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                        {t.whyUs.description}
                    </p>
                </div>

                <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
                    {t.whyUs.reasons.map((reason, index) => (
                        <li
                            key={reason.title}
                            className="border-2 border-secondary bg-popover p-5"
                        >
                            <div className="mb-6 flex items-start justify-between gap-4">
                                <h2 className="max-w-sm text-2xl font-semibold leading-tight text-popover-foreground">
                                    {reason.title}
                                </h2>
                                <span className="shrink-0 bg-primary px-2 py-1 font-sans text-sm font-black tracking-[0.18em] text-primary-foreground">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                                {reason.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
