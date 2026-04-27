import PageWrapper from '@/components/PageWrapper';

export default function Conclusion() {
  return (
    <PageWrapper title="6. Conclusion">
      <section style={{ marginBottom: '3rem' }}>
        <p>
          This research successfully delivers a state-of-the-art Cloud Forensics Platform that automates the transition from detection to digital evidence preservation. By integrating behavior profiling, MITRE ATT&CK correlation, and cryptographic notaries, we have created a robust ecosystem for cloud-native investigations.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Key Achievements</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.5rem' }}>
          <li><strong>High Accuracy Attribution:</strong> Achieved 92% accuracy in identifying malicious sessions using an unsupervised ensemble approach.</li>
          <li><strong>Court-Admissible Preservation:</strong> Developed a non-repudiable chain of custody using industry-standard RSA and SHA-256 primitives.</li>
          <li><strong>Autonomous Investigation:</strong> Automated the synthesis of attack timelines, significantly reducing the manual labor required by forensic experts.</li>
        </ul>
      </section>

      <section>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Future Work</h3>
        <p>
          Future enhancements will focus on integrating <strong>LLM-powered Explainability</strong> to provide deeper semantic reasoning for each alert. We also plan to explore decentralized storage for the evidence chain using IPFS to further enhance the resilience of the forensic ledger against localized server failures.
        </p>
      </section>

      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <a href="/" className="btn-primary">Return to Dashboard</a>
      </div>
    </PageWrapper>
  );
}
