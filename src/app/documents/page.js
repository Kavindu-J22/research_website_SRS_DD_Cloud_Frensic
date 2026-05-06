import PageWrapper from '@/components/PageWrapper';

export default function Documents() {
  const documents = [
    {
      title: "Web Checklist",
      description: "Official evaluation checklist for the research project website implementation.",
      type: "PDF",
      url: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/IQAGvcI1wbjBTYcPZczUXnulAfQlu4rIoQDaLjO1n_RrKdU?e=Mc0bgD",
      icon: "📋",
      color: "#00f2ff"
    },
    {
      title: "Research Paper",
      description: "Comprehensive research paper detailing the automated cloud forensics platform and ML methodologies.",
      type: "Folder",
      url: "https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/IgCcn5WQQCajTa7taPX0PF0kAToyanRq2Kb1UuVAstQmW6Q?e=xjKbbq",
      icon: "📚",
      color: "#7000ff"
    },
    {
      title: "Final Report Thesis",
      description: "Complete group research thesis documenting the end-to-end development of all four components.",
      type: "Word",
      url: "https://mysliit.sharepoint.com/:w:/s/CDAPSubmissionCloud/IQCJDiQr7UkEQqg_zooT3oBoAYUWnDRTqNT6kNTbfs3hAKE?e=nmDqcM",
      icon: "📒",
      color: "#ff00e5"
    },
    {
      title: "Fernando W. L. C. A. Thesis",
      description: "Individual thesis focusing on Component 2: Incident Detection and MITRE ATT&CK Correlation.",
      type: "PDF",
      url: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/IQBhsiXZyonESasZ_PFV9tWxAaon2q9a5R4Bmyfrsn1yLJk?e=2i97TG",
      icon: "📄",
      color: "#00f2ff"
    },
    {
      title: "C.D Aluthge Thesis",
      description: "Individual thesis focusing on Component 3: Evidence Preservation and Chain of Custody.",
      type: "Word",
      url: "https://mysliit.sharepoint.com/:w:/s/CDAPSubmissionCloud/IQB4N0FRXYszR5foXQ0Cje0XAVxmEUluS-fJNHSKO5-LTM4?e=KDTuVA",
      icon: "📄",
      color: "#7000ff"
    },
    {
      title: "De Silva W K S Thesis",
      description: "Individual thesis focusing on Component 4: Forensic Timeline Reconstruction via DBSCAN.",
      type: "Word",
      url: "https://mysliit.sharepoint.com/:w:/s/CDAPSubmissionCloud/IQB1GDtHwZFUTIZtlwuMbJkdAVMgg3tkkuIb7oxdMxEBWEU?e=Yo8aKL",
      icon: "📄",
      color: "#ff00e5"
    },
    {
      title: "Hettiarachchi T.R. Thesis",
      description: "Individual thesis focusing on Component 1: Identity Attribution and Behavioral Profiling.",
      type: "PDF",
      url: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/IQCY3anG1PHUTK55robzE3luAcPscJR5P1QlZvXHmg905xs?e=kp3ERR",
      icon: "📄",
      color: "#00ff88"
    }
  ];

  return (
    <PageWrapper title="Project Documents">
      <section style={{ marginBottom: '4rem' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
          Access all official research documents, theses, and checklists submitted for the Cloud Forensics Project.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {documents.map((doc, index) => (
                <a 
                  key={index} 
                  href={doc.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-card"
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '1.2rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    borderTop: `4px solid ${doc.color || 'var(--accent-primary)'}`,
                    transition: 'var(--transition-smooth)',
                    padding: '2rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      background: `${doc.color || 'var(--accent-primary)'}11`, 
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      border: `1px solid ${doc.color || 'var(--accent-primary)'}22`
                    }}>
                      {doc.icon}
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
                      {doc.type}
                    </span>
                  </div>
                  
                  <div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>{doc.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {doc.description}
                    </p>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    color: doc.color || 'var(--accent-primary)',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    marginTop: 'auto',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Access Document 
                    <span style={{ fontSize: '1.2rem' }}>→</span>
                  </div>
                </a>
              ))}
        </div>
      </section>
    </PageWrapper>
  );
}
