import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import DiagramPlaceholder from '@/components/DiagramPlaceholder';

export default function Introduction() {
  return (
    <PageWrapper title="1. Introduction">
      <section style={{ marginBottom: '3rem' }}>
        <p>
          The rapid migration to cloud-native architectures has fundamentally transformed the landscape of digital forensics. As organizations shift their data and operations to the cloud, the sheer volume, velocity, and variety of logs have outpaced the capabilities of traditional forensic methodologies. Conventional digital forensics is primarily reactive—initiating only after a breach is discovered, which often leads to the loss of volatile cloud evidence and delayed response times.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Problem Statement</h3>
        <p>
          Contemporary Cloud Forensics faces three critical challenges that this research addresses:
        </p>
        <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.5rem' }}>
          <li>
            <strong>Volatility of Cloud Evidence:</strong> Ephemeral instances and dynamic IP addresses make evidence collection a race against time.
          </li>
          <li>
            <strong>Alert Fatigue:</strong> Security analysts are overwhelmed by high volumes of false positives from static-rule SIEM tools.
          </li>
          <li>
            <strong>Chain of Custody Integrity:</strong> Proving the authenticity of digital logs in a court of law requires robust, non-repudiable sealing at the point of collection.
          </li>
        </ul>
      </section>

      <div style={{ margin: '3rem 0', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>System Overview Diagram</h4>
        <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden', borderRadius: '24px' }}>
          <Image 
            src="/images/overview.png" 
            alt="System Overview Diagram" 
            width={1000} 
            height={600} 
            style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
          />
        </div>
      </div>

      <section>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Research Contribution</h3>
        <p>
          This research presents an integrated platform that leverages **Ensemble Machine Learning** and **Cryptographic Hash-Chaining** to automate the forensic lifecycle. By shifting from reactive to proactive monitoring, the platform ensures that potential threats are profiled and evidence is preserved instantaneously upon detection.
        </p>
      </section>
    </PageWrapper>
  );
}
