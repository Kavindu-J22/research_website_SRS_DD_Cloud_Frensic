'use client';

import Link from 'next/link';

export default function Navbar() {
  const domainLinks = [
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
        
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', fontWeight: '500', alignItems: 'center' }}>
          <Link href="/" className="nav-link" style={{ padding: '0.5rem' }}>Home</Link>
          
          <div className="dropdown" style={{ padding: '0.5rem 0' }}>
            <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '0.5rem' }}>
              Domain <span style={{ fontSize: '0.6rem' }}>▼</span>
            </span>
            <div className="dropdown-content">
              {domainLinks.map((link) => (
                <Link key={link.href} href={link.href} className="dropdown-item">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/components" className="nav-link" style={{ padding: '0.5rem' }}>Components</Link>
          <Link href="/milestones" className="nav-link" style={{ padding: '0.5rem' }}>Milestones</Link>
          <Link href="/documents" className="nav-link" style={{ padding: '0.5rem' }}>Documents</Link>
          <Link href="/presentations" className="nav-link" style={{ padding: '0.5rem' }}>Presentations</Link>
          <Link href="/about-us" className="nav-link" style={{ padding: '0.5rem' }}>About Us</Link>
          <Link href="/contacts" className="nav-link" style={{ padding: '0.5rem' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
