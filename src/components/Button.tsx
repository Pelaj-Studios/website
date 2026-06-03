import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'>

export default function Button(props: ButtonProps) {
    return (
        <button
            {...props}
            className={clsx(
                'bg-primary text-primary-foreground text-lg p-2 px-6 font-medium',
                props.className || '',
            )}
        >
            {props.children || <></>}
        </button>
    )
}
