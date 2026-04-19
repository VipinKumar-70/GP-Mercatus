import React from 'react';
import { motion } from 'motion/react';
import {
  Target, Search, Smartphone, Palette, Globe, BarChart,
  CheckCircle2, Zap, ArrowRight, TrendingUp, Video, Mail,
  ShoppingCart, PenTool
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'performance',
    icon: Target,
    title: 'Performance Marketing',
    badge: 'Google Ads · Meta · LinkedIn · YouTube',
    problem: 'You are spending on ads but generating low-quality leads and inconsistent return on ad spend.',
    solution: 'We build direct-response paid campaigns across Google Search, Meta, LinkedIn, and YouTube — precisely targeting your ideal customers by behaviour, intent, industry, and demographics. Every campaign is split-tested and optimised for your specific conversion goals.',
    outcome: 'A predictable, scalable pipeline of qualified leads or sales with full cost-per-result transparency.',
    steps: ['Audience Research', 'Campaign Architecture', 'Creative Testing', 'Scale & Optimise'],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'Search Engine Optimisation (SEO)',
    badge: 'Technical · On-Page · Off-Page · Local',
    problem: 'Your website is invisible on Google, losing potential customers to competitors every single day.',
    solution: 'We perform a deep technical SEO audit, optimise your on-page content for the search terms your buyers use, build high-authority backlinks, and publish SEO-led content that compounds in value over time.',
    outcome: 'Sustainable first-page rankings for high-intent keywords that drive qualified organic traffic month after month.',
    steps: ['SEO Audit', 'Keyword Strategy', 'On-Page & Technical', 'Link Building'],
  },
  {
    id: 'social',
    icon: Smartphone,
    title: 'Social Media Marketing',
    badge: 'Instagram · Facebook · LinkedIn · X · YouTube',
    problem: 'Inconsistent posting, low engagement, and zero measurable business impact from your social channels.',
    solution: 'We manage your social presence end-to-end: content strategy, creative production, community management, paid social campaigns, influencer partnerships, and monthly performance reporting — all aligned to your brand voice and business goals.',
    outcome: 'An active, professional social presence that builds audience trust and drives direct enquiries and conversions.',
    steps: ['Brand Voice & Strategy', 'Content Production', 'Community Management', 'Paid Campaigns'],
  },
  {
    id: 'creative',
    icon: Palette,
    title: 'Creative Strategy & Design',
    badge: 'Branding · Ad Creatives · Visual Identity',
    problem: 'Generic branding that fails to differentiate your business or justify your pricing in a competitive market.',
    solution: 'From logo design and brand identity to ad creatives, social templates, landing page design, and video production — our creative team produces assets built to capture attention and drive action in any market or format.',
    outcome: 'A cohesive visual identity and creative system that elevates perceived value and converts across every touchpoint.',
    steps: ['Brand Audit', 'Identity Design', 'Asset Production', 'Creative Guidelines'],
  },
  {
    id: 'content',
    icon: PenTool,
    title: 'Content Marketing',
    badge: 'Blog · Video · Email · Copywriting',
    problem: 'No content strategy means no organic traffic, no thought leadership, and no nurture pathway for leads.',
    solution: 'We develop and execute a full content programme — SEO blog articles, explainer videos, email sequences, landing page copy, and social content — each piece mapped to a stage in your buyer journey.',
    outcome: 'A content engine that attracts organic traffic, educates prospects, and accelerates your sales cycle.',
    steps: ['Content Strategy', 'SEO Writing', 'Video & Visuals', 'Distribution'],
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Web Analytics & Reporting',
    badge: 'GA4 · Looker Studio · Attribution',
    problem: 'You cannot make confident marketing decisions because you do not have reliable data on what is actually working.',
    solution: 'We set up and configure GA4, implement full conversion tracking across all channels, build custom Looker Studio dashboards, run heatmap and behaviour analysis, and deliver monthly reports with clear, actionable insights.',
    outcome: 'Complete visibility into your marketing performance so every budget decision is backed by real data.',
    steps: ['GA4 Setup', 'Conversion Tracking', 'Custom Dashboards', 'Monthly Reporting'],
  },
];

