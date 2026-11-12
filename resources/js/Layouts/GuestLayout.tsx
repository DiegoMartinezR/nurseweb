import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#f8fbff] via-[#f0f0ff] to-[#f7fbff] px-4 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/" className="inline-block transition hover:opacity-90" aria-label="Ir al inicio">
                    <ApplicationLogo className="h-20 w-auto" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden rounded-2xl border border-white/80 bg-white/95 px-8 py-8 shadow-[0_20px_50px_rgba(54,67,116,0.12)] backdrop-blur-sm sm:max-w-md">
                {children}
            </div>
        </div>
    );
}
