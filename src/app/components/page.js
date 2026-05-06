import PageWrapper from '@/components/PageWrapper';

export default function Components() {
  const components = [
    {
      id: "C1",
      name: "Identity Profiling",
      description: "Behavioral attribution profiling using an ensemble of Machine Learning models (Isolation Forest, SVM, Autoencoders) to analyze multidimensional user behavior and establish baseline profiles.",
      icon: "👤",
      color: "#00f2ff",
      features: ["Behavioral baselining", "Anomaly detection", "Multi-model ensemble approach"],
      developer: {
        name: "T. R. Hettiarachchi",
        image: "/images/team/T. R. Hettiarachchi.png",
        role: "Lead Developer"
      }
    },
    {
      id: "C2",
      name: "Incident Detection",
      description: "A real-time correlation engine that maps detected anomalies to the MITRE ATT&CK framework, providing tactical context and reducing alert fatigue.",
      icon: "🛡️",
      color: "#7000ff",
      features: ["Real-time stream processing", "MITRE ATT&CK mapping", "Alert fatigue reduction"],
      developer: {
        name: "W. L.C.A.Fernando",
        image: "/images/team/W. L.C.A.Fernando.png",
        role: "Lead Developer"
      }
    },
    {
      id: "C3",
      name: "Evidence Preservation",
      description: "Establishes a non-repudiable chain of custody using RSA-2048 signing and cryptographic hash chaining immediately upon incident detection.",
      icon: "🔗",
      color: "#ff00e5",
      features: ["Cryptographic signing", "Hash chaining", "Immutable evidence ledger"],
      developer: {
        name: "C. D. Aluthge",
        image: "/images/team/C. D. Aluthge.png",
        role: "Lead Developer"
      }
    },
    {
      id: "C4",
      name: "Timeline Reconstruction",
      description: "Automates forensic narrative synthesis through unsupervised log clustering (DBSCAN) and TF-IDF to accelerate investigator response time.",
      icon: "⏳",
      color: "#00ff88",
      features: ["Unsupervised clustering", "Narrative synthesis", "Rapid incident response"],
      developer: {
        name: "W. K. S. De Silva",
        image: "/images/team/W. K. S. De Silva.png",
        role: "Lead Developer"
      }
    }
  ];

  return (
    <PageWrapper title="System Components">
      <section style={{ marginBottom: '4rem' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
          Our architecture is built on four independently developed microservices that work in concert to provide a unified, automated forensic lifecycle experience.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {components.map((c, index) => (
            <div 
              key={c.id} 
              className="glass-card" 
              style={{ 
                display: 'flex', 
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                gap: '3rem',
                alignItems: 'center',
                borderLeft: index % 2 === 0 ? `4px solid ${c.color}` : '1px solid var(--glass-border)',
                borderRight: index % 2 !== 0 ? `4px solid ${c.color}` : '1px solid var(--glass-border)'
              }}
            >
              <div style={{ flex: 1, padding: '1rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                  <span style={{ 
                    background: `linear-gradient(135deg, ${c.color}22, transparent)`, 
                    padding: '1.5rem', 
                    borderRadius: '24px',
                    border: `1px solid ${c.color}44`
                  }}>
                    {c.icon}
                  </span>
                </div>
              </div>
              
              <div style={{ flex: 2, textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                <div style={{ 
                  display: 'inline-block',
                  padding: '0.4rem 1rem', 
                  background: `${c.color}22`, 
                  color: c.color, 
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  {c.id} MICROSERVICE
                </div>
                
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                  {c.description}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  flexWrap: 'wrap',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                }}>
                  {c.features.map(feature => (
                    <span 
                      key={feature} 
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.05)', 
                        padding: '0.5rem 1rem', 
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div style={{ 
                  marginTop: '2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)'
                }}>
                  <div style={{ textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Developed By</p>
                    <p style={{ fontSize: '0.95rem', fontWeight: '600' }}>{c.developer.name}</p>
                  </div>
                  <div style={{ 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    border: `2px solid ${c.color}`,
                    boxShadow: `0 0 10px ${c.color}33`
                  }}>
                    <img 
                      src={c.developer.image} 
                      alt={c.developer.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
