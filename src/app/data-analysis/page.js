import PageWrapper from '@/components/PageWrapper';

export default function DataAnalysis() {
  return (
    <PageWrapper title="4. Data Analysis">
      <section style={{ marginBottom: '3rem' }}>
        <p>
          Data analysis was conducted using the **CERT v4.2 Insider Threat Dataset** and synthetic normal-traffic generators to create a balanced evaluation set. We focused on behavioral dimensions that characterize legitimate vs. malicious session patterns.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Feature Vector Engineering (7 Dimensions)</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', background: 'rgba(255,255,255,0.02)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--accent-primary)' }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Dimension</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Feature Name</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Forensic Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td>Dim 0</td>
                <td>Hour of Day</td>
                <td>Identifying off-hours access (insider threat indicator).</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td>Dim 1</td>
                <td>Session Duration</td>
                <td>Abnormally long/short sessions for specific roles.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td>Dim 2</td>
                <td>Event Density</td>
                <td>Identifying automated bot activity or rapid exfiltration.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td>Dim 3</td>
                <td>IP Diversity</td>
                <td>Detection of account takeovers from unusual sources.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td>Dim 4</td>
                <td>File Access Ratio</td>
                <td>Monitoring data collection behaviors.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Preprocessing Strategy</h3>
        <p>
          Raw logs are canonicalized using a deterministic JSON serializer (`json.dumps(sort_keys=True)`) before hashing. This ensures that the cryptographic fingerprint is invariant to key ordering—a critical requirement for consistent forensic evidence.
        </p>
      </section>
    </PageWrapper>
  );
}
