import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Note: You need to replace these with your actual IDs from EmailJS dashboard
        // Service ID, Template ID, and Public Key
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            formRef.current, 
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                    Get in <span className="text-gradient">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Have an idea or a project in mind? Let's build something amazing together.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Information Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="glass rounded-3xl p-8 flex items-start gap-6 group hover:bg-foreground/[0.04] transition-colors">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Mail className="text-primary" size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-2">Email</h4>
                            <a href="mailto:lemigobena12@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors group-hover:text-primary block truncate max-w-[200px]">
                                lemigobena12@gmail.com
                            </a>
                            <p className="text-[10px] text-muted-foreground mt-1 italic">Alt: lemigobena8@gmail.com</p>
                        </div>
                    </div>

                    <div className="glass rounded-3xl p-8 flex items-start gap-6 group hover:bg-foreground/[0.04] transition-colors">
                        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                            <Phone className="text-green-400" size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-2">Call</h4>
                            <a href="tel:+251939740755" className="text-muted-foreground hover:text-foreground transition-colors group-hover:text-green-400">
                                +251 939 740 755
                            </a>
                            <p className="text-[10px] text-muted-foreground mt-1 italic">Alt: +251 972 130 467</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-3xl p-8 border border-foreground/5 shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
                    
                    <form 
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:bg-foreground/[0.08] transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:bg-foreground/[0.08] transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-muted-foreground ml-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="What's this about?"
                                className="w-full px-4 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:bg-foreground/[0.08] transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                placeholder="Your message here..."
                                className="w-full px-4 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:bg-foreground/[0.08] transition-all outline-none text-foreground placeholder:text-muted-foreground/50 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg group/btn ${
                                status === 'success' ? 'bg-green-500 text-white' : 
                                status === 'error' ? 'bg-red-500 text-white' : 
                                'bg-primary text-white shadow-primary/20'
                            }`}
                        >
                            {status === 'sending' ? (
                                <>Sending... <Loader2 className="animate-spin" size={20} /></>
                            ) : status === 'success' ? (
                                <>Sent! <CheckCircle size={20} /></>
                            ) : status === 'error' ? (
                                <>Failed <AlertCircle size={20} /></>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-500 text-center text-sm font-medium mt-2 animate-bounce">
                                Message sent successfully!
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-center text-sm font-medium mt-2">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
