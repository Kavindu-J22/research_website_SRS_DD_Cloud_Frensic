import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Innovations from '@/components/Innovations';

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Innovations />
      
      {/* --- Architecture Section --- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>System Architecture</h2>
            <p style={{ color: 'var(--text-secondary)' }}>A multi-layered microservices orchestration</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', overflow: 'hidden' }}>
             <img 
               src="/images/architecture.png" 
               alt="System Architecture Diagram" 
               style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--glass-border)' }} 
             />
          </div>
        </div>
      </section>

      {/* --- Research Significance --- */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="text-gradient">Research Significance</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Addressing the critical gaps in contemporary cloud forensics</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Proactive Defense</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Traditional forensics is reactive. Our platform shifts the paradigm to <strong>proactive monitoring</strong>, profiling behavior in real-time to detect threats before they escalate into breaches.
              </p>
            </div>
            <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-secondary)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Explainable AI (XAI)</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Move beyond "black box" detection. Our system provides <strong>Reasoning Factors</strong>, explaining exactly why a session was flagged, building trust with forensic investigators.
              </p>
            </div>
            <div className="glass-card" style={{ borderLeft: '4px solid #00ff88' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ff88' }}>Legal Integrity</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Ensuring legal admissibility is paramount. We automate the <strong>Chain of Custody</strong> through cryptographic notarization, meeting international ISO/IEC 27037:2012 standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Performance Metrics --- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Success Metrics</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Empirical results from our research evaluation</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            textAlign: 'center' 
          }}>
            <div className="glass-card" style={{ padding: '3rem 1.5rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>92%</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Ensemble Accuracy</p>
            </div>
            <div className="glass-card" style={{ padding: '3rem 1.5rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>98%</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Noise Reduction</p>
            </div>
            <div className="glass-card" style={{ padding: '3rem 1.5rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#00ff88', marginBottom: '0.5rem' }}>&lt;50ms</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Verification Speed</p>
            </div>
            <div className="glass-card" style={{ padding: '3rem 1.5rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#ffcc00', marginBottom: '0.5rem' }}>0.91</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>F1-Score (Ensemble)</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>
          © 2026 Cloud Forensics Research Project. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
