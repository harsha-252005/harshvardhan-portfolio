import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaJava, FaReact, FaGithub, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiTableau, SiMysql, SiCplusplus } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';

const allSkills = [
    { name: 'Java', level: 85, icon: <FaJava size={28} /> },
    { name: 'Spring Boot', level: 82, icon: <SiSpringboot size={28} /> },
    { name: 'React', level: 80, icon: <FaReact size={28} /> },
    { name: 'C++', level: 78, icon: <SiCplusplus size={28} /> },
    { name: 'MySQL', level: 80, icon: <SiMysql size={28} /> },
    { name: 'Power BI / EDA', level: 60, icon: <SiTableau size={28} /> },
    { name: 'Git', level: 85, icon: <FaGithub size={28} /> },
    { name: 'AWS', level: 50, icon: <FaAws size={28} /> },
];

function SkillIndicator({ skill, inView, delay }) {
    const r = 50;
    const c = 2 * Math.PI * r;
    const offset = 0; // Set to 0 for full completion glow

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8, type: 'spring', bounce: 0.3 }}
            className="flex flex-col items-center gap-6 group"
        >
            <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-neon-primary/5 blur-2xl group-hover:bg-neon-primary/15 transition-all duration-1000" />
                <svg width="120" height="120" className="-rotate-90 relative z-10">
                    <circle
                        cx="60" cy="60" r={r}
                        fill="none"
                        stroke="rgba(255, 0, 127, 0.08)"
                        strokeWidth="6"
                    />
                    <motion.circle
                        cx="60" cy="60" r={r}
                        fill="none"
                        stroke="url(#skillGlowPink)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={c}
                        initial={{ strokeDashoffset: c }}
                        animate={inView ? { strokeDashoffset: offset } : {}}
                        transition={{ delay: delay + 0.4, duration: 2, ease: "easeOut" }}
                        className="filter drop-shadow-[0_0_15px_rgba(255, 0, 127, 0.8)]"
                    />
                    <defs>
                        <linearGradient id="skillGlowPink" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff007f" />
                            <stop offset="100%" stopColor="#00e5ff" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-neon-primary group-hover:scale-125 transition-transform duration-500">
                    {skill.icon}
                </div>
            </div>
            <div className="text-center">
                <h4 className="font-heading text-[12px] font-black text-white uppercase tracking-widest group-hover:text-neon-primary transition-colors">
                    {skill.name}
                </h4>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/harsha-252005')
            .then(r => r.json()).then(d => setRepos(d.public_repos)).catch(() => { });
    }, []);

    return (
        <section id="skills" className="snap-section !justify-center">
            <div className="cyber-grid opacity-15" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center px-10">
                <SectionTitle label="— ARSENAL —" title="Tech Stack" subtitle="Proficient in building modern, scalable web applications with industry-standard tools." />

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-40 mb-16 md:mb-20 w-full max-w-5xl">
                    {[
                        { label: 'Total Projects', val: 5 },
                        { label: 'Public Repos', val: repos ?? 10 },
                        { label: 'Certifications', val: 6 },
                    ].map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <h3 className="text-5xl md:text-8xl font-black font-mono text-white group-hover:text-neon-primary transition-colors duration-700 drop-shadow-[0_0_20px_rgba(255, 0, 127, 0.4)]">
                                {s.val}<span className="text-neon-primary/30 tracking-tighter">+</span>
                            </h3>
                            <p className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black text-text-muted mt-3 md:mt-4 group-hover:text-neon-primary transition-colors">{s.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 md:gap-y-20 gap-x-8 md:gap-x-32 justify-items-center w-full max-w-6xl">
                    {allSkills.map((skill, i) => (
                        <SkillIndicator key={skill.name} skill={skill} inView={inView} delay={i * 0.08} />
                    ))}
                </div>
            </div>
        </section>
    );
}
