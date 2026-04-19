import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pathname, page_location: window.location.href });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-yellow/30">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* Floating WhatsApp CTA */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        href="https://wa.me/918826906159?text=Hi%20GP%20Mercatus%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20for%20my%20brand."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GP Mercatus on WhatsApp"
        className="fixed bottom-10 right-10 z-[110] group"
      >
        <div className="absolute -top-14 right-0 bg-brand-navy text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-2xl transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
          Chat with us!
        </div>
        <div className="bg-green-500 text-white p-5 rounded-[1.5rem] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group-hover:shadow-green-500/30">
          <MessageCircle size={28} fill="white" />
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-4 border-white animate-pulse"></div>
        </div>
      </motion.a>
    </div>
  );
};

export default Layout;
