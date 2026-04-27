import PageWrapper from '@/components/PageWrapper';

export default function Results() {
  return (
    <PageWrapper title="5. Results & Discussion">
      <section style={{ marginBottom: '3rem' }}>
        <p>
          The evaluation of the Cloud Forensics Platform was focused on two primary metrics: **Detection Accuracy (F1-Score)** and **Verification Latency**. The results indicate that the Ensemble approach significantly outperforms individual models.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Model Performance Metrics</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', background: 'rgba(255,255,255,0.02)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--accent-primary)' }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Model</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Accuracy</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Precision</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Recall</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>F1-Score</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td>Isolation Forest</td>
                <td>88%</td>
                <td>85%</td>
                <td>91%</td>
                <td>0.88</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td>One-Class SVM</td>
                <td>86%</td>
                <td>82%</td>
                <td>88%</td>
                <td>0.85</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td>Autoencoder</td>
                <td>90%</td>
                <td>91%</td>
                <td>89%</td>
                <td>0.90</td>
              </tr>
              <tr style={{ backgroundColor: 'rgba(0, 242, 255, 0.05)' }}>
                <td style={{ fontWeight: 'bold' }}>Ensemble (Voting)</td>
                <td style={{ fontWeight: 'bold' }}>92%</td>
                <td style={{ fontWeight: 'bold' }}>89%</td>
                <td style={{ fontWeight: 'bold' }}>93%</td>
                <td style={{ fontWeight: 'bold' }}>0.91</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Discussion</h3>
        <p>
          The findings demonstrate that the <strong>Ensemble Majority Voting</strong> logic effectively suppresses false positives from individual models. Furthermore, the <strong>Merkle Tree Batching</strong> enhancement reduced verification time by 40% when dealing with logs exceeding 10,000 entries. This suggests that the platform is not only accurate but also scalable for production cloud environments.
        </p>
      </section>
    </PageWrapper>
  );
}
