// src/components/ParallaxBanner.tsx

import React, { useEffect, useState } from 'react';

// Prop types (required)
interface ParallaxBannerProps {
    src: string;             // background image URL
    className?: string;      // optional custom class
    fit?: 'cover' | 'contain'; // background fit mode
    disableFixed?: boolean;  // disable fixed background on mobile
}

export default function ParallaxBanner({ src, className, fit = 'cover', disableFixed }: ParallaxBannerProps) {
    const [isCoarse, setIsCoarse] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const mql = window.matchMedia('(pointer:coarse)');
        const update = (e: MediaQueryList | MediaQueryListEvent) => setIsCoarse(e.matches);
        update(mql);
        if (mql.addEventListener) {
            mql.addEventListener('change', update);
            return () => mql.removeEventListener('change', update);
        }
        // Fallback for older browsers
        const legacyMql = mql as unknown as {
            addListener: (listener: (e: MediaQueryListEvent) => void) => void;
            removeListener: (listener: (e: MediaQueryListEvent) => void) => void;
        };
        legacyMql.addListener(update);
        return () => legacyMql.removeListener(update);
    }, []);

    const attachment = disableFixed || isCoarse ? 'scroll' : 'fixed';

    const fitClass =
        fit === 'contain' ? 'bg-contain' : 'bg-contain sm:bg-cover';

    return (
        <div
            className={`w-full bg-center bg-no-repeat rounded-xl mb-10 shadow ${fitClass} ${
                className || ''
            }`}
            style={{
                backgroundImage: `url(${src})`,
                backgroundAttachment: attachment,
            }}
            aria-label="banner"
        />
    );
}
