import React from "react";
import { motion } from "motion/react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Cookie,
  UserCheck,
  AlertTriangle,
  Mail,
  Globe,
  Phone,
} from "lucide-react";

const PrivacyPolicies = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content:
        "We collect data you provide during client onboarding, including name, email, phone, company details, and payment info. Usage data like IP addresses and site interactions help optimize services via tools like Google Analytics. Financial details for billing are secured per India's Information Technology Act.",
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content:
        "Data enables SEO audits, ad campaigns, content scripting, analytics reports, and personalized marketing. We use it for communications, payments, and service improvements. Sharing is limited to trusted providers like Hostinger and Google under confidentiality agreements.",
    },
    {
      icon: Shield,
      title: "Data Sharing and Disclosure",
      content:
        "We never sell your data. It may be disclosed for legal reasons, service delivery, or with consent. In business transitions, data transfers with notice and security measures.",
    },
    {
      icon: Lock,
      title: "Security Practices",
      content:
        "Encryption, access controls, and audits protect your data. We follow IT Rules for reasonable security and notify users of breaches promptly.",
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content:
        "Request access, corrections, or deletion via email. Opt out of marketing anytime; manage cookies through browser settings.",
    },
    {
      icon: AlertTriangle,
      title: "Grievance Officer",
      content:
        "Name: Prashant Kumar\nEmail: support@gpmercatus.in\nContact: 8800426115\n\nComplaints resolved within one month per IT Rules.",
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content:
        "Cookies support functionality and analytics. Third-party tools track anonymized data; use cookie banners to adjust preferences.",
    },
    {
      icon: UserCheck,
      title: "Children's Privacy",
      content:
        "Services are for professionals; no data collection from children under 13.",
    },
    {
      icon: AlertTriangle,
      title: "Changes to Policy",
      content:
        "Updates posted here with new effective date; continued use means acceptance.",
    },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-brand-yellow py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-brand-yellow text-[10px] uppercase tracking-[0.3em] font-black mb-8"
          >
            <Shield size={14} />
            Privacy & Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-navy leading-[0.9]"
          >
            Privacy
            <br />
            Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-brand-navy/60 font-bold max-w-3xl mx-auto leading-relaxed"
          >
            GP Mercatus prioritizes your privacy as a digital marketing and
            content creation service provider.
          </motion.p>

          <p className="mt-6 text-sm font-black uppercase tracking-widest text-brand-navy/40">
            Effective Date: May 13, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 bg-brand-cream-dark">
        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-brand-navy/5 shadow-xl shadow-brand-navy/5"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center text-brand-navy flex-shrink-0">
                  <section.icon size={24} />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-navy">
                    {section.title}
                  </h2>

                  <div className="space-y-4 text-brand-navy/70 text-base leading-relaxed font-medium whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-navy text-white rounded-[2.5rem] p-10 md:p-14 mt-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-brand-yellow/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-brand-yellow" size={28} />
                <h2 className="text-3xl font-black uppercase tracking-tight">
                  Contact Us
                </h2>
              </div>

              <div className="space-y-5 text-white/70 text-base leading-relaxed font-medium">
                <p>
                  If you have any questions regarding this Privacy Policy,
                  please contact GP Mercatus.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-yellow" />
                    <span>privacy@gpmercatus.in</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-brand-yellow" />
                    <span>8800426115</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-brand-yellow" />
                    <span>GP Mercatus, New Delhi, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicies;
