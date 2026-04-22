import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Target,
  BarChart3,
  TrendingUp,
  Globe,
  Smartphone,
  Zap,
  CheckCircle2,
  Rocket,
  Quote,
  Star,
  Search,
  Palette,
  BarChart,
  Users,
  Mail,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const services = [
    {
      id: "performance",
      icon: Target,
      title: "Performance Marketing",
      desc: "Data-driven paid campaigns on Google, Meta, LinkedIn, and more — built to maximise ROI for any market.",
    },
    {
      id: "seo",
      icon: Search,
      title: "Search Engine Optimisation",
      desc: "Technical SEO, content strategy, and link building that earns your brand lasting organic visibility worldwide.",
    },
    {
      id: "social",
      icon: Smartphone,
      title: "Social Media Marketing",
      desc: "Full-funnel social strategies across Instagram, Facebook, LinkedIn, X, and YouTube for global audiences.",
    },
    {
      id: "creative",
      icon: Palette,
      title: "Creative Strategy & Design",
      desc: "Brand identity, ad creatives, and visual content designed to resonate with audiences in any market.",
    },
    {
      id: "content",
      icon: Globe,
      title: "Content Marketing",
      desc: "SEO-led blogs, articles, videos, and branded content that attract and convert your ideal customers.",
    },
    {
      id: "analytics",
      icon: BarChart,
      title: "Web Analytics & Reporting",
      desc: "GA4 setup, custom dashboards, conversion tracking, and actionable insights — so you know exactly what is working.",
    },
  ];

  const industries = [
    "D2C & E-commerce",
    "B2B SaaS",
    "Real Estate",
    "Education & EdTech",
    "Healthcare & Wellness",
    "Fintech",
    "Hospitality & Travel",
    "Retail & FMCG",
  ];

  return (
    <div className="pt-24 overflow-hidden">
      {/* ── 1. HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center px-6 bg-grid"
        aria-label="Hero"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/20 rounded-full text-brand-navy font-black text-xs tracking-widest uppercase"
            >
              <Zap size={14} className="fill-brand-yellow" /> Global Digital
              Marketing Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase"
            >
              GROW YOUR
              <br />
              BRAND.
              <br />
              <span className="text-brand-yellow">GLOBALLY.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-navy/60 max-w-xl font-medium leading-relaxed"
            >
              GP Mercatus is a full-service digital marketing agency helping
              brands worldwide grow through performance advertising, SEO, social
              media, and creative strategy — tailored to your market, your
              audience, and your goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="xl" variant="yellow" className="group">
                <Link to="/contact" className="flex items-center gap-2">
                  Start a Free Consultation{" "}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline">
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-12 border-t border-brand-navy/5"
            >
              <div>
                <p className="text-3xl font-black leading-none">200+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 mt-1">
                  Campaigns Delivered
                </p>
              </div>
              <div className="w-px h-10 bg-brand-navy/10"></div>
              <div>
                <p className="text-3xl font-black leading-none">8+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 mt-1">
                  Industries Served
                </p>
              </div>
              <div className="w-px h-10 bg-brand-navy/10"></div>
              <div>
                <p className="text-3xl font-black leading-none">Global</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 mt-1">
                  Reach
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              style={{ y: y1 }}
              className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl rotate-3 bg-brand-navy group"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="GP Mercatus digital marketing performance dashboard"
                loading="eager"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-60"></div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-12 -right-12 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-brand-navy/5 glass hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white">
                  <TrendingUp />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-brand-navy/40">
                    Avg. Campaign ROAS
                  </p>
                  <p className="text-2xl font-black">4.5x</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: -50, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-20 -left-20 z-20 bg-brand-yellow p-8 rounded-[3rem] shadow-2xl hidden sm:block"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center text-white">
                  <Globe />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-brand-navy/70">
                    Serving Brands
                  </p>
                  <p className="text-3xl font-black text-brand-navy tracking-tight">
                    Worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. INDUSTRIES / LOGO WALL ── */}
      <section
        className="py-20 border-y border-brand-navy/5 bg-white"
        aria-label="Industries we serve"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.5em] mb-12">
            Scaling Brands Across Industries & Markets
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {industries.map((text) => (
              <span
                key={text}
                className="text-xl lg:text-2xl font-black tracking-tighter hover:text-brand-yellow cursor-default transition-colors"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHO WE ARE ── */}
      <section
        className="py-32 px-6 bg-brand-cream-dark"
        aria-label="About GP Mercatus"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-brand-navy/5 text-brand-navy">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95]">
              Your Strategic
              <br />
              <span className="text-brand-yellow">Growth Partner.</span>
            </h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed">
              GP Mercatus is more than a digital marketing agency. We are
              strategic enablers for brands looking to gain real visibility,
              qualified leads, and measurable growth — no matter where in the
              world their customers are.
            </p>
            <p className="text-lg text-brand-navy/70 leading-relaxed">
              As a unit of Admirable Group, we combine data-backed strategy with
              creative execution to deliver campaigns that connect your brand
              with the right audiences at the right time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                icon: Target,
                label: "Performance-First",
                desc: "Every campaign is optimised for real business outcomes — leads, sales, and revenue.",
              },
              {
                icon: Globe,
                label: "Global Reach",
                desc: "We serve brands across markets worldwide, from startups to established enterprises.",
              },
              {
                icon: BarChart3,
                label: "Data-Driven",
                desc: "Decisions backed by analytics, not guesswork. Full attribution and transparent reporting.",
              },
              {
                icon: CheckCircle2,
                label: "Admirable Group",
                desc: "Backed by a certified parent company known for excellence and client trust.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-brand-navy/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon size={22} className="text-brand-yellow mb-3" />
                <p className="font-black text-xl text-brand-navy mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-brand-navy/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES GRID ── */}
      <section className="py-32 px-6 bg-white" aria-label="Our services">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Our Services"
            title="WHAT WE DO"
            description="From strategy to execution — we offer the full spectrum of digital marketing services your brand needs to grow in today's competitive landscape."
            align="left"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <Card
                key={i}
                className={cn(
                  "group hover:border-brand-yellow/30",
                  i === 0 ? "bg-brand-navy text-white" : "",
                )}
              >
                <div className="space-y-6">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform",
                      i === 0
                        ? "bg-brand-yellow text-brand-navy"
                        : "bg-brand-cream-dark text-brand-navy",
                    )}
                  >
                    <svc.icon size={28} />
                  </div>
                  <h3
                    className={cn(
                      "text-xl font-black uppercase tracking-tighter leading-tight",
                      i === 0 ? "text-white" : "text-brand-navy",
                    )}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className={cn(
                      "font-medium text-sm leading-relaxed",
                      i === 0 ? "text-white/60" : "text-brand-navy/60",
                    )}
                  >
                    {svc.desc}
                  </p>
                  <Link
                    to={`/services#${svc.id}`}
                    className={cn(
                      "inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all",
                      i === 0 ? "text-brand-yellow" : "text-brand-navy",
                    )}
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="xl" variant="yellow">
              <Link to="/services" className="flex items-center gap-2">
                View All Services <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 5. WHY GP MERCATUS ── */}
      <section
        className="py-32 bg-brand-navy text-white px-6"
        aria-label="Why choose GP Mercatus"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <SectionTitle
              badge="Why GP Mercatus"
              title="STRATEGY MEETS EXECUTION."
              description="Most agencies deliver reports. We deliver results. Here is what makes the GP Mercatus approach different."
              align="left"
              light
            />
            <div className="space-y-5">
              {[
                {
                  title: "Tailored to Your Market",
                  desc: "We adapt strategy to your specific audience, industry, and competitive landscape — not generic templates.",
                },
                {
                  title: "Full-Funnel Thinking",
                  desc: "From awareness to conversion, we manage every stage of your customer journey with precision.",
                },
                {
                  title: "Transparent Reporting",
                  desc: "You always know where your budget is going and what results it is producing — every week.",
                },
                {
                  title: "Senior-Led Accounts",
                  desc: "Your campaigns are managed by experienced strategists, not handed off to junior staff.",
                },
              ].map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2
                    size={20}
                    className="text-brand-yellow mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="font-black text-xl text-white">{pt.title}</p>
                    <p className="text-sm text-white/40 mt-1 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-12 bg-white/5 rounded-[4rem] border border-white/10">
            <div className="space-y-5">
              {[
                {
                  label: "Performance Ads",
                  sub: "Google · Meta · LinkedIn · YouTube",
                },
                {
                  label: "Organic Growth",
                  sub: "SEO · Content · Social Media",
                },
                {
                  label: "Creative Production",
                  sub: "Branding · Ads · Video · Copywriting",
                },
                {
                  label: "Analytics & Insights",
                  sub: "GA4 · Looker Studio · Attribution",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-navy font-black text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="font-black text-xl text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/40 mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-brand-yellow rounded-2xl text-brand-navy">
              <p className="font-black text-sm uppercase mb-1">
                Ready to grow?
              </p>
              <p className="font-bold text-base">
                Get your free strategy consultation today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section
        className="py-32 px-6 bg-white overflow-hidden"
        aria-label="Client testimonials"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Client Stories"
            title="RESULTS OUR CLIENTS LOVE"
            align="left"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amit Sharma",
                role: "CEO, Elevate D2C",
                text: "GP Mercatus completely redesigned our paid media strategy. Our ROAS tripled within 45 days and our cost per acquisition dropped by 38%. Exceptional team.",
              },
              {
                name: "Priya Verma",
                role: "Founder, Luxe Living",
                text: "The digital strategy consultation was eye-opening. They identified budget leakages we did not know existed and rebuilt our campaigns from the ground up.",
              },
              {
                name: "Siddharth M.",
                role: "Head of Growth, FinTech Brand",
                text: "Their understanding of performance marketing combined with creative strategy is unmatched. Best marketing investment our company has made.",
              },
            ].map((t, i) => (
              <Card key={i} className="relative pt-14">
                <div className="absolute top-10 left-10 text-brand-yellow opacity-20">
                  <Quote size={52} fill="currentColor" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        className="text-brand-yellow fill-brand-yellow"
                      />
                    ))}
                  </div>
                  <p className="text-lg font-medium text-brand-navy/80 leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-5 border-t border-brand-navy/5">
                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy font-black text-sm">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-black text-brand-navy text-[16px]">
                        {t.name}
                      </p>
                      <p className="text-[11px] font-black uppercase text-brand-navy/40 tracking-widest">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <section className="py-32 px-6 relative" aria-label="Call to action">
        <div className="max-w-7xl mx-auto rounded-[5rem] overflow-hidden bg-brand-yellow p-16 lg:p-32 text-center space-y-12 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20"></div>
          <div className="relative z-10 space-y-10">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black text-brand-navy uppercase tracking-tighter leading-none"
            >
              Ready to scale
              <br />
              <span className="text-brand-navy/30">your brand globally?</span>
            </motion.h2>
            <p className="text-xl md:text-2xl font-bold text-brand-navy/70 max-w-2xl mx-auto leading-relaxed">
              Join brands across the world that trust GP Mercatus to drive real
              digital growth — with strategy, creativity, and measurable
              results.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button
                size="xl"
                variant="primary"
                className="shadow-2xl shadow-brand-navy/30"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-brand-navy/20 bg-transparent"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
            <p className="text-xs font-black text-brand-navy/40 uppercase tracking-[0.3em]">
              support@gpmercatus.in · +91-8826906159 · www.gpmercatus.in
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
