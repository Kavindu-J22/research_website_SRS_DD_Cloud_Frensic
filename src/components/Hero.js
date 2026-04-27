import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '12rem', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="animate-fade-up">
            <span className="font-outfit" style={{ color: 'var(--accent-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
              Final Year Research Project
            </span>
            <h1 className="text-gradient" style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem', marginTop: '1rem' }}>
              Advanced Cloud <br /> Forensics Platform
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
              Automating threat attribution and evidence preservation through ensemble machine learning and cryptographic chain-of-custody.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#pillars" className="btn-primary">Explore Pillars</a>
              <a href="#report" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View Full Report →
              </a>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.2s', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              width: '120%', 
              height: '120%', 
              background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, transparent 70%)',
              top: '-10%',
              left: '-10%',
              zIndex: -1
            }}></div>
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '32px', border: '1px solid rgba(0, 242, 255, 0.2)' }}>
              <Image 
                src="/hero.png" 
                alt="Cloud Forensics Architecture" 
                width={600} 
                height={600} 
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
