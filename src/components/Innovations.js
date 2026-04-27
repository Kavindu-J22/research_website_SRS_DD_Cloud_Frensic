export default function Innovations() {
  const innovations = [
    {
      title: "Weighted Ensemble & XAI",
      description: "Moving beyond simple voting to adaptive weighting and feature contribution analysis for explainable forensic decisions.",
      tag: "C1 Enhancement"
    },
    {
      title: "Stateful Kill-Chain Tracker",
      description: "Correlating disparate MITRE techniques into a temporal sequence to identify advanced persistent threats (APTs).",
      tag: "C2 Enhancement"
    },
    {
      title: "Merkle Tree Ledger",
      description: "Transitioning to Merkle Trees for high-volume evidence batching and lightning-fast cryptographic verification.",
      tag: "C3 Enhancement"
    },
    {
      title: "NLP Narrative Synthesis",
      description: "Synthesizing raw log clusters into a human-readable forensic report automatically.",
      tag: "C4 Enhancement"
    }
  ];

  return (
    <section id="innovations" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Research Innovations</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              We've pushed the boundaries of standard cloud forensics by implementing state-of-the-art enhancements that satisfy the highest research standards.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {innovations.map((inn, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    minWidth: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--accent-primary)', 
                    marginTop: '0.6rem',
                    boxShadow: '0 0 10px var(--accent-primary)'
                  }}></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{inn.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{inn.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
            background: 'linear-gradient(45deg, var(--bg-surface) 0%, rgba(0, 242, 255, 0.05) 100%)',
            padding: '4rem',
            borderRadius: '40px',
            border: '1px solid var(--glass-border)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🔬</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The More Factor</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Our enhancements focus on Explainability, Efficiency, and Human-Readable Outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
