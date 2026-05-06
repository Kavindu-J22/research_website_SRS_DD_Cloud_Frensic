import PageWrapper from '@/components/PageWrapper';

export default function Presentations() {
  const presentations = [
    {
      title: "PP1 Presentation",
      type: "PowerPoint",
      url: "https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/IQBPG9rDt2QFRoePj6tzGsLwARUdgehvoxGNCpWHzBKjjYA?e=9ooKAH",
      icon: "📊"
    },
    {
      title: "PP2 Presentation",
      type: "PowerPoint",
      url: "https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/IQDNIwRDoY22RK41oHzlAPEVARrLO5kvq146ScRoluMXiDs?e=6MPWvA",
      icon: "📊"
    },
    {
      title: "PP2 Demo Video",
      type: "Video",
      url: "https://mysliit.sharepoint.com/:v:/s/CDAPSubmissionCloud/IQBhpahXH6KiRIVv8XczU9ZCASeh-HUsLwcpxMv8HUca9jo?e=LB4o2u",
      icon: "🎬"
    },
    {
      title: "Final Presentation",
      type: "PowerPoint",
      url: "https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/IQCK_NZscBOJSoWUm3WjDh0aASsohcQDeMpP19qH2ca_iX0?e=dcxgnH",
      icon: "📊"
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
                gap: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                borderTop: '4px solid var(--accent-secondary)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>{pres.icon}</span>
                <span style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '0.4rem 0.8rem', 
                  borderRadius: '6px', 
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'var(--text-secondary)'
                }}>
                  {pres.type}
                </span>
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{pres.title}</h3>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: 'var(--accent-secondary)',
                fontWeight: '600',
                fontSize: '0.9rem',
                marginTop: 'auto'
              }}>
                Watch / View 
                <span style={{ transition: 'transform 0.2s' }} className="arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
