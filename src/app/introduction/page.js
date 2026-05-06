import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';

export default function Introduction() {
  const objectives = [
    {
      title: "Behavioral Profiling",
      desc: "Identify insider threats and account takeovers using an ensemble of unsupervised and self-supervised ML models."
    },
    {
      title: "Threat Correlation",
      desc: "Map raw security events to the global MITRE ATT&CK framework and correlate them into multi-stage kill chains."
    },
    {
      title: "Cryptographic Integrity",
      desc: "Establish a tamper-proof chain of custody using blockchain-inspired hash chaining and RSA-2048 digital signatures."
    },
    {
      title: "Timeline Reconstruction",
      desc: "Automatically cluster massive log datasets using DBSCAN to generate human-readable forensic narratives."
    }
  ];

  return (
    <PageWrapper title="1. Introduction">
      {/* --- Background --- */}
      <section style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          The rapid migration to cloud-native architectures has fundamentally transformed the landscape of digital forensics. As organizations shift their data and operations to the cloud, the sheer volume, velocity, and variety of logs have outpaced the capabilities of traditional forensic methodologies. Conventional digital forensics is primarily <strong>reactive</strong>—initiating only after a breach is discovered, which often leads to the loss of volatile cloud evidence and delayed response times.
        </p>
      </section>

      {/* --- Research Problem & Gap --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
        <div className="glass-card" style={{ borderLeft: '4px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span>⚠️</span> Research Problem
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Contemporary Cloud Forensics faces critical challenges: the high volatility of cloud evidence (ephemeral instances), the massive volume of logs leading to <strong>Alert Fatigue</strong>, and the complexity of maintaining a legally admissible <strong>Chain of Custody</strong> in distributed environments.
          </p>
        </div>

        <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span>🔍</span> Research Gap
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Existing literature often treats identity profiling and incident detection as <strong>siloed processes</strong>. There is a lack of integrated feedback loops where behavioral anomalies feed directly into incident correlation engines to create a holistic, automated forensic narrative.
          </p>
        </div>
      </div>

      {/* --- Diagram Section --- */}
      <div style={{ margin: '5rem 0', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '2rem' }}>Integrated Forensic Lifecycle</h3>
        <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden', borderRadius: '24px', background: 'rgba(0,0,0,0.4)' }}>
          <Image 
            src="/images/overview.png" 
            alt="System Overview Diagram" 
            width={1200} 
            height={700} 
            style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
          />
          <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Figure 1: High-level architectural flow of the automated cloud forensics platform.
          </p>
        </div>
      </div>

      {/* --- Research Objectives --- */}
      <section style={{ marginBottom: '5rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '2.5rem', fontSize: '2rem', textAlign: 'center' }}>Research Objectives</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {objectives.map((obj, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: 'var(--accent-primary)22', 
                color: 'var(--accent-primary)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                border: '1px solid var(--accent-primary)44'
              }}>
                0{idx + 1}
              </div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{obj.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{obj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Research Novelty --- */}
      <section style={{ background: 'var(--bg-surface)', padding: '4rem', borderRadius: '30px', border: '1px solid var(--glass-border)' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Research Novelty & Contribution</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
          This research contributes an <strong>end-to-end automated pipeline</strong> that bridges the gap between real-time security monitoring and post-incident digital forensics. By combining <strong>Behavioral Ensemble ML</strong>, <strong>Stateful MITRE Correlation</strong>, and <strong>Cryptographic Ledger</strong> technology, the platform provides a robust, standardized, and explainable solution for modern digital investigations.
        </p>
      </section>
    </PageWrapper>
  );
}
