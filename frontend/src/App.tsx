import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

import Home from './pages/Home';
import TimelinePage from './components/TimelinePage';
import EventPage from './pages/EventPage';   // new page
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';  // imported at top

export default function App() {
    const [dark, setDark] = useState(false);

    return (
        <Router basename="/">
            <div className={dark ? 'dark' : ''}>
                {/* light/dark toggle button */}
                <button
                    onClick={() => setDark(!dark)}
                    className="fixed right-6 top-6 z-50 p-2 rounded-full bg-primary text-white shadow-lg"
                >
                    {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
                {/* back to top button */}
                <ScrollToTop />      {/* placed here to work globally */}

                {/* route table */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/timeline" element={<TimelinePage />} />
                    <Route path="/event/:id" element={<EventPage />} /> {/* new */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}
