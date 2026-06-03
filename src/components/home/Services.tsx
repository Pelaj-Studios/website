import { Code2, FileText, Languages, Monitor, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { useLocale } from '#/lib/locale'

const serviceIcons = [Code2, Languages, Monitor, Workflow, FileText]

export default function Services() {
    const { t } = useLocale()

    return (
        <>
            <section
                id="services"
                className="flex flex-col gap-y-6 p-6 md:px-16 md:py-24 xl:px-32 2xl:px-44"
            >
                <div>
                    <h1 className="text-4xl">{t.services.title}</h1>
                </div>
                <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {t.services.items.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            description={service.description}
                            icon={serviceIcons[index]}
                            index={index + 1}
                            title={service.title}
                        />
                    ))}
                </ul>
            </section>
        </>
    )
}

function ServiceCard({
    description,
    icon: Icon,
    index,
    title,
}: {
    description: string
    icon: LucideIcon
    index: number
    title: string
}) {
    return (
        <li className="border border-border bg-card p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <ServiceCard.Icon icon={Icon} />
                    <ServiceCard.Title>{title}</ServiceCard.Title>
                </div>
                <ServiceCard.Meta>{`${String(index).padStart(2, '0')}`}</ServiceCard.Meta>
            </div>
            <ServiceCard.Description>{description}</ServiceCard.Description>
        </li>
    )
}

ServiceCard.Icon = function ServiceCardIcon({
    icon: Icon,
}: {
    icon: LucideIcon
}) {
    return (
        <div className="flex size-11 shrink-0 items-center justify-center border border-border bg-popover text-muted-foreground">
            <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
        </div>
    )
}

ServiceCard.Meta = function ServiceCardMeta({ children }: PropsWithChildren) {
    return (
        <span className="font-sans text-xs font-black tracking-[0.28em] text-muted-foreground">
            {children}
        </span>
    )
}

ServiceCard.Title = function ServiceCardTitle({ children }: PropsWithChildren) {
    return (
        <h2 className="text-xl font-semibold text-card-foreground">
            {children}
        </h2>
    )
}

ServiceCard.Description = function ServiceCardDescription({
    children,
}: PropsWithChildren) {
    return (
        <p className="mt-3 text-base leading-7 text-muted-foreground">
            {children}
        </p>
    )
}
