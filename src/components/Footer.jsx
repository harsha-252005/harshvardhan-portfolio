import { FaHeart } from 'react-icons/fa';
import VisitorCounter from '../sections/VisitorCounter';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="snap-section relative flex flex-col items-center justify-center gap-16 bg-cyber-bg/98 backdrop-blur-3xl border-t border-white/10 py-32">
            <div className="cyber-grid opacity-10" />

            <div className="relative z-10 flex flex-col items-center gap-16">
                <div className="text-center px-6">
                    <h2 className="font-heading text-2xl sm:text-4xl md:text-7xl font-black neon-text-gradient uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-4 md:mb-6">
                        HARSHVARDHAN R
                    </h2>
                    <div className="w-32 md:w-48 h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-neon-primary to-transparent mx-auto mb-6 md:mb-8" />
                    <p className="text-[10px] md:text-[14px] uppercase font-black tracking-[0.3em] md:tracking-[0.7em] text-text-muted max-w-[280px] md:max-w-none mx-auto leading-relaxed">
                        Full Stack Developer | Spring Boot | React | Problem Solver
                    </p>
                </div>

                <div className="group transition-transform duration-700 hover:scale-110 bloom-neon p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 shadow-[0_0_40px_rgba(255,0,127,0.1)]">
                    <VisitorCounter />
                </div>

                <div className="flex flex-col items-center gap-6 md:gap-8 text-text-muted text-[10px] md:text-[12px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase opacity-80 mt-8 md:mt-12">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
                        <span>© {year} ALL RIGHTS RESERVED</span>
                        <span className="hidden sm:inline">|</span>
                        <span className="flex items-center gap-2 sm:gap-5">
                            MADE WITH <FaHeart className="text-neon-primary animate-pulse drop-shadow-[0_0_12px_#ff007f]" />
                        </span>
                    </div>
                    <p className="text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] text-neon-primary/40">COIMBATORE — TN — INDIA</p>
                </div>
            </div>
        </footer>
    );
}
