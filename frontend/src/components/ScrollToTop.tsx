// src/components/ScrollToTop.tsx
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 200);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return show ? (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 transition"
            aria-label="Back to top"
            title="Back to top"
        >
            ↑
        </button>
    ) : null;
}
