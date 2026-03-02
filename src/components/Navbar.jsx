import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: '.about()', id: 'about' },
    { name: '.skills()', id: 'skills' },
    { name: '.projects()', id: 'projects' },
    { name: '.contact()', id: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // More precise active section detection
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActive(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-full max-w-fit px-2 md:px-6 pointer-events-none flex justify-center">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-1 md:gap-2 p-1.5 md:p-2.5 rounded-full border border-white/10 bg-[#09090b]/60 backdrop-blur-2xl shadow-2xl pointer-events-auto transition-all duration-500 ${scrolled ? 'scale-95 border-neon-primary/40' : ''
                    }`}
                style={{
                    boxShadow: scrolled ? '0 0 50px rgba(0,0,0,0.6), 0 0 30px rgba(255, 0, 127, 0.1)' : '0 15px 40px rgba(0,0,0,0.4)'
                }}
            >
                <div className="flex items-center gap-2">
                    {/* Home Logo/Icon */}
                    <button
                        onClick={() => scrollTo('home')}
                        className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all duration-300 ${active === 'home' ? 'text-neon-primary bg-white/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" strokeWidth="2.5">
                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </button>
                    <div className="h-6 w-[1px] bg-white/10 mx-1" />
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="relative px-3 md:px-7 py-2 md:py-3 group"
                        >
                            {active === link.id && (
                                <motion.div
                                    layoutId="navActivePill"
                                    className="absolute inset-x-1 inset-y-1 bg-white/10 rounded-full border border-white/5"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    style={{
                                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
                                    }}
                                />
                            )}
                            <span className={`relative z-10 text-[10px] md:text-[13px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-300 ${active === link.id
                                ? 'text-neon-primary drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]'
                                : 'text-zinc-400 group-hover:text-white'
                                }`}>
                                {link.name.replace('.', '').replace('()', '')}
                            </span>
                            {/* Hover underline effect */}
                            {active !== link.id && (
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-neon-primary/50 group-hover:w-1/2 transition-all duration-300" />
                            )}
                        </button>
                    ))}
                </div>
                <div className="w-[1px] h-6 bg-white/10 mx-2" />
                {/* Integrated "Let's Talk" button - Larger & More Spaced */}
                <button
                    onClick={() => scrollTo('contact')}
                    className="ml-1 md:ml-2 px-6 md:px-10 py-2.5 md:py-3.5 rounded-full bg-neon-primary text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,0,127,0.4)] hover:shadow-[0_0_40px_rgba(255,0,127,0.6)]"
                >
                    talk
                </button>
            </motion.nav>
        </header>
    );

}

