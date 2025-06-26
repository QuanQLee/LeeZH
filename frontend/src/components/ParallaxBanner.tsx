// src/components/ParallaxBanner.tsx

import React, { useEffect, useState } from 'react';

// 1. props 类型声明（必须！）
interface ParallaxBannerProps {
    src: string;             // 背景图片地址
    className?: string;      // 可选：自定义 class
    fit?: 'cover' | 'contain'; // 背景适应方式
    disableFixed?: boolean;  // 在移动端禁用 fixed 背景
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
