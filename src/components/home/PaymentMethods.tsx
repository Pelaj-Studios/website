import clsx from 'clsx'
import { useLocale } from '#/lib/locale'

const paymentMethods = [
    {
        name: 'Visa',
        logo: '/assets/payments/visa.svg',
        darkLogo: '/assets/payments/visa-dark.svg',
    },
    {
        name: 'Mastercard',
        logo: '/assets/payments/mastercard.svg',
        darkLogo: '/assets/payments/mastercard-dark.svg',
    },
    {
        name: 'Paysera',
        logo: '/assets/payments/paysera.svg',
        darkLogo: '/assets/payments/paysera-dark.svg',
    },
    {
        name: 'TEB Bank',
        logo: '/assets/payments/teb.svg',
        darkLogo: '/assets/payments/teb-dark.svg',
    },
    {
        name: 'Raiffeisen Bank',
        logo: '/assets/payments/raiffeisen.svg',
        darkLogo: '/assets/payments/raiffeisen-dark.svg',
    },
    {
        name: 'ProCredit Bank',
        logo: '/assets/payments/procredit.svg',
        darkLogo: '/assets/payments/procredit-dark.svg',
    },
] as const

export default function PaymentMethods() {
    const { t } = useLocale()

    return (
        <section
            className={clsx(
                'border-t border-border p-6',
                'md:px-16 md:py-16',
                'xl:px-32 2xl:px-44',
            )}
            aria-labelledby="payment-methods-heading"
        >
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
                <div>
                    <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                        {t.payments.label}
                    </p>
                    <h2
                        id="payment-methods-heading"
                        className="mt-5 text-3xl leading-tight md:text-5xl"
                    >
                        {t.payments.headline}
                    </h2>
                    <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
                        {t.payments.description}
                    </p>
                </div>

                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {paymentMethods.map((method) => (
                        <li
                            key={method.name}
                            className="flex min-h-24 items-center justify-center border border-border bg-card p-4"
                        >
                            <span className="sr-only">{method.name}</span>
                            <img
                                className="max-h-10 max-w-full object-contain dark:hidden"
                                src={method.logo}
                                alt=""
                                loading="lazy"
                            />
                            <img
                                className="hidden max-h-10 max-w-full object-contain dark:block"
                                src={method.darkLogo}
                                alt=""
                                loading="lazy"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
