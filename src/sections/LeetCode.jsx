import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SiLeetcode } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import SectionTitle from '../components/SectionTitle';

function AnimNum({ target }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let s = 0;
        const t = setInterval(() => { s += Math.ceil(target / 60); if (s >= target) { setCount(target); clearInterval(t); } else setCount(s); }, 1000 / 60);
        return () => clearInterval(t);
    }, [inView, target]);
    return <span ref={ref}>{count}+</span>;
}

export default function LeetCode() {
    const { isDark } = useTheme();

    return (
        <section id="leetcode" className={`section-spacing ${isDark ? 'bg-bg' : 'bg-bg-light'}`}>
            <div className="max-w-4xl mx-auto px-6 text-center">
                <SectionTitle label="Competitive" title="LeetCode Journey" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`p-10 rounded-2xl flex flex-col items-center card ${isDark ? 'card-dark' : 'card-light'}`}
                >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${isDark ? 'bg-yellow-500/10' : 'bg-yellow-50'}`}>
                        <SiLeetcode size={32} className="text-yellow-500" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-10 w-full max-w-2xl">
                        {[
                            { label: 'Solved', value: 50 },
                            { label: 'Easy', value: 30 },
                            { label: 'Medium', value: 15 },
                            { label: 'Hard', value: 5 },
                        ].map(s => (
                            <div key={s.label}>
                                <div className={`text-3xl font-bold font-mono mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    <AnimNum target={s.value} />
                                </div>
                                <div className={`text-[10px] tracking-widest uppercase font-bold text-text-muted`}>{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <a href="https://leetcode.com/u/8941_harsha/" target="_blank" rel="noopener noreferrer"
                        className={`text-xs font-bold tracking-widest uppercase flex items-center gap-2 py-3 px-8 rounded-full border transition-all duration-300 ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/5 text-gray-900 hover:bg-black/5'
                            }`}>
                        View Profile <FaExternalLinkAlt size={10} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
