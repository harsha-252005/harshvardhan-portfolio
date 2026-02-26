import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiArrowNarrowDown, HiOutlineTerminal } from 'react-icons/hi';
import { VscOpenPreview } from 'react-icons/vsc';

export default function Hero() {
    return (
        <section id="home" className="snap-section">
            <div className="cyber-grid" />
            <div className="scanner-overlay" />

            {/* Background Glows (Pink) */}
            <div className="glow-orb w-[500px] h-[500px] bg-neon-primary/10 -top-20 -left-60 orb-animate opacity-40 blur-[140px]" />
            <div className="glow-orb w-[400px] h-[400px] bg-neon-secondary/5 bottom-0 -right-40 orb-animate opacity-30 blur-[130px]" style={{ animationDelay: '5s' }} />

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-6">

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="px-6 py-2 glass-pill flex items-center gap-4 mb-4 border-neon-primary/30"
                    style={{ boxShadow: '0 0 20px rgba(255, 0, 127, 0.15)' }}
                >
                    <HiOutlineTerminal className="text-neon-primary animate-pulse" size={18} />
                    <span className="text-[12px] font-black uppercase tracking-[0.5em] text-neon-primary">
                        System Pulse: Active
                    </span>
                </motion.div>

                {/* Scaled Name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative inline-block text-center"
                >
                    <h1
                        className="font-heading font-black tracking-tight leading-[1] mb-2 neon-text-gradient uppercase text-center px-4"
                        style={{ fontSize: 'clamp(2.2rem, 10vw, 6.5rem)' }}
                    >
                        HARSHVARDHAN R
                    </h1>
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-neon-primary/50 to-transparent mx-auto blur-[1px]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col items-center gap-4 md:gap-6"
                >
                    <h2 className="text-xl md:text-5xl font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white drop-shadow-[0_0_20px_rgba(255,0,127,0.5)]">
                        Full Stack Developer
                    </h2>

                    <div className="font-mono text-[10px] md:text-base text-neon-primary/90 bg-white/[0.05] border-2 border-neon-primary/20 px-6 md:px-10 py-2 md:py-2.5 glass-pill !rounded-full relative group">
                        <div className="absolute inset-0 bg-neon-primary/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <TypeAnimation
                            sequence={[
                                'Spring Boot Developer', 2000,
                                'React Specialist', 2000,
                                'Problem Solver', 2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="font-bold relative z-10 uppercase tracking-widest"
                        />
                    </div>

                    <p className="text-text-dim max-w-2xl mx-auto text-xs md:text-lg leading-relaxed tracking-wide font-medium px-6 md:px-8 opacity-90">
                        Proficient in <span className="text-white font-bold">Java, Spring Boot, React, and MySQL</span>.
                        Passionate about building <span className="text-neon-primary">scalable, high-quality</span> web applications.
                    </p>
                </motion.div>

                {/* Medium Scaled Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-6"
                >
                    <a href="#projects" className="w-full sm:w-auto bg-neon-primary text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-[11px] md:text-[12px] font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,0,127,0.4)] text-center">
                        VIEW PROJECTS
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1Es4l0DQ2ci9fgC1dVlmFYZ7lGBRo8iBx/view?pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] border-2 border-neon-primary/30 hover:border-neon-primary hover:text-white transition-all text-text-dim glass-pill group flex items-center justify-center gap-3"
                    >
                        <VscOpenPreview size={18} /> VIEW RESUME
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex items-center justify-center gap-12 mt-12"
                >
                    {[
                        { icon: <FaGithub size={26} />, href: 'https://github.com/harsha-252005' },
                        { icon: <FaLinkedin size={26} />, href: 'https://www.linkedin.com/in/harsha-vardhan-5583372a0/' },
                        { icon: <SiLeetcode size={26} />, href: 'https://leetcode.com/u/8941_harsha/' },
                    ].map((s, i) => (
                        <a
                            key={i}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-neon-primary transition-all duration-500 transform hover:scale-150 hover:drop-shadow-[0_0_20px_#ff007f]"
                        >
                            {s.icon}
                        </a>
                    ))}
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-neon-primary to-transparent opacity-20 group-hover:opacity-100 transition-opacity" />
                <span className="text-[10px] uppercase tracking-[0.6em] font-black text-neon-primary/50 group-hover:text-neon-primary">EXPLORE</span>
                <HiArrowNarrowDown size={28} className="text-neon-primary opacity-40 group-hover:opacity-100 transition-opacity" />
            </motion.div>
        </section>
    );
}
