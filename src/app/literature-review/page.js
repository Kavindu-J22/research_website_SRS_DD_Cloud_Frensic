import PageWrapper from '@/components/PageWrapper';

export default function LiteratureReview() {
  return (
    <PageWrapper title="2. Literature Review">
      <section style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)' }}>
          The field of Cloud Forensics has evolved through three distinct generations. Early research focused on basic acquisition of virtual machine snapshots. The second generation introduced log centralization and SIEM. The current generation focuses on <strong>Automated Intelligence and Machine Learning</strong> for real-time attribution and proactive defense.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {/* Pillar 1 */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>I. Identity Attribution</h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
            Focuses on identifying insider threats by learning "normal" behavioral boundaries. Our research utilizes a <strong>Three-Model Ensemble</strong> (Isolation Forest, One-Class SVM, and Autoencoders) to profile 7-dimensional behavioral vectors.
          </p>
        </div>

        {/* Pillar 2 */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>II. Incident Correlation</h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
            Bridges the gap between raw logs and actionable intelligence by mapping events to the <strong>MITRE ATT&CK</strong> framework. It employs stateful correlation to detect multi-stage kill chains rather than isolated alerts.
          </p>
        </div>

        {/* Pillar 3 */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>III. Evidence Integrity</h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
            Ensures legal admissibility through automated chain-of-custody. Implements <strong>SHA-256 Hash Chaining</strong> and <strong>RSA-2048 Notarization</strong>, adhering to ISO/IEC 27037:2012 forensic standards.
          </p>
        </div>

        {/* Pillar 4 */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>IV. Timeline Reconstruction</h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
            Automates the discovery of attack patterns using <strong>Unsupervised Clustering (DBSCAN)</strong>. Semantic analysis via TF-IDF vectorization allows the system to identify anomalous URL patterns and zero-day vectors.
          </p>
        </div>
      </div>

      <section style={{ marginBottom: '4rem' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Comparative Forensic Analysis</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--accent-primary)' }}>
                <th style={{ padding: '1.2rem', textAlign: 'left' }}>Feature</th>
                <th style={{ padding: '1.2rem', textAlign: 'left' }}>Traditional Methods</th>
                <th style={{ padding: '1.2rem', textAlign: 'left' }}>Our Proposed Platform</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '1.2rem' }}>Response Mode</td>
                <td style={{ padding: '1.2rem' }}>Reactive / Manual</td>
                <td style={{ padding: '1.2rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Proactive / Automated</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '1.2rem' }}>Attribution</td>
                <td style={{ padding: '1.2rem' }}>IP-Based (Easy to Spoof)</td>
                <td style={{ padding: '1.2rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Behavioral Ensemble ML</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '1.2rem' }}>Integrity</td>
                <td style={{ padding: '1.2rem' }}>Manual Documentation</td>
                <td style={{ padding: '1.2rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Cryptographic Hash Chaining</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem' }}>Analysis</td>
                <td style={{ padding: '1.2rem' }}>Signature-Based</td>
                <td style={{ padding: '1.2rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Unsupervised Anomaly Discovery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ background: 'rgba(0,0,0,0.2)', padding: '3rem', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '2rem' }}>Key References</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>CERT Insider Threat Dataset v4.2</p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              Glasser, J., & Lindauer, B. (2013). Bridging the Gap: A Pragmatic Approach to Generating Insider Threat Data. 
              Used for training and validating Identity Attribution models.
            </p>
          </li>
          <li style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>ISO/IEC 27037:2012 Standard</p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              International Organization for Standardization. Guidelines for identification, collection, acquisition and preservation of digital evidence.
              Framework for Component 3 Evidence Preservation.
            </p>
          </li>
          <li style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>MITRE ATT&CK Framework</p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              Strom, B. E., et al. (2018). MITRE ATT&CK: Design and Philosophy. 
              Standardized taxonomy for Component 2 Incident Correlation.
            </p>
          </li>
          <li style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>DBSCAN Clustering (Ester et al., 1996)</p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              A density-based algorithm for discovering clusters in large spatial databases with noise.
              Core algorithm for Component 4 Timeline Reconstruction.
            </p>
          </li>
          <li style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Isolation Forest & One-Class SVM</p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              Liu et al. (2008) & Schölkopf et al. (2001). Foundational algorithms for 
              unsupervised anomaly detection in high-dimensional security logs.
            </p>
          </li>
        </ul>
      </section>
    </PageWrapper>
  );
}
