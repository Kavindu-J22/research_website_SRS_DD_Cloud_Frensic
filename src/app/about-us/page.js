'use client';

export default function AboutUs() {
  const team = [
    {
      name: "T. R. Hettiarachchi",
      id: "IT22920836",
      email: "it22920836@my.sliit.lk",
      role: "Group Leader",
      component: "Identity attribution and behavior profiling development",
      icon: "👤"
    },
    {
      name: "W. L.C.A.Fernando",
      id: "IT22033550",
      email: "it22033550@my.sliit.lk",
      role: "Research Member",
      component: "Incident Detection and Correlation Development",
      icon: "🔍"
    },
    {
      name: "C. D. Aluthge",
      id: "IT22581402",
      email: "it22581402@my.sliit.lk",
      role: "Research Member",
      component: "Evidence Preservation and Chain of Custody Automation",
      icon: "🛡️"
    },
    {
      name: "W. K. S. De Silva",
      id: "IT22916808",
      email: "it22916808@my.sliit.lk",
      role: "Research Member",
      component: "Forensic Timeline Reconstruction and Visualization",
      icon: "📊"
    }
  ];

  const supervisors = [
    { name: "Dr. Harindra Fernando", role: "Supervisor", icon: "👨‍🏫" },
    { name: "Mr. Indunil Daluwatte", role: "Co-Supervisor", icon: "👨‍🏫" }
  ];

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }} className="text-gradient">About Our Research</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
              We are a dedicated team of researchers from SLIIT, focusing on revolutionizing cloud forensics through automated behavioral profiling and incident correlation.
            </p>
          </div>

          <div style={{ marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Research Team</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}>
              {team.map((member, index) => (
                <div key={index} className="glass-card" style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem',
                  animationDelay: `${index * 0.1}s` 
                }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    width: '70px', 
                    height: '70px', 
                    background: 'rgba(0, 242, 255, 0.1)', 
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {member.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>{member.role}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>ID: {member.id}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{member.email}</p>
                  </div>
                  <div style={{ 
                    marginTop: 'auto', 
                    paddingTop: '1.5rem', 
                    borderTop: '1px solid var(--glass-border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    fontStyle: 'italic'
                  }}>
                    "{member.component}"
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '6rem 2rem', borderRadius: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Supervision</h2>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '4rem', 
              flexWrap: 'wrap' 
            }}>
              {supervisors.map((sup, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '4rem', 
                    marginBottom: '1.5rem',
                    filter: 'drop-shadow(0 0 10px var(--accent-primary))'
                  }}>
                    {sup.icon}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{sup.name}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{sup.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>
          © 2026 Cloud Forensics Research Project. SLIIT Faculty of Computing.
        </p>
      </footer>
    </main>
  );
}
