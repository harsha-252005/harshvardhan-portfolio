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
        <section id="contact" className="snap-section !justify-center">
            <div className="cyber-grid opacity-15" />

            <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center px-10 py-10">
                <SectionTitle
                    label="— CONTACT —"
                    title="Get In Touch"
                    subtitle="Feel free to reach out for collaborations or project inquiries."
                />

                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-stretch w-full max-w-6xl mx-auto">
                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-10"
                    >
                        <div className="cyber-card p-12 rounded-[3.5rem] bloom-neon flex-1 border-white/5 relative group">
                            <div className="absolute inset-0 bg-neon-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="font-heading text-2xl font-black mb-12 text-white uppercase tracking-[0.3em] flex items-center gap-4">
                                <span className="w-10 h-[3px] bg-neon-primary/50" /> INFO
                            </h3>

                            <div className="space-y-12">
                                {[
                                    { icon: <HiMail size={28} />, label: 'Email', val: 'hv200525@gmail.com', href: null },
                                    { icon: <HiPhone size={28} />, label: 'Phone', val: '+91 9345804872', href: 'tel:9345804872' },
                                    { icon: <HiLocationMarker size={28} />, label: 'Location', val: 'Coimbatore, TN, IND', href: null },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-8 group/item"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-primary group-hover/item:scale-110 group-hover/item:border-neon-primary transition-all duration-500 shadow-[0_0_20px_rgba(255, 0, 127, 0.1)]">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[11px] uppercase tracking-[0.4em] text-text-muted font-bold mb-1">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-base font-black text-white group-hover/item:text-neon-primary transition-colors">{item.val}</a>
                                            ) : (
                                                <p className="text-base font-black text-white group-hover/item:text-neon-primary transition-colors">{item.val}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-6">
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
                                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-neon-primary hover:border-neon-primary transition-all duration-500 hover:-translate-y-3 bloom-neon"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Card */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        onSubmit={handleFinalSubmit}
                        className="cyber-card p-12 md:p-16 rounded-[4rem] space-y-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-neon-primary/5 -mr-20 -mt-20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="space-y-3">
                            <label className="text-[11px] uppercase tracking-[0.5em] font-black text-neon-primary/60 ml-1">Full Name</label>
                            <input
                                type="text" placeholder="Your Name" required
                                value={form.name}
                                className="w-full bg-white/[0.04] border-2 border-white/10 rounded-[1.5rem] px-8 py-5 outline-none focus:border-neon-primary transition-all text-base font-bold text-white placeholder:text-white/10"
                                onChange={e => setForm({ ...form, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[11px] uppercase tracking-[0.5em] font-black text-neon-primary/60 ml-1">Email Address</label>
                            <input
                                type="email" placeholder="email@example.com" required
                                value={form.email}
                                className="w-full bg-white/[0.04] border-2 border-white/10 rounded-[1.5rem] px-8 py-5 outline-none focus:border-neon-primary transition-all text-base font-bold text-white placeholder:text-white/10"
                                onChange={e => setForm({ ...form, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[11px] uppercase tracking-[0.5em] font-black text-neon-primary/60 ml-1">Message</label>
                            <textarea
                                placeholder="How can I help you?" rows={5} required
                                value={form.message}
                                className="w-full bg-white/[0.04] border-2 border-white/10 rounded-[1.5rem] px-8 py-5 outline-none focus:border-neon-primary transition-all text-base font-bold text-white resize-none placeholder:text-white/10"
                                onChange={e => setForm({ ...form, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`w-full py-6 rounded-[2.5rem] text-[13px] font-black tracking-[0.6em] flex items-center justify-center gap-4 transition-all shadow-[0_0_30px_rgba(255,0,127,0.4)] ${status === 'success' ? 'bg-green-500 text-white' : 'bg-neon-primary text-white hover:scale-105 active:scale-95'
                                } disabled:opacity-70 disabled:hover:scale-100`}
                        >
                            {status === 'loading' ? 'SENDING...' : status === 'success' ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
                            <FaPaperPlane size={18} className={`${status === 'loading' ? 'animate-bounce' : ''}`} />
                        </button>

                        {status === 'success' && (
                            <p className="text-green-400 text-center font-bold text-sm tracking-widest uppercase animate-pulse border border-green-400/30 p-4 rounded-xl">
                                Message Sent Successfully! Thank you for reaching out.
                            </p>
                        )}

                        {status === 'error' && (
                            <p className="text-red-500 text-center font-bold text-xs tracking-widest uppercase border border-red-500/30 p-4 rounded-xl">
                                {errorMsg}
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
