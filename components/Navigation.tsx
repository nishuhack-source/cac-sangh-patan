"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'होम' },
    { href: '/about', label: 'हमारे बारे में' },
    { href: '/office-bearers', label: 'पदाधिकारी' },
    { href: '/notices', label: 'सूचनाएँ' },
    { href: '/events', label: 'कार्यक्रम' },
    { href: '/news', label: 'समाचार' },
    { href: '/documents', label: 'दस्तावेज' },
    { href: '/gallery', label: 'गैलरी' },
    { href: '/contact', label: 'संपर्क' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="text-white font-bold text-lg">CAC</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-sm">सी.ए.सी. संघ पाटन</div>
              <div className="text-xs text-gray-500">जिला दुर्ग, छत्तीसगढ़</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="tel:+919039790762" className="btn btn-primary text-sm">
              📞 संपर्क करें
            </a>
          </div>

          <button 
            onClick={() => setOpen(true)} 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold text-gray-900">मेन्यू</span>
          <button onClick={() => setOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-1">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl hover:bg-orange-50 text-gray-700 hover:text-orange-600 font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="p-4 border-t mt-4">
          <a href="tel:+919039790762" className="btn btn-primary w-full justify-center">
            📞 9039790762
          </a>
        </div>
      </div>
    </>
  );
}
