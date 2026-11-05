import React, { useState, useRef } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Copy,
    Check,
    ArrowRight,
    ArrowUpRight,
    Loader2,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';
import { FaGithub, FaUpwork } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

const Contact = ({ isStandalone = false }) => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedGithub, setCopiedGithub] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('lemigobena12@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText('+251939740755');
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    const handleCopyGithub = () => {
        navigator.clipboard.writeText('https://github.com/lemigobena');
        setCopiedGithub(true);
        setTimeout(() => setCopiedGithub(false), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "lemi'sportfolio";
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kr8svin';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'FPKNvXJdV5KapMqmI';

        emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
            .then(() => {
                setStatus('success');
                if (formRef.current) formRef.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((err) => {
                console.error('EmailJS send error:', err);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section
            id="contact"
            className="w-full min-h-screen lg:h-screen lg:max-h-[1080px] flex flex-col justify-between py-6 sm:py-8 lg:py-8 relative select-text bg-transparent text-[#111827] border-t border-neutral-200/80 overflow-hidden"
            aria-label="Contact and Inquiries"
        >
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-between h-full">

                {/* 1. Clean Section Header */}
                <div className="flex flex-col items-start gap-1.5 shrink-0 mb-4 lg:mb-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight font-display">
                        Get in Touch
                    </h2>
                    <p className="text-neutral-600 max-w-xl text-xs sm:text-sm font-normal leading-relaxed">
                        Have a project in mind, an engineering opportunity, or a technical inquiry? Reach out directly or leave a message below.
                    </p>
                </div>

                {/* 2. Main Content: Direct Channels (5 cols) + Message Form (7 cols) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">

                    {/* LEFT COLUMN: Direct Channels + Upwork */}
                    <div className="lg:col-span-5 space-y-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                            Direct Channels
                        </span>

                        <div className="space-y-2.5">
                            {/* Email */}
                            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs group hover:border-[#111827] transition-all">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-[#111827] shrink-0">
                                        <Mail size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[9.5px] font-mono uppercase text-neutral-400 font-semibold block">Email</span>
                                        <a
                                            href="mailto:lemigobena12@gmail.com"
                                            className="text-xs sm:text-sm font-mono font-bold text-[#111827] hover:underline block truncate"
                                        >
                                            lemigobena12@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="p-1.5 rounded-xl text-neutral-400 hover:text-[#111827] hover:bg-neutral-100 transition-all cursor-pointer shrink-0"
                                    title="Copy Email"
                                >
                                    {copiedEmail ? <Check size={15} className="text-emerald-600 stroke-[2.5]" /> : <Copy size={15} />}
                                </button>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs group hover:border-[#111827] transition-all">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-[#111827] shrink-0">
                                        <Phone size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[9.5px] font-mono uppercase text-neutral-400 font-semibold block">Phone</span>
                                        <a
                                            href="tel:+251939740755"
                                            className="text-xs sm:text-sm font-mono font-bold text-[#111827] hover:underline block truncate"
                                        >
                                            +251 939 740 755
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopyPhone}
                                    className="p-1.5 rounded-xl text-neutral-400 hover:text-[#111827] hover:bg-neutral-100 transition-all cursor-pointer shrink-0"
                                    title="Copy Phone"
                                >
                                    {copiedPhone ? <Check size={15} className="text-emerald-600 stroke-[2.5]" /> : <Copy size={15} />}
                                </button>
                            </div>

                            {/* GitHub */}
                            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs group hover:border-[#111827] transition-all">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-[#111827] shrink-0">
                                        <FaGithub size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[9.5px] font-mono uppercase text-neutral-400 font-semibold block">GitHub</span>
                                        <a
                                            href="https://github.com/lemigobena"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs sm:text-sm font-mono font-bold text-[#111827] hover:underline block truncate"
                                        >
                                            github.com/lemigobena
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 shrink-0">
                                    <button
                                        type="button"
                                        onClick={handleCopyGithub}
                                        className="p-1.5 rounded-xl text-neutral-400 hover:text-[#111827] hover:bg-neutral-100 transition-all cursor-pointer"
                                        title="Copy GitHub URL"
                                    >
                                        {copiedGithub ? <Check size={15} className="text-emerald-600 stroke-[2.5]" /> : <Copy size={15} />}
                                    </button>
                                    <a
                                        href="https://github.com/lemigobena"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-xl text-neutral-400 hover:text-[#111827] hover:bg-neutral-100 transition-all"
                                        title="Open GitHub"
                                    >
                                        <ArrowUpRight size={15} />
                                    </a>
                                </div>
                            </div>

                            {/* Hire Me on Upwork */}
                            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs group hover:border-[#14a800] transition-all">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-9 h-9 rounded-xl bg-[#14a800]/10 text-[#14a800] flex items-center justify-center shrink-0">
                                        <FaUpwork size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[9.5px] font-mono uppercase text-neutral-400 font-semibold block">Freelance / Contract</span>
                                        <a
                                            href="https://www.upwork.com/freelancers/~01b4b47e3004d3a932?mp_source=share"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs sm:text-sm font-mono font-bold text-[#111827] hover:text-[#14a800] hover:underline block truncate"
                                        >
                                            Hire me on Upwork
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href="https://www.upwork.com/freelancers/~01b4b47e3004d3a932?mp_source=share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111827] hover:bg-[#14a800] text-white text-xs font-mono font-semibold transition-all shrink-0 shadow-2xs"
                                >
                                    <span>Hire</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            </div>

                            {/* Location */}
                            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-[#111827] shrink-0">
                                        <MapPin size={16} />
                                    </div>
                                    <div>
                                        <span className="text-[9.5px] font-mono uppercase text-neutral-400 font-semibold block">Location</span>
                                        <span className="text-xs sm:text-sm font-bold text-[#111827] block">
                                            Addis Ababa, Ethiopia
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[10.5px] font-mono text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                                    Remote Ready
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Clean Message Form */}
                    <div className="lg:col-span-7">
                        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-xs">
                            <div className="mb-5">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] font-display">
                                    Send a Message
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                                    Fill out the form below and I'll get back to you within 24 hours.
                                </p>
                            </div>

                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="user_name" className="text-xs font-mono font-medium text-neutral-600 block">
                                            Name <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-[#111827] text-sm placeholder:text-neutral-400 focus:bg-white focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="user_email" className="text-xs font-mono font-medium text-neutral-600 block">
                                            Email <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            required
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-[#111827] text-sm placeholder:text-neutral-400 focus:bg-white focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-mono font-medium text-neutral-600 block">
                                        Subject <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        placeholder="What is this regarding?"
                                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-[#111827] text-sm placeholder:text-neutral-400 focus:bg-white focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-mono font-medium text-neutral-600 block">
                                        Message <span className="text-rose-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Your message..."
                                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-[#111827] text-sm placeholder:text-neutral-400 focus:bg-white focus:border-[#111827] focus:ring-1 focus:ring-[#111827] outline-none transition-all resize-none leading-relaxed"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 text-sm text-white bg-[#111827] hover:bg-neutral-800 transition-all active:scale-[0.99] cursor-pointer shadow-xs disabled:opacity-60"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <Loader2 className="animate-spin" size={16} />
                                            <span>Sending message...</span>
                                        </>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle2 size={16} className="text-emerald-400" />
                                            <span>Message sent successfully!</span>
                                        </>
                                    ) : status === 'error' ? (
                                        <>
                                            <AlertCircle size={16} />
                                            <span>Failed to send. Please retry.</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <ArrowRight size={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* 3. Integrated Compact Footer Bar */}
                <Footer variant="compact" />

            </div>
        </section>
    );
};

export default Contact;
