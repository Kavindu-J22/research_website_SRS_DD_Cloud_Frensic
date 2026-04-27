import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import DiagramPlaceholder from '@/components/DiagramPlaceholder';

export default function Methodology() {
  return (
    <PageWrapper title="3. Methodology">
      <section style={{ marginBottom: '3rem' }}>
        <p>
          The methodology for this research is based on a **Hybrid Polyglot Microservices** design. We utilized four specialized machine learning and cryptographic engines orchestrated by a central Node.js backend. This allows for independent scaling of detection and preservation modules.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Core Modules</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none' }}>
          <li style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
            <strong style={{ color: 'var(--accent-primary)' }}>M1: Behavioral Ensemble</strong><br />
            An ensemble of Isolation Forest (anomaly detection), One-Class SVM (boundary learning), and Autoencoders (reconstruction error).
          </li>
          <li style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
            <strong style={{ color: 'var(--accent-primary)' }}>M2: Stateful Correlation</strong><br />
            A temporal correlator that maps event sequences to MITRE ATT&CK tactics (Reconnaissance, Execution, Persistence, Exfiltration).
          </li>
          <li style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
            <strong style={{ color: 'var(--accent-primary)' }}>M3: Cryptographic Notary</strong><br />
            Implementation of SHA-256 chaining and RSA-2048 signing for each evidence block to ensure non-repudiation.
          </li>
        </ul>
      </section>

      <div style={{ margin: '3rem 0', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>System Architecture Diagram</h4>
        <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden', borderRadius: '24px' }}>
          <Image 
            src="/images/architecture.png" 
            alt="System Architecture Diagram" 
            width={1000} 
            height={600} 
            style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
          />
        </div>
      </div>

      <section>
        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Implementation Workflow</h3>
        <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li><strong>Data Ingestion:</strong> Normalizing unstructured cloud logs into JSON schemas.</li>
          <li><strong>Feature Engineering:</strong> Extracting 7 key behavioral dimensions from raw events.</li>
          <li><strong>ML Inference:</strong> Concurrent execution of ensemble models on port 8001-8004.</li>
          <li><strong>Cryptographic Sealing:</strong> Hashing and signing of detection results.</li>
        </ol>
      </section>
    </PageWrapper>
  );
}
