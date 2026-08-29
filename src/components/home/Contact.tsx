import clsx from 'clsx'
import { Mail, Phone } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { useLocale } from '#/lib/locale'

const contactItems = [
    {
        labelKey: 'email',
        value: 'contact@pelajstudios.com',
        href: 'mailto:contact@pelajstudios.com',
        icon: Mail,
    },
    {
        labelKey: 'phone',
        value: '+383 44 152 347',
        href: 'tel:+38344152347',
        icon: Phone,
    },
] as const

export default function Contact() {
    const { t } = useLocale()

    return (
        <section
            id="contact"
            className={clsx('p-6', 'md:px-16 md:py-24', 'xl:px-32 2xl:px-44')}
        >
            <div className="py-10 md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:py-16">
                <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    {t.contact.label}
                </p>

                <div>
                    <h1
                        className={clsx(
                            'mt-5 text-4xl leading-tight md:mt-0',
                            'md:text-6xl',
                        )}
                    >
                        {t.contact.headline}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                        {t.contact.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        {contactItems.map((item) => (
                            <ContactButton key={item.href} href={item.href}>
                                <item.icon
                                    aria-hidden="true"
                                    className="size-5"
                                />
                                <span className="sr-only">
                                    {t.contact[item.labelKey]}:{' '}
                                </span>
                                {item.value}
                            </ContactButton>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ContactButton({
    children,
    href,
}: PropsWithChildren<{ href: string }>) {
    return (
        <a
            className="inline-flex items-center justify-center gap-3 border border-border bg-primary px-5 py-3 text-base font-semibold text-primary-foreground hover:border-muted hover:bg-accent hover:text-accent-foreground"
            href={href}
        >
            {children}
        </a>
    )
}
