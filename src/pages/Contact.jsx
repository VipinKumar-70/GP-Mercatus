import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail, Phone, MapPin, MessageCircle, ArrowRight, Clock,
  ShieldCheck, Globe, Instagram, Linkedin, Facebook, CheckCircle2, Zap
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', { event_category: 'Contact Form', event_label: form.service || 'General' });
    }
    try {
      const res = await fetch('https://formspree.io/f/xyzgnpwb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `New enquiry from ${form.name} (${form.company}) – GP Mercatus` }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24">

      {/* ── HERO ── */}
      <section className="bg-brand-yellow py-32 px-6 relative overflow-hidden" aria-label="Contact hero">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 bg-brand-navy text-brand-yellow font-black text-[10px] tracking-[0.4em] rounded-full uppercase"
          >
            Let's Work Together
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-brand-navy leading-[0.85] tracking-tighter uppercase"
          >
            GROW YOUR<br /><span className="text-brand-navy/30">BRAND WITH US.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-navy/60 max-w-2xl font-bold leading-relaxed"
          >
            Tell us about your business and goals. We will come back to you with a tailored digital marketing strategy — no obligation, no pitch deck, just strategy.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT HUB ── */}
      <section className="py-32 bg-white px-6" aria-label="Contact form and details">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* Left column */}
            <div className="space-y-16">
              <div className="space-y-10">
                <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter leading-none">CONTACT US</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', val: 'support@gpmercatus.in', href: 'mailto:support@gpmercatus.in' },
                    { icon: Phone, label: 'Phone / WhatsApp', val: '+91-8826906159', href: 'tel:+918826906159' },
                    { icon: Globe, label: 'Website', val: 'www.gpmercatus.in', href: 'https://www.gpmercatus.in' },
                    { icon: MapPin, label: 'Registered Address', val: 'RZ-7A/18, Raj Nagar II, New Delhi – 110077, India', href: '#' },
                  ].map((item, idx) => (
                    <a key={idx} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="flex gap-6 group p-5 hover:bg-brand-cream-dark rounded-3xl transition-all duration-300 border border-transparent hover:border-brand-navy/5"
                    >
                      <div className="w-12 h-12 bg-brand-cream-dark rounded-[1.2rem] flex items-center justify-center text-brand-navy group-hover:bg-brand-yellow transition-all duration-300 flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                        <p className="text-base font-black text-brand-navy">{item.val}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp block */}
              <Card className="bg-brand-navy text-white p-10 space-y-7 relative overflow-hidden border-none">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-none relative z-10">Prefer WhatsApp?</h3>
                <p className="text-white/50 text-base font-medium leading-relaxed relative z-10">
                  Send us a message on WhatsApp and our team will get back to you with initial thoughts on your brief — usually within a few hours.
                </p>
                <a
                  href="https://wa.me/918826906159?text=Hi%20GP%20Mercatus%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20for%20my%20brand."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.gtag && window.gtag('event', 'whatsapp_click', { event_category: 'Contact' })}
                  className="inline-flex items-center gap-3 bg-brand-yellow text-brand-navy px-7 py-4 rounded-[1.2rem] font-black hover:scale-105 active:scale-95 shadow-xl transition-all relative z-10 text-sm uppercase tracking-widest"
                >
                  <MessageCircle size={20} fill="currentColor" /> Chat on WhatsApp
                </a>
                <div className="flex flex-wrap gap-5 pt-6 border-t border-white/10 relative z-10">
                  {[
                    { icon: Globe, label: 'Serving Globally' },
                    { icon: Clock, label: 'Fast Response' },
                    { icon: ShieldCheck, label: 'Admirable Group' },
                  ].map((pill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <pill.icon size={14} className="text-brand-yellow" />
                      <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">{pill.label}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social links */}
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Follow Us</p>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/gpmercatus' },
                    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577682877361' },
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/gp-mercatus/' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`GP Mercatus on ${s.label}`}
                      className="flex items-center gap-3 px-5 py-3 bg-brand-cream-dark rounded-2xl text-brand-navy font-black hover:bg-brand-yellow transition-all group text-sm"
                    >
                      <s.icon size={18} className="group-hover:rotate-12 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-[0.15em]">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div> 
            </div>

            {/* Right column – form */}
            <div>
              <div className="bg-brand-cream-dark p-10 lg:p-14 rounded-[4rem] border border-brand-navy/5 shadow-2xl shadow-brand-navy/5">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center space-y-6 py-16">
                    <CheckCircle2 size={52} className="text-green-500" />
                    <h3 className="text-3xl font-black uppercase text-brand-navy">Message Sent!</h3>
                    <p className="text-brand-navy/60 font-medium leading-relaxed">
                      Thank you for getting in touch. We will review your brief and respond within one business day.
                    </p>
                    <Button variant="primary" onClick={() => setStatus('idle')}>Send Another Message</Button>
                  </div>
                ) : (
                  <form className="space-y-7" onSubmit={handleSubmit} noValidate>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-black uppercase tracking-tighter">Send an Enquiry</h2>
                      <p className="text-sm text-brand-navy/50">We respond within one business day.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40" htmlFor="name">Your Name *</label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-white border border-brand-navy/5 px-5 py-4 rounded-2xl text-base font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-yellow/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40" htmlFor="company">Company / Brand</label>
                        <input id="company" name="company" type="text" value={form.company} onChange={handleChange}
                          placeholder="Your Company Name"
                          className="w-full bg-white border border-brand-navy/5 px-5 py-4 rounded-2xl text-base font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-yellow/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40" htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full bg-white border border-brand-navy/5 px-5 py-4 rounded-2xl text-base font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-yellow/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40" htmlFor="phone">Phone / WhatsApp</label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="w-full bg-white border border-brand-navy/5 px-5 py-4 rounded-2xl text-base font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-yellow/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40" htmlFor="service">Service Interested In</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}
                        className="w-full bg-white border border-brand-navy/5 px-5 py-4 rounded-2xl text-base font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-yellow/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service…</option>
                        <option>Performance Marketing (Google / Meta / LinkedIn Ads)</option>
                        <option>Search Engine Optimisation (SEO)</option>
                        <option>Social Media Marketing</option>
                        <option>Creative Strategy & Design</option>
                        <option>Content Marketing</option>
                        <option>Web Analytics & Reporting</option>
                        <option>Full-Service Digital Marketing Package</option>
                        <option>Not sure – I need a consultation</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40" htmlFor="message">Tell Us About Your Goals *</label>
                      <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange}
                        placeholder="Describe your business, your target audience, current marketing challenges, and what growth you want to achieve…"
                        className="w-full bg-white border border-brand-navy/5 px-5 py-4 rounded-2xl text-base font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-yellow/20 transition-all resize-none"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <p className="text-sm font-bold text-red-500">Something went wrong. Please email us directly at support@gpmercatus.in</p>
                    )}

                    <Button size="xl" className="w-full group" type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : (
                        <span className="flex items-center justify-center gap-2">
                          Send Enquiry <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </span>
                      )}
                    </Button>
                    <p className="text-center text-[10px] font-black text-brand-navy/30 uppercase tracking-widest">
                      We respond within one business day. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
