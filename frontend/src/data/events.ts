export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;  // Markdown string
    icon?: string;        // Heroicons name
    cover?: string;  // Key! optional image url used as banner or background
    image?: string;    // small image for event card
    images?: string[]; // carousel images on detail page
}
const toUrl = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

export const events: TimelineEvent[] = [
    {
        id: 'e1',
        date: '2025-06-01——2025-06-15',
        title: 'MVP E-commerce System',
        description: 'A minimal usable microservice and web front-end e-commerce system.',
        icon: 'ShoppingCartIcon',
        cover: toUrl('/images/my-background.jpg'), // provide image field
        image: toUrl('/images/my-project.png'), // provide image field
        images: [
            toUrl('/images/my-project1.png'),
            toUrl('/images/my-project2.png'),
            toUrl('/images/my-project3.png'),
        ],
    },
    {
        id: 'e2',
        date: '2025-06-15——2025-06-20',
        title: 'Crawler 1.0 Released',
        description: 'First release with core features:\n\n- Basic usability\n- Crawl text tutorials\n- Crawl video tutorials\n- Follow crawler rules and mitigate risks',
        icon: 'BugAntIcon',
        image: toUrl('/images/pachong-project.png'), // provide image field
        images: [
            toUrl('/images/pachong-project1.png'),
            toUrl('/images/pachong-project2.png'),
            toUrl('/images/pachong-project3.png'),
        ],
    },
    {
        id: 'e3',
        date: '2025-05-25——2025-05-30',
        title: 'Timeline Personal Website',
        description: 'This is the project you are viewing.\n\n- Vertical timeline\n- Event viewer\n- Basic visual style\n- Parallax background, main progress bar, Scroll-Snap and dynamic pages.',
        icon: 'GlobeAltIcon',   // Heroicons name, optional
    },
    {
        id: 'e4',
        date: '2025-05-18——2025-05-25',
        title: 'Personal Article Website',
        description: 'URL:https://quanqlee.github.io/Pe-Website/ \n\n- Personal blog with backend\n- Home page\n- Article section\n- Project section\n- Contact form\n- Admin panel',
        icon: 'DocumentTextIcon',   // Heroicons name, optional
        image: toUrl('/images/pe-web-project.png'), // provide image field
        images: [
            toUrl('/images/pe-web-project1.png'),
            toUrl('/images/pe-web-project2.png'),
            toUrl('/images/pe-web-project3.png'),
            toUrl('/images/pe-web-project4.png'),
        ],
    },
    {
        id: 'e5',
        date: '2024-12-22——2024-12-26',
        title: 'First Personal Website',
        description: 'Minimal viable personal website with basic features',
        icon: 'CommandLineIcon',   // Heroicons name, optional
        cover: toUrl('/images/profile-banner3.jpg'),    // detail page banner, optional
        image: toUrl('/images/fi-web-project.png'), // provide image field
        images: [
            toUrl('/images/fi-web-project1.png'),
        ],
    },
    {
        id: 'e6',
        date: '2024-12-26——2025-1-5',
        title: 'Misc Projects',
        description: 'Various small projects, nothing noteworthy yet',
        icon: 'PuzzlePieceIcon',   // Heroicons name, optional
        cover: toUrl('/images/profile-banner3.jpg')    // detail page banner, optional
    },
];

