import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
import Markdown from '../components/Markdown';
import ParallaxBanner from '../components/ParallaxBanner';
import ImageCarousel from '../components/ImageCarousel';

export default function EventPage() {
    const { id } = useParams();
    const evt = events.find(e => e.id === id);
    if (!evt) return <p className="p-6">事件不存在 <Link to="/timeline" className="underline">返回</Link></p>;
    return (
        <article className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {evt.cover && (
                <div className="relative">
                    <ParallaxBanner src={evt.cover} className="h-64 md:h-96" />
                    <div className="absolute inset-0 bg-purple-600/70" />
                    <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-bold text-white">
                        {evt.title}
                    </h1>
                </div>
            )}
            <div className="relative max-w-2xl mx-auto py-12 px-4">
                {!evt.cover && (
                    <h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                        {evt.title}
                    </h1>
                )}
                <p className="mb-8 text-slate-500 dark:text-slate-400">{evt.date}</p>
                {evt.images && <ImageCarousel images={evt.images} />}
                <Markdown>{evt.description}</Markdown>
                <Link to="/timeline" className="block mt-12 text-primary underline">← 返回时间轴</Link>
            </div>
        </article>
    );
}