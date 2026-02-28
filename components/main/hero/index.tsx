'use client';

import { FallingPattern } from './FallingPattern';

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
            <FallingPattern
                className="absolute inset-0"
                color="oklch(0.6 0.2 250)"
                duration={150}
                blurIntensity="1px"
            />
            <div className="relative z-20 flex flex-col items-center gap-6 text-center px-4">
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                    Welcome
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground">
                    빠르고 아름다운 Next.js 랜딩 페이지
                </p>
            </div>
        </section>
    );
}
