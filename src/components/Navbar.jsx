import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
                    if (rect.top >= -100 && rect.top <= 200) {
                        setActive(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-auto max-w-[95vw] md:max-w-none ${scrolled ? 'scale-95' : 'scale-100'}`}>
            <div
                className="glass-pill px-6 md:px-12 py-4 flex items-center gap-6 md:gap-14 border-neon-primary/20 bloom-neon overflow-x-auto scrollbar-hide no-scrollbar whitespace-nowrap"
                style={{ border: '1px solid rgba(255, 0, 127, 0.2)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all duration-300 relative py-1 group ${active === link.id ? 'text-neon-primary' : 'text-text-muted hover:text-white'
                            }`}
                    >
                        {link.name}
                        {active === link.id && (
                            <motion.div
                                layoutId="navActivePink"
                                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neon-primary shadow-[0_0_10px_#ff007f]"
                            />
                        )}
                        <div className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-primary/50 transition-all duration-300 group-hover:w-full ${active === link.id ? 'hidden' : 'block'}`} />
                    </a>
                ))}
            </div>
        </nav>
    );
}
