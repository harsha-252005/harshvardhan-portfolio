import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState('');

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const response = await fetch("https://formsubmit.co/ajax/hv200525@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    _subject: "PORTFOLIO: Direct Inquiry From Client",
                    _captcha: "false"
                })
            });

            const result = await response.json();
            if (result.success === "true") {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 10000);
            } else {
                setStatus('error');
                setErrorMsg(result.message || 'Verification failed on server.');
            }
        } catch (error) {
            console.error("Transmission Error:", error);
            setStatus('error');
            setErrorMsg('Network error. Check connection or AdBlockers.');
        }
    };

    return (
        <section id="contact" className="snap-section !justify-center !py-24 md:!py-32 bg-[#09090b]">
            <div className="cyber-grid opacity-10" />

            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center px-6 md:px-12">
                <SectionTitle
                    label="— CONTACT —"
                    title="Get In Touch"
                    subtitle="Feel free to reach out for collaborations or project inquiries."
                />

                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-stretch w-full mt-12 md:mt-20">

                    {/* Info Card - Pattern Matched + Code Aesthetic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group h-full"
                    >
                        {/* Signature Decorative Corner Accents */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-neon-primary/40 rounded-tl-3xl group-hover:scale-110 transition-transform duration-700 z-20" />
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-neon-primary/40 rounded-br-3xl group-hover:scale-110 transition-transform duration-700 z-20" />

                        <div className="cyber-card p-10 md:p-14 lg:p-16 rounded-[2rem] border border-neon-primary/30 bg-white/[0.01] relative overflow-hidden shadow-2xl h-full flex flex-col">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-primary/40 to-transparent" />

                            <div className="mb-14 md:mb-16">
                                <h3 className="font-mono text-xl md:text-2xl font-bold text-white flex items-center gap-5">
                                    <HiLocationMarker className="text-neon-primary" size={24} />
                                    info_details
                                </h3>
                            </div>

                            <div className="space-y-10 md:space-y-12 flex-1">
                                {[
                                    { label: 'your_email', val: 'hv200525@gmail.com', href: null },
                                    { label: 'your_phone', val: '+91 9345804872', href: 'tel:9345804872' },
                                    { label: 'your_location', val: 'Coimbatore, TN, IND', href: null },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <p className="font-mono text-[12px] md:text-[13px] text-zinc-500 italic block ml-1">
                                            // {item.label}
                                        </p>
                                        <div className="bg-[#0c0c0e] border border-white/5 rounded-xl px-7 py-5 group-hover:border-neon-primary/20 transition-all duration-500 shadow-inner">
                                            {item.href ? (
                                                <a href={item.href} className="text-base md:text-lg font-mono font-medium text-zinc-300 hover:text-white transition-colors">{item.val}</a>
                                            ) : (
                                                <p className="text-base md:text-lg font-mono font-medium text-zinc-300">{item.val}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 md:mt-20 pt-10 border-t border-white/5 flex gap-5 justify-center md:justify-start">
                                {[
                                    { icon: <FaGithub size={22} />, href: 'https://github.com/harsha-252005' },
                                    { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/harsha-vardhan-5583372a0/' },
                                    { icon: <SiLeetcode size={22} />, href: 'https://leetcode.com/u/8941_harsha/' },
                                ].map((s, i) => (
                                    <a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-neon-primary hover:border-neon-primary transition-all duration-500 hover:-translate-y-2"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Card - Pattern Matched + Code Aesthetic */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group h-full"
                    >
                        {/* Signature Decorative Corner Accents */}
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-neon-primary/40 rounded-bl-3xl group-hover:scale-110 transition-transform duration-700 z-20" />
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-neon-primary/40 rounded-tr-3xl group-hover:scale-110 transition-transform duration-700 z-20" />

                        <div className="cyber-card p-10 md:p-14 lg:p-16 rounded-[2rem] border border-neon-primary/30 bg-white/[0.01] relative overflow-hidden shadow-2xl h-full flex flex-col">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-primary/40 to-transparent" />

                            <form onSubmit={handleFinalSubmit} className="space-y-10 md:space-y-12 flex flex-col h-full">
                                <div className="flex items-center gap-5 mb-8">
                                    <FaPaperPlane className="text-neon-primary" size={24} />
                                    <h3 className="text-xl md:text-3xl font-bold text-white">Send a Message</h3>
                                </div>

                                <div className="space-y-10 flex-1">
                                    <div className="space-y-3">
                                        <label className="font-mono text-[13px] md:text-[14px] text-zinc-500 italic block ml-1">
                                            // your_name
                                        </label>
                                        <input
                                            type="text" placeholder="John Doe" required
                                            value={form.name}
                                            className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-7 py-5 md:py-6 outline-none focus:border-neon-primary/50 transition-all text-base font-mono text-zinc-200 placeholder:text-zinc-800 shadow-inner"
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="font-mono text-[13px] md:text-[14px] text-zinc-500 italic block ml-1">
                                            // your_email
                                        </label>
                                        <input
                                            type="email" placeholder="john@example.com" required
                                            value={form.email}
                                            className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-7 py-5 md:py-6 outline-none focus:border-neon-primary/50 transition-all text-base font-mono text-zinc-200 placeholder:text-zinc-800 shadow-inner"
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="font-mono text-[13px] md:text-[14px] text-zinc-500 italic block ml-1">
                                            // your_message
                                        </label>
                                        <textarea
                                            placeholder="Hey, I'd like to discuss..." rows={4} required
                                            value={form.message}
                                            className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-7 py-6 md:py-8 outline-none focus:border-neon-primary/50 transition-all text-base font-mono text-zinc-200 resize-none placeholder:text-zinc-800 shadow-inner min-h-[140px] md:min-h-[180px]"
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="pt-8 mt-auto">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className={`w-full py-6 md:py-7 rounded-xl font-mono text-sm md:text-lg font-bold flex items-center justify-center gap-5 transition-all duration-300 ${status === 'success'
                                                ? 'bg-green-500 text-black'
                                                : 'bg-neon-primary text-[#09090b] hover:brightness-110 active:scale-[0.98] shadow-[0_0_40px_rgba(255,0,127,0.4)]'
                                            } disabled:opacity-70`}
                                    >
                                        <FaPaperPlane size={20} className={status === 'loading' ? 'animate-pulse' : ''} />
                                        {status === 'loading' ? 'sending...' : status === 'success' ? 'message_sent' : 'send_message()'}
                                    </button>

                                    {status === 'success' && (
                                        <p className="text-green-400 text-center font-mono text-xs md:text-sm animate-pulse pt-4">
                                            // transmission_successful: I'll get back to you soon.
                                        </p>
                                    )}

                                    {status === 'error' && (
                                        <p className="text-red-400 text-center font-mono text-xs md:text-sm pt-4">
                                            // error: {errorMsg}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
