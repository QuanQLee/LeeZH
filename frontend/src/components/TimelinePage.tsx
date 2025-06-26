/* TimelinePage.tsx — v3.3 完整图片支持 */
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { events } from '../data/events';
import { motion } from 'framer-motion';
import {
    ShoppingCartIcon,
    BugAntIcon,
    GlobeAltIcon,
    DocumentTextIcon,
    CommandLineIcon,
    PuzzlePieceIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, type JSX } from 'react';
import Markdown from './Markdown';
import HeroBanner from './HeroBanner';

const icons: Record<string, JSX.Element> = {
    ShoppingCartIcon: <ShoppingCartIcon className="w-6 h-6" />,
    BugAntIcon: <BugAntIcon className="w-6 h-6" />,
    GlobeAltIcon: <GlobeAltIcon className="w-6 h-6" />,
    DocumentTextIcon: <DocumentTextIcon className="w-6 h-6" />,
    CommandLineIcon: <CommandLineIcon className="w-6 h-6" />,
    PuzzlePieceIcon: <PuzzlePieceIcon className="w-6 h-6" />,
};

export default function TimelinePage() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [layout, setLayout] = useState<'1-column' | '2-columns'>('2-columns');

    useEffect(() => {
        const updateLayout = () => {
            setLayout(window.innerWidth < 768 ? '1-column' : '2-columns');
        };
        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    return (
        <section className="parallax-wrapper min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
            {events[0].cover && (
                <HeroBanner
                    src={events[0].cover}
                    overlayClassName="bg-purple-600/40"
                />
            )}

            <motion.h1
                className="text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                项目时间线
            </motion.h1>

            <input
                type="text"
                placeholder="搜索事件..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="mb-12 block w-full sm:max-w-xs p-2 border border-slate-300 rounded"
            />

            <VerticalTimeline
                animate
                lineColor="#0ea5e9"
                className="timeline relative snap-y snap-mandatory"
                layout={layout}
            >
                {events
                    .filter(e =>
                        e.title.includes(searchTerm) ||
                        e.description.includes(searchTerm)
                    )
                    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
                    .map((e, idx) => (
                        <VerticalTimelineElement
                            key={`evt-${e.id}-${idx}`}
                            date={e.date}
                            contentStyle={{
                                background: '#fff',
                                borderTop: '4px solid #0ea5e9',
                                boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.25s, transform 0.25s',
                            }}
                            contentArrowStyle={{ borderRight: '7px solid #0ea5e9' }}
                            iconStyle={{ background: '#0ea5e9', color: '#fff' }}
                            icon={icons[e.icon ?? 'ShoppingCartIcon']}
                            className="snap-start group"
                        >
                            <motion.div
                                tabIndex={0}
                                role="button"
                                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                style={{ outline: 'none' }}
                                onClick={() => navigate(`/event/${e.id}`)}
                                onKeyDown={ev => {
                                    if (ev.key === 'Enter' || ev.key === ' ') {
                                        navigate(`/event/${e.id}`);
                                    }
                                }}
                                aria-label={`查看「${e.title}」详情`}
                            >
                                <Markdown>{`### ${e.title}\n\n${e.description}`}</Markdown>
                                {/* 新增：每条项目配图 */}
                                {e.image && (
                                    <img
                                        src={e.image}
                                        alt={e.title}
                                        className="mt-3 mb-2 w-full sm:max-w-xs sm:max-h-60 rounded-lg shadow hover:scale-105 transition"
                                        style={{ objectFit: 'cover' }}
                                    />
                                )}
                            </motion.div>
                        </VerticalTimelineElement>
                    ))}
            </VerticalTimeline>
        </section>
    );
}
