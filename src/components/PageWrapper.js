export default function PageWrapper({ title, children }) {
  return (
    <main className="animate-fade-up" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{title}</h1>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto' }}></div>
        </header>
        
        <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          {children}
        </div>
      </div>
    </main>
  );
}
