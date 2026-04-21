import React from "react";
import { motion } from "motion/react";
import {
  Target,
  Search,
  Smartphone,
  Palette,
  Globe,
  BarChart,
  CheckCircle2,
  Zap,
  ArrowRight,
  TrendingUp,
  Video,
  Mail,
  ShoppingCart,
  PenTool,
} from "lucide-react";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const services = [
  {
    id: "performance",
    icon: Target,
    title: "Performance Marketing",
    badge: "Google Ads · Meta · LinkedIn · YouTube",
    problem:
      "You are spending on ads but generating low-quality leads and inconsistent return on ad spend.",
    solution:
      "We build direct-response paid campaigns across Google Search, Meta, LinkedIn, and YouTube — precisely targeting your ideal customers by behaviour, intent, industry, and demographics. Every campaign is split-tested and optimised for your specific conversion goals.",
    outcome:
      "A predictable, scalable pipeline of qualified leads or sales with full cost-per-result transparency.",
    steps: [
      "Audience Research",
      "Campaign Architecture",
      "Creative Testing",
      "Scale & Optimise",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimisation (SEO)",
    badge: "Technical · On-Page · Off-Page · Local",
    problem:
      "Your website is invisible on Google, losing potential customers to competitors every single day.",
    solution:
      "We perform a deep technical SEO audit, optimise your on-page content for the search terms your buyers use, build high-authority backlinks, and publish SEO-led content that compounds in value over time.",
    outcome:
      "Sustainable first-page rankings for high-intent keywords that drive qualified organic traffic month after month.",
    steps: [
      "SEO Audit",
      "Keyword Strategy",
      "On-Page & Technical",
      "Link Building",
    ],
  },
  {
    id: "social",
    icon: Smartphone,
    title: "Social Media Marketing",
    badge: "Instagram · Facebook · LinkedIn · X · YouTube",
    problem:
      "Inconsistent posting, low engagement, and zero measurable business impact from your social channels.",
    solution:
      "We manage your social presence end-to-end: content strategy, creative production, community management, paid social campaigns, influencer partnerships, and monthly performance reporting — all aligned to your brand voice and business goals.",
    outcome:
      "An active, professional social presence that builds audience trust and drives direct enquiries and conversions.",
    steps: [
      "Brand Voice & Strategy",
      "Content Production",
      "Community Management",
      "Paid Campaigns",
    ],
  },
  {
    id: "creative",
    icon: Palette,
    title: "Creative Strategy & Design",
    badge: "Branding · Ad Creatives · Visual Identity",
    problem:
      "Generic branding that fails to differentiate your business or justify your pricing in a competitive market.",
    solution:
      "From logo design and brand identity to ad creatives, social templates, landing page design, and video production — our creative team produces assets built to capture attention and drive action in any market or format.",
    outcome:
      "A cohesive visual identity and creative system that elevates perceived value and converts across every touchpoint.",
    steps: [
      "Brand Audit",
      "Identity Design",
      "Asset Production",
      "Creative Guidelines",
    ],
  },
  {
    id: "content",
    icon: PenTool,
    title: "Content Marketing",
    badge: "Blog · Video · Email · Copywriting",
    problem:
      "No content strategy means no organic traffic, no thought leadership, and no nurture pathway for leads.",
    solution:
      "We develop and execute a full content programme — SEO blog articles, explainer videos, email sequences, landing page copy, and social content — each piece mapped to a stage in your buyer journey.",
    outcome:
      "A content engine that attracts organic traffic, educates prospects, and accelerates your sales cycle.",
    steps: [
      "Content Strategy",
      "SEO Writing",
      "Video & Visuals",
      "Distribution",
    ],
  },
  {
    id: "analytics",
    icon: BarChart,
    title: "Web Analytics & Reporting",
    badge: "GA4 · Looker Studio · Attribution",
    problem:
      "You cannot make confident marketing decisions because you do not have reliable data on what is actually working.",
    solution:
      "We set up and configure GA4, implement full conversion tracking across all channels, build custom Looker Studio dashboards, run heatmap and behaviour analysis, and deliver monthly reports with clear, actionable insights.",
    outcome:
      "Complete visibility into your marketing performance so every budget decision is backed by real data.",
    steps: [
      "GA4 Setup",
      "Conversion Tracking",
      "Custom Dashboards",
      "Monthly Reporting",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);
  return (
    <div className="pt-24">
      {/* ── HERO ── */}
      <section
        className="bg-brand-navy py-32 px-6 relative overflow-hidden text-center"
        aria-label="Services hero"
      >
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
            EVERYTHING YOUR
            <br />
            BRAND NEEDS
            <br />
            <span className="text-brand-yellow">TO GROW ONLINE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            We offer the full spectrum of digital marketing services — from paid
            ads and SEO to creative design and analytics — tailored to your
            business goals and market.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      {/* 2. Detailed Service Cards */}
      <section className="py-32 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center scroll-mt-36 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center text-brand-navy shadow-xl shadow-brand-yellow/20">
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter">
                      {service.title}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <div className="p-8 bg-white rounded-3xl border border-brand-navy/5 shadow-sm">
                      <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Zap size={14} className="fill-red-500" /> The Problem
                      </p>
                      <p className="text-lg font-bold text-brand-navy leading-relaxed">
                        {service.problem}
                      </p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-brand-navy/5 shadow-sm">
                      <p className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Globe size={14} className="fill-blue-500" /> Our
                        Solution
                      </p>
                      <p className="text-lg font-medium text-brand-navy/60 leading-relaxed">
                        {service.solution}
                      </p>
                    </div>
                    <div className="p-8 bg-brand-navy rounded-3xl shadow-xl">
                      <p className="text-xs font-black text-brand-yellow uppercase tracking-widest mb-2 flex items-center gap-2">
                        <BarChart size={14} className="fill-brand-yellow" />{" "}
                        Expected Outcome
                      </p>
                      <p className="text-lg font-bold text-white leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${idx % 2 !== 0 ? "lg:order-1" : ""} bg-white p-12 rounded-[4rem] border border-brand-navy/5 shadow-xl shadow-brand-navy/5`}
              >
                <h4 className="text-xs font-black text-brand-navy/30 uppercase tracking-[0.2em] mb-10 text-center">
                  Implementation Process
                </h4>
                <div className="space-y-8">
                  {service.steps.map((step, sIdx) => (
                    <div key={step} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-full border-2 border-brand-yellow/30 flex items-center justify-center text-brand-navy font-black group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all">
                        {sIdx + 1}
                      </div>
                      <p className="text-xl font-bold text-brand-navy">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-16 w-full bg-brand-navy text-white text-center py-5 rounded-2xl font-black text-lg hover:bg-brand-yellow hover:text-brand-navy transition-all block"
                >
                  Get {service.title} Audit
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        className="py-32 bg-brand-navy text-white px-6"
        aria-label="Our process"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="How We Work"
            title="FROM BRIEF TO RESULTS"
            description="A clear, structured engagement process so you always know what is happening and why."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Discovery Call",
                desc: "We learn about your business, goals, current marketing, and target audience.",
              },
              {
                num: "02",
                title: "Strategy & Proposal",
                desc: "We build a tailored digital marketing plan with clear deliverables, timelines, and KPIs.",
              },
              {
                num: "03",
                title: "Launch & Execute",
                desc: "Campaigns go live — creative, copy, targeting, and tracking all handled by our team.",
              },
              {
                num: "04",
                title: "Report & Optimise",
                desc: "Regular reporting, continuous testing, and ongoing optimisation to maximise your results.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-10 bg-white/5 rounded-[3rem] border border-white/10 space-y-8 relative overflow-hidden group hover:bg-white/10 transition-colors"
              >
                <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-brand-yellow/10 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter leading-none relative z-10">
                  {step.title}
                </h3>
                <p className="text-white/40 font-medium leading-relaxed relative z-10 text-sm">
                  {step.desc}
                </p>
                <div className="w-10 h-10 rounded-2xl bg-brand-yellow flex items-center justify-center text-brand-navy group-hover:scale-110 transition-transform">
                  <TrendingUp size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section
        className="py-32 px-6 bg-brand-cream-dark"
        aria-label="Industries we serve"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Industries We Serve"
            title="BUILT FOR YOUR SECTOR"
            description="We bring deep industry knowledge to every campaign — understanding your buyer psychology, competitive landscape, and the channels that actually convert."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "D2C & E-commerce",
              "B2B SaaS & Technology",
              "Real Estate & Property",
              "Education & EdTech",
              "Healthcare & Wellness",
              "Fintech & Finance",
              "Hospitality & Travel",
              "Retail & Consumer Brands",
            ].map((industry, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-brand-navy/5 text-center hover:border-brand-yellow/30 hover:shadow-md transition-all group"
              >
                <p className="font-black text-sm text-brand-navy group-hover:text-brand-yellow transition-colors">
                  {industry}
                </p>
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
            Let's Build Your
            <br />
            <span className="text-brand-navy/30">Digital Growth Engine.</span>
          </h2>
          <p className="text-xl font-bold max-w-2xl leading-relaxed text-brand-navy/70">
            Tell us about your brand and goals — we will design a custom digital
            marketing strategy built specifically for your business.
          </p>
          <Button size="xl" variant="primary">
            <Link to="/contact">Get Free Strategy Consultation</Link>
          </Button>
          <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">
            support@gpmercatus.in · +91-8826906159
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