const Services = () => {
  return (
    <div className="pt-20">

      {/* ── HERO ── */}
      <section className="bg-brand-navy py-32 px-6 relative overflow-hidden text-center" aria-label="Services hero">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 rounded-full text-brand-yellow font-black text-[10px] tracking-[0.4em] uppercase border border-brand-yellow/20"
          >
            Full-Service Digital Marketing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase"
          >
            EVERYTHING YOUR<br />BRAND NEEDS<br />
            <span className="text-brand-yellow">TO GROW ONLINE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            We offer the full spectrum of digital marketing services — from paid ads and SEO to creative design and analytics — tailored to your business goals and market.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-32 px-6 bg-brand-cream" aria-label="Our services">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-stretch gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Context column */}
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-brand-navy rounded-[1.5rem] flex items-center justify-center text-brand-yellow shadow-xl flex-shrink-0">
                    <service.icon size={36} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy/50 bg-brand-navy/8 border border-brand-navy/10 px-3 py-1 rounded-full inline-block mb-2">{service.badge}</span>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">{service.title}</h2>
                  </div>
                </div>
                <div className="p-8 bg-red-500/5 rounded-3xl border border-red-500/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">The Common Problem</p>
                  <p className="text-lg font-bold leading-tight">{service.problem}</p>
                </div>
              </div>

              {/* Solution column */}
              <div className="lg:w-1/2">
                <Card className="h-full bg-white flex flex-col justify-between p-10 lg:p-14 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full -mr-24 -mt-24"></div>
                  <div className="space-y-8 relative z-10">
                    <div className="space-y-3">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">The GP Mercatus Approach</h3>
                      <p className="text-base font-bold text-brand-navy leading-relaxed">{service.solution}</p>
                    </div>
                    <div className="p-7 bg-brand-navy rounded-[2rem] text-white">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-yellow mb-3">Expected Outcome</h4>
                      <p className="text-base font-bold italic leading-tight">{service.outcome}</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">How We Do It</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.steps.map((step, si) => (
                          <div key={step} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-[10px] font-black text-brand-navy">
                              {si + 1}
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest text-brand-navy/60">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <Button variant="yellow" className="w-full">
                      <Link to="/contact">Enquire About {service.title}</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-32 bg-brand-navy text-white px-6" aria-label="Our process">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="How We Work"
            title="FROM BRIEF TO RESULTS"
            description="A clear, structured engagement process so you always know what is happening and why."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, current marketing, and target audience.' },
              { num: '02', title: 'Strategy & Proposal', desc: 'We build a tailored digital marketing plan with clear deliverables, timelines, and KPIs.' },
              { num: '03', title: 'Launch & Execute', desc: 'Campaigns go live — creative, copy, targeting, and tracking all handled by our team.' },
              { num: '04', title: 'Report & Optimise', desc: 'Regular reporting, continuous testing, and ongoing optimisation to maximise your results.' },
            ].map((step, idx) => (
              <div key={idx} className="p-10 bg-white/5 rounded-[3rem] border border-white/10 space-y-8 relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-brand-yellow/10 transition-colors">{step.num}</div>
                <h3 className="text-xl font-black uppercase tracking-tighter leading-none relative z-10">{step.title}</h3>
                <p className="text-white/40 font-medium leading-relaxed relative z-10 text-sm">{step.desc}</p>
                <div className="w-10 h-10 rounded-2xl bg-brand-yellow flex items-center justify-center text-brand-navy group-hover:scale-110 transition-transform">
                  <TrendingUp size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-32 px-6 bg-brand-cream-dark" aria-label="Industries we serve">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Industries We Serve"
            title="BUILT FOR YOUR SECTOR"
            description="We bring deep industry knowledge to every campaign — understanding your buyer psychology, competitive landscape, and the channels that actually convert."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              'D2C & E-commerce', 'B2B SaaS & Technology', 'Real Estate & Property',
              'Education & EdTech', 'Healthcare & Wellness', 'Fintech & Finance',
              'Hospitality & Travel', 'Retail & Consumer Brands',
            ].map((industry, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-brand-navy/5 text-center hover:border-brand-yellow/30 hover:shadow-md transition-all group">
                <p className="font-black text-sm text-brand-navy group-hover:text-brand-yellow transition-colors">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 px-6 bg-white" aria-label="Services CTA">
        <div className="max-w-7xl mx-auto bg-brand-yellow rounded-[5rem] p-16 lg:p-24 flex flex-col items-center gap-10 text-center text-brand-navy">
          <Zap size={52} className="animate-bounce" />
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
            Let's Build Your<br /><span className="text-brand-navy/30">Digital Growth Engine.</span>
          </h2>
          <p className="text-xl font-bold max-w-2xl leading-relaxed text-brand-navy/70">
            Tell us about your brand and goals — we will design a custom digital marketing strategy built specifically for your business.
          </p>
          <Button size="xl" variant="primary">
            <Link to="/contact">Get Free Strategy Consultation</Link>
          </Button>
          <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">support@gpmercatus.in · +91-8826906159</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
