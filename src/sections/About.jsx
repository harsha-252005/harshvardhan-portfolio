import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar, HiLightBulb, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import SectionTitle from '../components/SectionTitle';

export default function About() {
    const coreIdentityPoints = [
        { icon: <HiLightningBolt className="text-neon-primary" />, label: "Scalable Apps", desc: "Passionate about building high-quality, scalable web applications." },
        { icon: <HiLightBulb className="text-neon-secondary" />, label: "Problem Solver", desc: "Detail-oriented and always eager to solve complex engineering problems." },
        { icon: <HiCheckCircle className="text-neon-purple" />, label: "Fast Learner", desc: "Proficient in modern technologies and quick to adapt to new stacks." }
    ];

    return (
        <section id="about" className="snap-section relative !justify-center overflow-y-auto md:overflow-hidden">
            <div className="cyber-grid opacity-15" />

            <div className="relative z-10 w-full max-w-6xl flex flex-col items-center px-6 py-24 md:py-40 space-y-32 md:space-y-48">
                <SectionTitle
                    label="— ABOUT ME —"
                    title="Core Identity"
                    subtitle="Energetic and detail-oriented engineering student dedicated to building high-quality digital solutions."
                />

                <div className="grid md:grid-cols-3 gap-8 md:gap-10 w-full max-w-5xl">
                    {coreIdentityPoints.map((point, i) => (
                        <motion.div
                            key={point.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="cyber-card p-8 md:p-10 rounded-[2.5rem] border-white/5 hover:border-neon-primary/30 flex flex-col items-center text-center group"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-neon-primary transition-all duration-500 shadow-[0_0_25px_rgba(255,255,255,0.05)]">
                                {point.icon}
                            </div>
                            <h4 className="text-white font-black uppercase text-sm md:text-base mb-4 tracking-[0.2em]">{point.label}</h4>
                            <p className="text-text-muted text-[11px] md:text-[12px] leading-relaxed tracking-wide px-2">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Explicit Vertical Spacer */}
                <div className="h-12 md:h-24 w-full" />

                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="cyber-card p-10 md:p-16 rounded-[3rem] md:rounded-[3.5rem] w-full max-w-4xl relative overflow-hidden group bloom-neon"
                >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-primary/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 relative z-10">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] md:rounded-[2.5rem] bg-neon-primary/10 border-2 border-neon-primary/30 flex items-center justify-center text-neon-primary shadow-[0_0_40px_rgba(255,0,127,0.15)] group-hover:rotate-[10deg] transition-all duration-700">
                            <HiAcademicCap size={56} className="scale-75 md:scale-100" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="font-heading text-2xl md:text-5xl font-black mb-1 text-white uppercase tracking-tight">
                                B.Tech — Information Tech
                            </h3>
                            <p className="text-neon-primary mb-4 md:mb-6 tracking-[0.4em] uppercase text-[10px] md:text-[12px] font-black drop-shadow-[0_0_10px_rgba(255,0,127,0.4)]">
                                Sri Krishna College of Engineering and Technology
                            </p>

                            <p className="text-neon-secondary mb-6 md:mb-8 font-black uppercase tracking-[0.6em] text-[9px] md:text-[10px] opacity-70">
                                Coimbatore — SKCET
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-12 text-[10px] md:text-[12px] text-text-dim font-black tracking-[0.2em] uppercase">
                                <span className="flex items-center gap-3">
                                    <HiCalendar className="text-neon-primary" size={20} /> 2023 - 2027
                                </span>
                                <span className="flex items-center gap-3">
                                    <HiLocationMarker className="text-neon-primary" size={20} /> Tamil Nadu, IND
                                </span>
                            </div>
                        </div>

                        <div className="relative group/badge mt-4 md:mt-0">
                            <div className="absolute inset-0 bg-neon-primary blur-2xl opacity-10 group-hover/badge:opacity-30 transition-opacity" />
                            <div className="relative px-10 md:px-12 py-6 md:py-8 rounded-[2rem] md:rounded-[2.5rem] bg-cyber-bg/80 border-2 border-neon-primary/40 text-neon-primary font-black text-4xl md:text-5xl shadow-[0_0_30px_rgba(255,0,127,0.2)] transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                8.0 <span className="text-[10px] block opacity-50 uppercase tracking-[0.1em] mt-2">CGPA</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
