import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Megaphone, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Who We Serve", path: "/audience" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-[100] transition-all duration-500 py-6 px-6",
        scrolled ? "py-4" : "",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-6 lg:px-8 py-4 rounded-[1.5rem] transition-all duration-500 flex justify-between items-center",
          scrolled ? "glass shadow-2xl shadow-brand-navy/5" : "bg-transparent",
        )}
      >
        <Link
          to="/"
          className="flex items-center group"
          aria-label="GP Mercatus Home"
        >
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="w-13 h-10 rounded-xl flex items-center justify-center text-brand-navy"
          >
            <img src={logo} alt="brand logo" />
          </motion.div>
          <span className="text-2xl font-black uppercase tracking-tighter text-brand-navy text-brand-yellow">
            MERCATUS
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-yellow relative group",
                  location.pathname === link.path
                    ? "text-brand-navy"
                    : "text-brand-navy/40",
                )}
              >
                {link.title}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-brand-yellow transition-all duration-500",
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                ></span>
              </Link>
            ))}
          </div>
          <Button variant="primary" size="sm">
            <Link to="/contact" className="flex items-center gap-2">
              Get Started <ArrowUpRight size={14} />
            </Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 bg-brand-navy rounded-[2.5rem] shadow-2xl lg:hidden border border-white/5"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-yellow transition-colors"
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button
                  variant="yellow"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
