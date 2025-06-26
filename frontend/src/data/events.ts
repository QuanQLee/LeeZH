export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;  // Markdown 字符串
    icon?: string;        // Heroicons 名称
    cover?: string;  // <—— 关键！（图片 url 可选）当作大背景，比如页面顶部的横幅大图、或者是视觉背景
    image?: string;    // 事件卡片的小配图
    images?: string[]; // 详情页多图轮播
}
const toUrl = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

export const events: TimelineEvent[] = [
    {
        id: 'e1',
        date: '2025-06-01——2025-06-15',
        title: 'MVP电商系统',
        description: '最小可使用的一个**微服务**和Web前端的电商系统。',
        icon: 'ShoppingCartIcon',
        cover: toUrl('/images/my-background.jpg'), // 只要加上 image 字段就行
        image: toUrl('/images/my-project.png'), // 只要加上 image 字段就行
        images: [
            toUrl('/images/my-project1.png'),
            toUrl('/images/my-project2.png'),
            toUrl('/images/my-project3.png'),
        ],
    },
    {
        id: 'e2',
        date: '2025-06-15——2025-06-20',
        title: '爬虫 1.0 发布',
        description: '上线第一个版本的核心功能：\n\n- 基础可使用\n- 爬取学习文本\n- 爬取视频学习\n- 遵守爬虫规则和风险',
        icon: 'BugAntIcon',
        image: toUrl('/images/pachong-project.png'), // 只要加上 image 字段就行
        images: [
            toUrl('/images/pachong-project1.png'),
            toUrl('/images/pachong-project2.png'),
            toUrl('/images/pachong-project3.png'),
        ],
    },
    {
        id: 'e3',
        date: '2025-05-25——2025-05-30',
        title: '时间轴Web个人网站',
        description: '就是现在看到的这个项目。\n\n- 纵向时间轴\n- 事件查看\n- 基础视觉风格\n- 加入视差背景、主线进度条、Scroll‑Snap 与动态内页。',
        icon: 'GlobeAltIcon',   // Heroicons 名称，可省
    },
    {
        id: 'e4',
        date: '2025-05-18——2025-05-25',
        title: '个人文章项目网站',
        description: 'URL:https://quanqlee.github.io/Pe-Website/ \n\n- 带后端的个人发布文章的网站\n- 有主页\n- 文章端\n- 项目端\n- 可发送给我邮件端\n- 带管理后台',
        icon: 'DocumentTextIcon',   // Heroicons 名称，可省
        image: toUrl('/images/pe-web-project.png'), // 只要加上 image 字段就行
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
        title: '第一个个人网站',
        description: '最小可运行版本个人网站，有最基础的功能',
        icon: 'CommandLineIcon',   // Heroicons 名称，可省
        cover: toUrl('/images/profile-banner3.jpg'),    // 详情页横幅，可省
        image: toUrl('/images/fi-web-project.png'), // 只要加上 image 字段就行
        images: [
            toUrl('/images/fi-web-project1.png'),
        ],
    },
    {
        id: 'e6',
        date: '2024-12-26——2025-1-5',
        title: '项目',
        description: '各种小项目、不值一提，以后再放上来',
        icon: 'PuzzlePieceIcon',   // Heroicons 名称，可省
        cover: toUrl('/images/profile-banner3.jpg')    // 详情页横幅，可省
    },
];

