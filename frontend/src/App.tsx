import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

import Home from './pages/Home';
import TimelinePage from './components/TimelinePage';
import EventPage from './pages/EventPage';   // ★ 新增
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';  // 顶部引入

export default function App() {
    const [dark, setDark] = useState(false);

    return (
        <BrowserRouter basename="/LeeZH">
            <div className={dark ? 'dark' : ''}>
                {/* 亮／暗主题按钮 */}
                <button
                    onClick={() => setDark(!dark)}
                    className="fixed right-6 top-6 z-50 p-2 rounded-full bg-primary text-white shadow-lg"
                >
                    {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
                {/* 回到顶部按钮 */}
                <ScrollToTop />      {/* 就加在这里，保证全局生效 */}

                {/* 统一路由表 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/timeline" element={<TimelinePage />} />
                    <Route path="/event/:id" element={<EventPage />} /> {/* ★ 新增 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
