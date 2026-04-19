import React from 'react';
import { motion } from 'motion/react';
import {
  Rocket, ShoppingBag, Building2, Globe, ArrowRight, Zap,
  XCircle, TrendingUp, Users, GraduationCap, Heart, BarChart3,
  Monitor, Briefcase
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const tiers = [
  {
    icon: ShoppingBag,
    title: 'D2C & E-commerce Brands',
    phase: 'Growth & Scale',
    status: 'Grow Online Revenue',
    points: [
      'Selling products online and want to scale profitably',
      'Running ads but struggling with high cost-per-acquisition',
      'Need stronger creative, better targeting, and full attribution',
    ],
    howWeHelp: 'We build performance-first ad campaigns on Meta and Google, paired with SEO and social content strategies that drive consistent, scalable online sales.',
    theme: 'bg-brand-yellow text-brand-navy',
  },
  {
    icon: Monitor,
    title: 'B2B SaaS & Technology Companies',
    phase: 'Pipeline Generation',
    status: 'Qualify More Leads',
    points: [
      'Need a steady pipeline of qualified decision-maker leads',
      'Relying too heavily on outbound with poor inbound results',
      'Want a content, SEO, and LinkedIn strategy that converts',
    ],
    howWeHelp: 'We design LinkedIn and Google demand-generation campaigns, SEO content that ranks for buyer intent keywords, and conversion-optimised landing pages that turn traffic into pipeline.',
    theme: 'bg-brand-navy',
  },
  {
    icon: Building2,
    title: 'Real Estate & Property Brands',
    phase: 'Lead Generation',
    status: 'Drive Quality Enquiries',
    points: [
      'Getting volume of leads but poor quality and conversion rate',
      'Need digital campaigns that filter for serious, high-intent buyers',
      'Want strong creative and landing pages for project launches',
    ],
    howWeHelp: 'We run precision-targeted paid campaigns with qualification-focused creative and landing pages — generating enquiries from serious buyers, not just form-fillers.',
    theme: 'bg-blue-600',
  },
  {
    icon: GraduationCap,
    title: 'Education & EdTech Brands',
    phase: 'Student Acquisition',
    status: 'Fill Your Programmes',
    points: [
      'Need to reach students, parents, or working professionals online',
      'Running Meta or Google campaigns with poor enrolment rates',
      'Want a content and SEO strategy to build long-term organic reach',
    ],
    howWeHelp: 'We combine paid campaigns, SEO, and social content to build awareness and drive enrolment at every stage of your admissions cycle.',
    theme: 'bg-green-600',
  },
  {
    icon: Heart,
    title: 'Healthcare & Wellness Brands',
    phase: 'Patient & Client Acquisition',
    status: 'Build Trust at Scale',
    points: [
      'Need to build digital credibility and attract patients or clients online',
      'Want to grow appointments, consultations, or product sales',
      'Require a sensitive, compliant marketing approach for the sector',
    ],
    howWeHelp: 'We build trust-first digital strategies — educational content, SEO, and performance campaigns — designed to convert health-conscious audiences at scale.',
    theme: 'bg-purple-600',
  },
  {
    icon: Briefcase,
    title: 'Startups & Emerging Brands',
    phase: 'Brand Building & Launch',
    status: 'Establish & Grow',
    points: [
      'Launching a new brand and need a strong digital foundation',
      'Want to acquire your first 1,000 customers efficiently',
      'Need brand identity, website, content, and paid media in one place',
    ],
    howWeHelp: 'We help startups launch and grow with end-to-end digital marketing — from brand identity and website to paid campaigns and SEO — all strategy-led from day one.',
    theme: 'bg-orange-500',
  },
];

const IdealAudience = () => {
  return (
    <div className="pt-20">

      {/* ── HERO ── */}
      <section className="bg-brand-cream-dark py-32 px-6 relative overflow-hidden text-center" aria-label="Who we serve hero">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-2 bg-brand-navy text-brand-yellow font-black text-[10px] tracking-[0.4em] rounded-full uppercase inline-block"
          >
            Who We Work With
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-navy leading-[0.9] tracking-tighter uppercase"
          >
            IS GP MERCATUS<br /><span className="text-brand-yellow">RIGHT FOR YOU?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-navy/50 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            We work with businesses globally — from funded startups to established brands — across a wide range of industries and markets. Here is who we serve best.
          </motion.p>
        </div>
      </section>

      {/* ── TIERS ── */}
      <section className="py-32 px-6 bg-white overflow-hidden" aria-label="Business types we serve">
        <div className="max-w-7xl mx-auto space-y-12">
          {tiers.map((tier, idx) => (
            <motion.article
              key={tier.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-stretch rounded-[5rem] overflow-hidden shadow-2xl shadow-brand-navy/5 border border-brand-navy/5 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:w-2/5 p-14 lg:p-20 flex flex-col justify-center text-white relative ${tier.theme}`}>
                <div className="absolute top-0 right-0 p-8 opacity-10"><tier.icon size={140} /></div>
                <div className="relative z-10 space-y-7">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <tier.icon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black leading-none uppercase tracking-tighter">{tier.title}</h2>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Focus Area</p>
                    <p className="text-lg font-bold">{tier.phase}</p>
                  </div>
                  <div className="px-4 py-2 bg-white/20 rounded-full font-black text-[10px] tracking-widest uppercase inline-block">
                    {tier.status}
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5 p-10 lg:p-20 bg-brand-cream-dark flex flex-col justify-center space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-[10px] font-black text-brand-navy/40 uppercase tracking-widest border-b border-brand-navy/10 pb-3">This Fits You If</h3>
                    <ul className="space-y-5">
                      {tier.points.map(point => (
                        <li key={point} className="flex gap-4 text-brand-navy font-bold text-sm leading-snug items-start">
                          <Zap size={16} className="text-brand-yellow flex-shrink-0 mt-1" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-[10px] font-black text-brand-navy/40 uppercase tracking-widest border-b border-brand-navy/10 pb-3">How We Help</h3>
                    <div className="p-7 bg-white rounded-3xl border border-brand-navy/5 shadow-sm">
                      <TrendingUp size={26} className="text-brand-yellow mb-4" />
                      <p className="text-sm font-bold text-brand-navy italic leading-relaxed">"{tier.howWeHelp}"</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/contact" className="inline-flex items-center gap-4 text-brand-navy font-black text-base border-b-4 border-brand-yellow pb-2 hover:gap-8 transition-all group">
                    Get a Free Consultation <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── NOT FOR ── */}
      <section className="py-32 bg-brand-navy text-white px-6" aria-label="Who we cannot help">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-5">
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              When We Are<br /><span className="text-red-400">Not the Right Fit</span>
            </h2>
            <p className="text-xl font-medium text-white/40">We would rather be honest upfront than waste your time or budget.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Businesses looking for the cheapest possible quote without caring about strategy or quality.',
              'Companies that want guaranteed overnight results without committing to a proper testing period.',
              'Brands unwilling to share access to analytics, ad accounts, or performance data with our team.',
              'Businesses that want to micromanage every creative and strategic decision without trust.',
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-6 p-9 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:bg-red-500/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all flex-shrink-0">
                  <XCircle size={26} />
                </div>
                <p className="font-bold text-base text-white/70 leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6" aria-label="Get started CTA">
        <div className="max-w-7xl mx-auto bg-brand-yellow rounded-[5rem] p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 text-brand-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Users size={200} /></div>
          <div className="max-w-2xl space-y-7 relative z-10">
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              See Your Brand<br /><span className="text-brand-navy/30">Growing Online?</span>
            </h2>
            <p className="text-xl font-bold text-brand-navy/70 leading-relaxed">
              If your business matches any of the segments above, let's talk. We will design a custom digital marketing approach tailored to your goals, audience, and market.
            </p>
          </div>
          <div className="relative z-10">
            <Button size="xl" variant="primary" className="shadow-2xl shadow-brand-navy/40">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdealAudience;
