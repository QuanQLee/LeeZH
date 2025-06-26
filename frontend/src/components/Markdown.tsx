import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface Props {
    children: string;
}

export default function Markdown({ children }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="prose max-w-none dark:prose-invert"
        >
            <ReactMarkdown>{children}</ReactMarkdown>
        </motion.div>
    );
}
