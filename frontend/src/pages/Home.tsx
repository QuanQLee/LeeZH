import { Link } from 'react-router-dom';
import ParallaxBanner from '../components/ParallaxBanner';

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-x-hidden text-white">
            {/* Use cover to ensure background doesn't repeat on larger screens */}
            <ParallaxBanner
                src={`${import.meta.env.BASE_URL}images/profile-banner.jpg`}
                className="h-screen mb-0"
                fit="cover"
            />
            <div className="absolute inset-0 bg-primary-dark/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">个人主页</h1>
                <Link
                    to="/timeline"
                    className="px-6 py-3 bg-primary-dark/80 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    查看简介
                </Link>
                <p className="absolute bottom-4 text-sm opacity-90">
                    邮箱：309919702@qq.com ｜ 微信：The_5656
                </p>
            </div>
        </div>
    );
}
