import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e41f89] to-[#b721a0] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_#941a7e] transition duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_6px_0_#941a7e] focus:outline-none focus:ring-2 focus:ring-[#e41f89] focus:ring-offset-2 active:translate-y-0 active:shadow-none ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
