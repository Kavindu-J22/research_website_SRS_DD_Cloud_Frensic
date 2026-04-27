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
          <div className="glass-card" style={{ padding: '4rem', textAlign: 'center' }}>
             {/* Simple visual representation of architecture */}
             <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="glass-card" style={{ width: '200px' }}>Frontend (Next.js)</div>
                <div style={{ alignSelf: 'center', fontSize: '2rem' }}>↓</div>
                <div className="glass-card" style={{ width: '200px' }}>Backend (Node.js)</div>
                <div style={{ alignSelf: 'center', fontSize: '2rem' }}>↓</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="glass-card" style={{ width: '120px', fontSize: '0.8rem' }}>C1: Identity</div>
                  <div className="glass-card" style={{ width: '120px', fontSize: '0.8rem' }}>C2: Incident</div>
                  <div className="glass-card" style={{ width: '120px', fontSize: '0.8rem' }}>C3: Evidence</div>
                  <div className="glass-card" style={{ width: '120px', fontSize: '0.8rem' }}>C4: Timeline</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- Final Report Section --- */}
      <section id="report" className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Research Report Draft</h2>
            
            <div className="glass-card" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>1. Introduction</h3>
                <p>As enterprises migrate to cloud-native architectures, the complexity of digital investigations has increased exponentially. This research presents an integrated Cloud Forensics Platform that leverages machine learning to automate the entire lifecycle of an investigation.</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>2. Objectives</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li><strong>Behavioral Attribution:</strong> Profiling multi-dimensional user behavior.</li>
                  <li><strong>Tactical Incident Correlation:</strong> Aligning logs with MITRE ATT&CK.</li>
                  <li><strong>Evidence Ledger:</strong> Establishing a non-repudiable chain of custody.</li>
                  <li><strong>Timeline Reconstruction:</strong> Reducing investigator response time.</li>
                </ul>
              </div>

              <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Detailed report continues in the full submission document.</p>
                <a href="#" className="btn-primary">Download PDF Report</a>
              </div>
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
