import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'LMS Platform',
        description: 'A comprehensive Learning Management System designed to bridge the educational gap in rural areas.',
        tech: ['React', 'Spring Boot', 'MySQL'],
        github: 'https://github.com/harsha-252005/lms_rural.git',
        category: 'Full Stack',
    },
    {
        title: 'FarmNect',
        description: 'An innovative Agri-tech platform connecting farmers directly to consumers and markets.',
        tech: ['Spring Boot', 'React', 'MySQL'],
        github: 'https://github.com/harsha-252005/Farmnect.git',
        category: 'Full Stack',
    },
    {
        title: 'Freelance Platform',
        description: 'A robust marketplace for freelancers and clients to collaborate on technical projects.',
        tech: ['Java', 'Spring Boot', 'REST API'],
        github: 'https://github.com/harsha-252005/FreeLancer_Platform.git',
        category: 'Backend',
    },
    {
        title: 'Real Estate Listing',
        description: 'A modern platform for property management, allowing users to list, search, and manage real estate assets.',
        tech: ['React', 'Spring Boot', 'MySQL'],
        github: 'https://github.com/harsha-252005',
        category: 'Full Stack',
    },
    {
        title: 'Migo Health',
        description: 'Migo Health Record System: A secure digital record platform for managing migrant health data effectively.',
        tech: ['React', 'Spring Boot', 'REST API'],
        github: 'https://github.com/harsha-252005',
        category: 'Full Stack',
    },
];

const filters = ['All Projects', 'Full Stack', 'Backend'];

export default function Projects() {
    const [active, setActive] = useState('All Projects');
    const filtered = active === 'All Projects' ? projects : projects.filter(p => p.category === active);

    return (
        <section id="projects" className="snap-section !justify-center pt-24">
            <div className="cyber-grid opacity-20" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-10 text-center flex flex-col items-center">
                <SectionTitle
                    label="— PORTFOLIO —"
                    title="Featured Projects"
                    subtitle="Explore a selection of my works built with Spring Boot, React, and Java."
                />

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-24 mb-16 md:mb-20 border-b border-white/5 pb-8 md:pb-10 max-w-5xl mx-auto w-full">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActive(filter)}
                            className={`text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] transition-all duration-500 relative py-3 md:py-4 hover:scale-110 ${active === filter ? 'text-neon-primary drop-shadow-[0_0_15px_rgba(255, 0, 127, 0.7)]' : 'text-text-muted hover:text-white'
                                }`}
                        >
                            {filter}
                            {active === filter && (
                                <motion.div
                                    layoutId="activeFilterPink"
                                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-neon-primary shadow-[0_0_15px_#ff007f]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-16 w-full max-w-7xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, i) => (
                            <ProjectCard key={p.title} project={p} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
