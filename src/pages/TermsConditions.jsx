import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  FileText,
  Scale,
  CreditCard,
  Lock,
  AlertTriangle,
  Mail,
  Globe,
} from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Services",
      content:
        "GP Mercatus provides professional services including digital marketing, advertising support, social media management, SEO, website-related work, branding, content, and other business growth solutions as agreed with the client. The exact scope of work, deliverables, timelines, and pricing will be discussed separately through proposal, quotation, invoice, message, or email confirmation.",
    },
    {
      icon: ShieldCheck,
      title: "2. Account Access",
      content:
        "To help grow the client’s business effectively, GP Mercatus may require access to relevant business accounts, platforms, dashboards, pages, ad accounts, websites, hosting panels, analytics tools, social media accounts, or other digital assets connected to the agreed services. The client agrees to provide the necessary access, permissions, and accurate credentials or authorized admin roles in a timely manner so the work can be performed properly.\n\nGP Mercatus will use such access only for service delivery, campaign management, optimization, reporting, and related business purposes connected to the agreed work. The client remains responsible for ownership of all business accounts and should provide only the level of access reasonably necessary for the assigned work.",
    },
    {
      icon: CreditCard,
      title: "3. Payment Terms",
      content:
        "For project-based work, the client must pay 50% of the total project fee in advance before work begins. The remaining 50% must be paid after the work is completed or before final delivery, handover, publishing, or transfer of final files, whichever applies to the project.\n\nAny delay in payment may result in delay, pause, suspension, or withholding of final delivery until dues are cleared. GP Mercatus reserves the right to stop work on ongoing services if agreed payments are not made on time.",
    },
    {
      icon: Scale,
      title: "4. Client Responsibilities",
      content:
        "The client agrees to provide accurate business information, required approvals, content, timely feedback, and account access needed for the project or service. Any delay from the client side, including delayed approvals, missing materials, or failure to provide access, may affect delivery timelines and project outcomes.",
    },
    {
      icon: FileText,
      title: "5. Revisions and Approvals",
      content:
        "Reasonable revisions may be provided depending on the agreed service scope. Work will be considered approved when the client confirms acceptance by message, email, verbal approval, or uses the delivered work in live business activity.",
    },
    {
      icon: AlertTriangle,
      title: "6. No Guarantee of Specific Results",
      content:
        "GP Mercatus will use professional efforts, skill, and industry knowledge to support the client’s growth, but does not guarantee fixed business outcomes such as exact sales, leads, rankings, reach, ad performance, or revenue unless specifically stated in a separate written agreement. Marketing and business results depend on multiple external factors beyond direct control.",
    },
    {
      icon: Lock,
      title: "7. Intellectual Property",
      content:
        "Unless otherwise agreed in writing, final paid deliverables created specifically for the client may be transferred or licensed to the client after full payment is received. GP Mercatus retains the right to keep internal methods, strategies, templates, working files, drafts, tools, and know-how unless explicitly included in the deliverables.",
    },
    {
      icon: ShieldCheck,
      title: "8. Confidentiality",
      content:
        "Any business information, login information, internal data, campaign details, or confidential material shared by the client will be treated with reasonable care and used only for service-related purposes. The client should also keep all commercial discussions, strategy documents, and service terms confidential unless disclosure is legally required.",
    },
    {
      icon: AlertTriangle,
      title: "9. Termination",
      content:
        "Either party may stop the service by written notice where appropriate, subject to pending dues and work already completed. Advance payments made for completed phases, reserved time, strategy work, setup work, or executed work may be non-refundable unless otherwise agreed in writing.",
    },
    {
      icon: Scale,
      title: "10. Limitation of Liability",
      content:
        "GP Mercatus will not be liable for indirect, incidental, special, business, platform, ad-account, algorithmic, or third-party losses arising from the use of its services. Liability, if any, will generally be limited to the amount actually paid by the client for the specific service giving rise to the claim, to the extent permitted by applicable law.",
    },
    {
      icon: FileText,
      title: "11. Changes to Terms",
      content:
        "GP Mercatus may update these Terms and Conditions from time to time. Updated terms will apply once posted on the website unless otherwise required by law.",
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
            <ShieldCheck size={14} />
            Legal Information
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-brand-navy leading-[0.9]"
          >
            Terms &
            <br />
            Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-brand-navy/60 font-bold max-w-3xl mx-auto leading-relaxed"
          >
            These Terms and Conditions govern the use of services provided by GP
            Mercatus through www.gpmercatus.in.
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
                  Contact
                </h2>
              </div>

              <div className="space-y-4 text-white/70 text-base leading-relaxed font-medium">
                <p>
                  If you have any questions regarding these Terms and
                  Conditions, please contact GP Mercatus.
                </p>

                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-brand-yellow" />
                    <span>www.gpmercatus.in</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-yellow" />
                    <span>info@gpmercatus.in</span>
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

export default TermsConditions;
