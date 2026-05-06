import PageWrapper from '@/components/PageWrapper';

export default function Presentations() {
  const presentations = [
    {
      title: "PP1 Presentation",
      description: "Initial project proposal covering domain research, problem statement, and proposed architecture.",
      type: "PowerPoint",
      url: "https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/IQBPG9rDt2QFRoePj6tzGsLwARUdgehvoxGNCpWHzBKjjYA?e=9ooKAH",
      icon: "📽️",
      color: "#00f2ff"
    },
    {
      title: "PP2 Presentation",
      description: "Mid-project progress review demonstrating initial ML models and core backend implementation.",
      type: "PowerPoint",
      url: "https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/IQDNIwRDoY22RK41oHzlAPEVARrLO5kvq146ScRoluMXiDs?e=6MPWvA",
      icon: "🎬",
      color: "#7000ff"
    },
    {
      title: "PP2 Demo Video",
      description: "Live demonstration of the integrated Cloud Forensics Platform showing end-to-end log analysis.",
      type: "Video",
      url: "https://mysliit.sharepoint.com/:v:/s/CDAPSubmissionCloud/IQBhpahXH6KiRIVv8XczU9ZCASeh-HUsLwcpxMv8HUca9jo?e=LB4o2u",
      icon: "🎥",
      color: "#ff00e5"
    },
    {
      title: "Final Presentation",
      description: "Final research presentation detailing system performance, accuracy metrics, and forensic value.",
      type: "PowerPoint",
      url: "https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/IQCK_NZscBOJSoWUm3WjDh0aASsohcQDeMpP19qH2ca_iX0?e=dcxgnH",
      icon: "🏆",
      color: "#00ff88"
    }
  ];

  return (
    <PageWrapper title="Project Presentations">
      <section style={{ marginBottom: '4rem' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
          Explore our progress presentations and project demonstrations delivered throughout the lifecycle of the Cloud Forensics Research Project.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {presentations.map((pres, index) => (
            <a 
              key={index} 
              href={pres.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-card"
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '1.2rem',
                textDecoration: 'none',
                color: 'inherit',
                borderTop: `4px solid ${pres.color || 'var(--accent-secondary)'}`,
                transition: 'var(--transition-smooth)',
                padding: '2rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: `${pres.color || 'var(--accent-secondary)'}11`, 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.2rem',
                  border: `1px solid ${pres.color || 'var(--accent-secondary)'}22`
                }}>
                  {pres.icon}
                </div>
                <span style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '50px', 
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--text-secondary)',
                  letterSpacing: '1px'
                }}>
                  {pres.type}
                </span>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>{pres.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {pres.description}
                </p>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: pres.color || 'var(--accent-secondary)',
                fontWeight: '700',
                fontSize: '0.85rem',
                marginTop: 'auto',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Open Presentation 
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
