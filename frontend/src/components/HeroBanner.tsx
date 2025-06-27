import { useEffect, useState } from 'react';
import ParallaxBanner from './ParallaxBanner';
import {
    DocumentArrowDownIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    ServerIcon,
    CloudIcon,
    CodeBracketSquareIcon,
    PaintBrushIcon,
    FilmIcon,
    WrenchScrewdriverIcon,
    CommandLineIcon,
} from '@heroicons/react/24/solid';

interface Props {
    src: string;
    overlayClassName?: string;
}

export default function HeroBanner({ src, overlayClassName }: Props) {
    const [resumeAvailable, setResumeAvailable] = useState(false);
    const techIcons = [
        { Icon: ComputerDesktopIcon, label: 'Web Development' },
        { Icon: DevicePhoneMobileIcon, label: 'Mobile Apps' },
        { Icon: ServerIcon, label: 'Backend Services' },
        { Icon: CloudIcon, label: 'Cloud Deployment' },
        { Icon: CodeBracketSquareIcon, label: 'React/Vue Component Development' },
        { Icon: PaintBrushIcon, label: 'UI Icon Design' },
        { Icon: FilmIcon, label: 'Video Editing & Motion' },
        { Icon: WrenchScrewdriverIcon, label: 'Toolchain Git · Docker · CI/CD' },
        { Icon: CommandLineIcon, label: 'Python Data Scripts' },
    ];

    const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
    useEffect(() => {
        fetch(resumeUrl, { method: 'HEAD' })
            .then(res => setResumeAvailable(res.ok))
            .catch(() => setResumeAvailable(false));
    }, [resumeUrl]);

    return (
        <div className="relative">
            <ParallaxBanner src={src} className="h-64 md:h-96" />
            <div
                className={`absolute inset-0 ${
                    overlayClassName || 'bg-gradient-to-br from-primary to-primary-dark opacity-80'
                }`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold">Project Skills</h1>
                <div className="flex flex-wrap justify-center gap-6 opacity-100">
                    {techIcons.map(({ Icon, label }, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <Icon className="w-6 h-6 md:w-8 md:h-8" />
                            <span className="text-xs mt-1">{label}</span>
                        </div>
                    ))}
                </div>
                {resumeAvailable && (
                    <a
                        href={resumeUrl}
                        download
                        className="px-6 py-3 bg-white text-primary rounded-full font-semibold shadow-lg flex items-center gap-2"
                    >
                        <DocumentArrowDownIcon className="w-5 h-5" />
                        Download Resume
                    </a>
                )}
                <p className="text-sm opacity-90">Email: 309919702@qq.com | WeChat: The_5656</p>
            </div>
        </div>
    );
}
