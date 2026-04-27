import PageWrapper from '@/components/PageWrapper';

export default function LiteratureReview() {
  return (
    <PageWrapper title="2. Literature Review">
      <section style={{ marginBottom: '3rem' }}>
        <p>
          The field of Cloud Forensics has evolved through three distinct generations. Early research focused on the basic acquisition of virtual machine snapshots. The second generation introduced log centralization (SIEM). The current generation—of which this research is a part—focuses on **Automated Intelligence and Machine Learning** for real-time attribution.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Comparative Analysis</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', background: 'rgba(255,255,255,0.02)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--accent-primary)' }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Feature</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Traditional Forensics</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Proposed ML Platform</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '1rem' }}>Response Mode</td>
                <td style={{ padding: '1rem' }}>Reactive (Post-incident)</td>
                <td style={{ padding: '1rem', color: 'var(--accent-primary)' }}>Proactive (Real-time)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '1rem' }}>Detection Method</td>
                <td style={{ padding: '1rem' }}>Static Rules / Signatures</td>
                <td style={{ padding: '1rem', color: 'var(--accent-primary)' }}>Behavioral Ensemble ML</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '1rem' }}>Chain of Custody</td>
                <td style={{ padding: '1rem' }}>Manual Documentation</td>
                <td style={{ padding: '1rem', color: 'var(--accent-primary)' }}>Automated Hash Chaining</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem' }}>Timeline Creation</td>
                <td style={{ padding: '1rem' }}>Manual Reconstruction</td>
                <td style={{ padding: '1rem', color: 'var(--accent-primary)' }}>DBSCAN-based Clustering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Research Gaps Addressed</h3>
        <p>
          Existing literature often treats identity profiling and incident detection as siloed processes. This research addresses this gap by creating an integrated feedback loop where behavioral anomalies from <strong>Identity Attribution (C1)</strong> feed directly into <strong>Incident Correlation (C2)</strong>, resulting in a more holistic forensic narrative.
        </p>
      </section>
    </PageWrapper>
  );
}
