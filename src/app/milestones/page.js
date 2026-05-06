import PageWrapper from '@/components/PageWrapper';

export default function Milestones() {
  const milestones = [
    {
      title: "Project Proposal",
      date: "Aug 2025",
      status: "Completed",
      description: "Initial research proposal submitted. Research gap identified, scope defined, and methodology outlined.",
      completed: true
    },
    {
      title: "Progress Presentation I",
      date: "Nov 2025",
      status: "Completed",
      description: "System architecture finalised. Individual component designs presented.",
      completed: true
    },
    {
      title: "Progress Presentation II",
      date: "Mar 2026",
      status: "Completed",
      description: "Core components implemented. Evaluation data implemented. 90% of the project is finished.",
      completed: true
    },
    {
      title: "Final Assessment",
      date: "May 2026",
      status: "Upcoming",
      description: "Final platform integration, evaluation, and project demonstration.",
      completed: false
    },
    {
      title: "Research Paper Submission",
      date: "May 2026",
      status: "Upcoming",
      description: "Research paper preparation and submission planned.",
      completed: false
    },
    {
      title: "Viva",
      date: "Jul 2026",
      status: "Upcoming",
      description: "Defence of research contributions and live demonstration.",
      completed: false
    }
  ];

  return (
    <PageWrapper title="Project Milestones">
      <section style={{ marginBottom: '4rem' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
          Tracking the progress of the Cloud Forensics Research Project from initial proposal to final defence.
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{ 
            position: 'absolute', 
            left: '24px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'var(--glass-border)' 
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {milestones.map((milestone, index) => (
              <div key={index} style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
                
                {/* Timeline Node */}
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  background: milestone.completed ? 'var(--accent-primary)' : 'var(--bg-surface)',
                  border: `2px solid ${milestone.completed ? 'var(--accent-primary)' : 'var(--text-muted)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: milestone.completed ? 'var(--bg-deep)' : 'var(--text-muted)',
                  fontSize: '1.5rem',
                  zIndex: 2,
                  boxShadow: milestone.completed ? '0 0 15px rgba(0, 242, 255, 0.4)' : 'none',
                  flexShrink: 0
                }}>
                  {milestone.completed ? '✓' : '•'}
                </div>

                {/* Milestone Card */}
                <div className="glass-card" style={{ 
                  flex: 1, 
                  padding: '2rem',
                  borderLeft: milestone.completed ? '4px solid var(--accent-primary)' : '4px solid var(--text-muted)',
                  opacity: milestone.completed ? 1 : 0.7
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: milestone.completed ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                      {milestone.title}
                    </h3>
                    <div style={{ 
                      background: milestone.completed ? 'rgba(0, 242, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)', 
                      color: milestone.completed ? 'var(--accent-primary)' : 'var(--text-muted)',
                      padding: '0.4rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}>
                      {milestone.date} • {milestone.status}
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {milestone.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
