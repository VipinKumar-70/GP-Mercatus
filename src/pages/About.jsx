import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  Eye,
  ArrowRight,
  CheckCircle2,
  Globe,
  TrendingUp,
  Users,
  Award,
  Target,
  BarChart3,
} from "lucide-react";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import founder from "../assets/founder.jpeg";


const About = () => {
  return (
    <div className="pt-24">
      {/* ── HERO ── */}
      <section
        className="bg-brand-navy py-32 px-6 relative overflow-hidden"
        aria-label="About hero"
      >
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-3/5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-2 bg-brand-yellow/10 rounded-full text-brand-yellow font-black text-[10px] tracking-[0.4em] uppercase"
            >
              A Unit of Admirable Group
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase"
            >
              WE ARE YOUR
              <br />
              DIGITAL GROWTH
              <br />
              <span className="text-brand-yellow">PARTNER.</span>
            </motion.h1>
          </div>
          <div className="lg:w-2/5 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium"
            >
              GP Mercatus was founded with a clear mission — to bridge the gap
              between digital marketing potential and real business growth for
              brands around the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="yellow" size="lg" className="group">
                <Link
                  to="/contact#contactform"
                  className="flex items-center gap-2"
                >
                  Work With Us{" "}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section
        className="py-32 px-6 bg-white overflow-hidden"
        aria-label="Our story"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img
                src={founder}
                alt="GP Mercatus digital marketing team collaborating on global campaigns"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-10">
            <SectionTitle
              badge="Our Story"
              title="BUILT FOR BRANDS THAT WANT REAL GROWTH"
              description="Not just more followers. Not just more impressions. Real, measurable business growth."
              align="left"
            />
            <div className="space-y-6 text-base text-brand-navy/60 font-medium leading-relaxed">
              <p>
                GP Mercatus was born out of a frustration shared by many growing
                businesses: digital marketing agencies that prioritise activity
                over outcomes — posting calendars over pipeline, vanity metrics
                over revenue.
              </p>
              <p>
                We built GP Mercatus to be different. We are a full-service
                digital marketing agency that works with businesses across the
                world — from ambitious startups to established brands — helping
                them grow through performance advertising, search engine
                optimisation, social media, creative strategy, and data
                analytics.
              </p>
              <p>
                Every service we provide is tied to a business objective. Every
                campaign we run is measured against results that matter to you —
                leads, sales, revenue, and growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-brand-navy/5">
              <div className="space-y-2">
                <p className="text-3xl font-black text-brand-navy">Global</p>
                <p className="text-[11px] font-black uppercase text-brand-navy/30 tracking-widest">
                  Client Base
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black text-brand-navy">
                  8+ Sectors
                </p>
                <p className="text-[11px] font-black uppercase text-brand-navy/30 tracking-widest">
                  Industries Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMIRABLE GROUP ── */}
      <section
        className="py-24 px-6 bg-brand-yellow"
        aria-label="Admirable Group"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <p className="text-[11px] font-black uppercase tracking-widest text-brand-navy/50">
              Our Parent Company
            </p>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-brand-navy">
              A Unit of Admirable Group
            </h2>
            <p className="text-lg font-medium text-brand-navy/70 leading-relaxed max-w-xl">
              GP Mercatus operates under the Admirable Group — a certified and
              trusted organisation known for excellence across multiple business
              verticals. This backing ensures every client engagement is handled
              with the highest professional standards, accountability, and
              long-term commitment.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="p-8 bg-brand-navy rounded-3xl text-white space-y-4 min-w-[220px]">
              <ShieldCheck size={32} className="text-brand-yellow" />
              <p className="font-black text-lg uppercase">
                Certified & Trusted
              </p>
              <p className="text-sm text-white/50">
                Backed by Admirable Group's excellence and certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        className="py-32 bg-brand-cream-dark px-6"
        aria-label="Our values"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Our Values"
            title="HOW WE THINK & WORK"
            description="The principles that guide every campaign, every client relationship, and every decision at GP Mercatus."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Results Over Vanity",
                text: "We measure success by the metrics that grow your business — leads, conversions, revenue — not by impressions or follower counts.",
                color: "bg-blue-500",
                points: [
                  "Revenue-linked KPIs",
                  "Full attribution tracking",
                  "Transparent reporting",
                ],
              },
              {
                icon: Globe,
                title: "Global Perspective",
                text: "We work with brands across markets, bringing strategic thinking and creative execution that resonates with diverse global audiences.",
                color: "bg-brand-yellow",
                points: [
                  "Multi-market experience",
                  "Culturally aware strategy",
                  "Cross-border campaigns",
                ],
              },
              {
                icon: Sparkles,
                title: "Creative With Purpose",
                text: "Great creative is not just beautiful — it converts. Every asset we produce is designed to capture attention and drive measurable action.",
                color: "bg-brand-navy",
                points: [
                  "Conversion-led design",
                  "A/B tested creatives",
                  "Brand-consistent execution",
                ],
              },
            ].map((value, idx) => (
              <Card key={idx}>
                <div className="space-y-7">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center text-white",
                      value.color,
                    )}
                  >
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">
                    {value.title}
                  </h3>
                  <p className="text-brand-navy/60 leading-relaxed font-medium text-[18px]">
                    {value.text}
                  </p>
                  <ul className="space-y-3 pt-4 border-t border-brand-navy/5">
                    {value.points.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-brand-navy/40"
                      >
                        <CheckCircle2 size={14} className="text-brand-yellow" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="py-32 px-6 bg-white" aria-label="What we offer">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <SectionTitle
              badge="Our Capabilities"
              title="SENIOR EXPERTS. NOT INTERNS."
              description="At GP Mercatus, every account is led by experienced digital marketing strategists — not handed off to junior staff after onboarding."
              align="left"
            />
            <p className="text-base text-brand-navy/60 font-medium leading-relaxed">
              We do not use your marketing budget as a learning opportunity. Our
              team brings deep expertise in performance advertising, SEO, social
              media, and creative strategy — with a track record of results
              across multiple industries and markets.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  title: "Certified Performance Marketing Specialists",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Data Attribution Experts",
                },
                { icon: Sparkles, title: "Creative Strategists & Copywriters" },
                {
                  icon: Globe,
                  title: "Multi-Market Digital Growth Consultants",
                },
              ].map((stat) => (
                <div
                  key={stat.title}
                  className="flex items-center gap-5 p-5 bg-brand-cream rounded-2xl border border-brand-navy/5 group hover:bg-brand-navy hover:text-white transition-all duration-500"
                >
                  <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-navy group-hover:scale-110 transition-transform">
                    <stat.icon size={20} />
                  </div>
                  <p className="text-base font-black uppercase tracking-tighter leading-none">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="GP Mercatus digital marketing strategy session"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section
        className="py-32 bg-brand-navy text-white px-6"
        aria-label="Our vision"
      >
        <div className="max-w-5xl mx-auto text-center space-y-14">
          <div className="w-24 h-24 bg-brand-yellow rounded-full mx-auto flex items-center justify-center text-brand-navy">
            <Eye size={44} />
          </div>
          <h2 className="text-5xl md:text-7xl text-brand-yellow font-black uppercase tracking-tighter leading-none">
            OUR VISION IS TO
            <br />
            BE THE GOLD
            <br />
            STANDARD.
          </h2>
          <p className="text-xl font-medium text-white/50 max-w-2xl mx-auto leading-relaxed">
            We are building a global agency where brand growth is not a gamble —
            but a predictable consequence of superior strategy, creative
            execution, and relentless optimisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="yellow" size="xl">
              <Link to="/contact">Start Your Growth Journey</Link>
            </Button>
            <Button variant="yellow" size="xl">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
