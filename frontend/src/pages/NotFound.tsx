import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
            <h1 className="text-6xl font-bold">404</h1>
            <p>The page does not exist or has been removed.</p>
            <Link to="/" className="text-primary underline">Back to Home</Link>
        </div>
    );
}
