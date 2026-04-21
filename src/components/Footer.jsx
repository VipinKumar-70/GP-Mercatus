import React from "react";
import { Link } from "react-router-dom";
import {
  Megaphone,
  Mail,
  Phone,
  Globe,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/logo.png"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          {/* Brand */}
          <div className="space-y-8 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2"
              aria-label="GP Mercatus Home"
            >
              <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-brand-yellow">
                MERCATUS
              </span>
            </Link>
            <p className="text-white/40 font-medium leading-relaxed text-sm max-w-sm">
              A full-service global digital marketing agency helping brands
              worldwide grow through performance advertising, SEO, social media,
              and creative strategy. A unit of Admirable Group.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/gpmercatus",
                  label: "Instagram",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=61577682877361",
                  label: "Facebook",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/gp-mercatus/",
                  label: "LinkedIn",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GP Mercatus on ${s.label}`}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all duration-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Who We Serve", path: "/audience" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-base font-bold text-white/60 hover:text-brand-yellow transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "Performance Marketing",
                "Search Engine Optimisation",
                "Social Media Marketing",
                "Creative Strategy & Design",
                "Content Marketing",
                "Web Analytics & Reporting",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-base font-bold text-white/60 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Contact
            </h4>
            <div className="space-y-5">
              <a
                href="mailto:support@gpmercatus.in"
                className="flex gap-4 group"
              >
                <Mail
                  className="text-brand-yellow flex-shrink-0 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <p className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                  support@gpmercatus.in
                </p>
              </a>
              <a href="tel:+918826906159" className="flex gap-4 group">
                <Phone
                  className="text-brand-yellow flex-shrink-0 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <p className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                  +91-8826906159
                </p>
              </a>
              <a href="https://www.gpmercatus.in" className="flex gap-4 group">
                <Globe
                  className="text-brand-yellow flex-shrink-0 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <p className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                  www.gpmercatus.in
                </p>
              </a>
            </div>
            <div className="p-6 bg-brand-yellow rounded-2xl text-brand-navy">
              <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">
                Status
              </p>
              <p className="font-black text-sm uppercase leading-none italic">
                Accepting New Clients Globally
              </p>
            </div>
          </div>
        </div>

        <div className="pt-14 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <p>
            © {year} GP Mercatus – A Unit of Admirable Group. All Rights
            Reserved.
          </p>
          <div className="flex gap-8">
            <span className="cursor-default hover:text-white transition-colors">
              Privacy Policy
            </span>
            <span className="cursor-default hover:text-white transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
