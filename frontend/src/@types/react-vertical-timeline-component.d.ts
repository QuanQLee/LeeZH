/* frontend/src/@types/react-vertical-timeline-component.d.ts */

declare module 'react-vertical-timeline-component' {
    import * as React from 'react';

    type PropsWithChildren<P = unknown> = P & { children?: React.ReactNode };

    export const VerticalTimeline: React.FC<
        PropsWithChildren<{
            animate?: boolean;
            className?: string;
            lineColor?: string;
            layout?: '1-column' | '2-columns';
        }>
    >;

    export const VerticalTimelineElement: React.FC<
        PropsWithChildren<{
            className?: string;
            contentStyle?: React.CSSProperties;
            contentArrowStyle?: React.CSSProperties;
            iconStyle?: React.CSSProperties;
            icon?: React.ReactNode;
            date?: string | React.ReactNode;
            position?: 'left' | 'right';
        }>
    >;
}
