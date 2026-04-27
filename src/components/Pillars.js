export default function Pillars() {
  const components = [
    {
      id: "C1",
      name: "Identity Attribution",
      description: "Behavioral profiling using an ensemble of Isolation Forest, SVM, and Autoencoders.",
      icon: "👤",
      color: "#00f2ff"
    },
    {
      id: "C2",
      name: "Incident Detection",
      description: "Real-time correlation engine mapped to the MITRE ATT&CK framework.",
      icon: "🛡️",
      color: "#7000ff"
    },
    {
      id: "C3",
      name: "Evidence Preservation",
      description: "Cryptographic chain-of-custody using RSA-2048 signing and hash chaining.",
      icon: "🔗",
      color: "#ff00e5"
    },
    {
      id: "C4",
      name: "Timeline Reconstruction",
      description: "Unsupervised log clustering using DBSCAN and TF-IDF for narrative synthesis.",
      icon: "⏳",
      color: "#00ff88"
    }
  ];

  return (
    <section id="pillars" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Four Core Pillars</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Our architecture is built on four independently developed microservices that work in concert to provide a unified forensic experience.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {components.map((c) => (
            <div key={c.id} className="glass-card" style={{ borderBottom: `4px solid ${c.color}` }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{c.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{c.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{c.description}</p>
              <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', fontWeight: '700', color: c.color }}>
                {c.id} MICROSERVICE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
