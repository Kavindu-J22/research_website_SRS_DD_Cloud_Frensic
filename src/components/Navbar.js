'use client';

import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Intro", href: "/introduction" },
    { name: "Lit Review", href: "/literature-review" },
    { name: "Methodology", href: "/methodology" },
    { name: "Data", href: "/data-analysis" },
    { name: "Results", href: "/results" },
    { name: "Conclusion", href: "/conclusion" },
  ];

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 100, 
      padding: '1.25rem 0',
      background: 'rgba(5, 5, 5, 0.85)',
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="font-outfit" style={{ fontWeight: '700', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ width: '28px', height: '28px', background: 'var(--accent-primary)', borderRadius: '6px', boxShadow: '0 0 15px var(--accent-primary)' }}></div>
          CloudForensics
        </Link>
        
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: '500' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition-smooth)' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
