import PageWrapper from '@/components/PageWrapper';

export default function Documents() {
  const documents = [
    {
      title: "Web Checklist",
      type: "PDF",
      url: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/IQAGvcI1wbjBTYcPZczUXnulAfQlu4rIoQDaLjO1n_RrKdU?e=Mc0bgD",
      icon: "📄"
    },
    {
      title: "Research Paper",
      type: "Folder",
      url: "https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/IgCcn5WQQCajTa7taPX0PF0kAToyanRq2Kb1UuVAstQmW6Q?e=xjKbbq",
      icon: "📁"
    },
    {
      title: "Final Report Thesis",
      type: "Word",
      url: "https://mysliit.sharepoint.com/:w:/s/CDAPSubmissionCloud/IQCJDiQr7UkEQqg_zooT3oBoAYUWnDRTqNT6kNTbfs3hAKE?e=nmDqcM",
      icon: "📝"
    },
    {
      title: "Fernando W. L. C. A. (IT22033550) Thesis",
      type: "PDF",
      url: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/IQBhsiXZyonESasZ_PFV9tWxAaon2q9a5R4Bmyfrsn1yLJk?e=2i97TG",
      icon: "📄"
    },
    {
      title: "C.D Aluthge (IT22581402) Thesis",
      type: "Word",
      url: "https://mysliit.sharepoint.com/:w:/s/CDAPSubmissionCloud/IQB4N0FRXYszR5foXQ0Cje0XAVxmEUluS-fJNHSKO5-LTM4?e=KDTuVA",
      icon: "📝"
    },
    {
      title: "De Silva W K S (IT22916808) Thesis",
      type: "Word",
      url: "https://mysliit.sharepoint.com/:w:/s/CDAPSubmissionCloud/IQB1GDtHwZFUTIZtlwuMbJkdAVMgg3tkkuIb7oxdMxEBWEU?e=Yo8aKL",
      icon: "📝"
    },
    {
      title: "Hettiarachchi T.R. (IT22920836) Thesis",
      type: "PDF",
      url: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/IQCY3anG1PHUTK55robzE3luAcPscJR5P1QlZvXHmg905xs?e=kp3ERR",
      icon: "📄"
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
                gap: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                borderTop: '4px solid var(--accent-primary)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>{doc.icon}</span>
                <span style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '0.4rem 0.8rem', 
                  borderRadius: '6px', 
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'var(--text-secondary)'
                }}>
                  {doc.type}
                </span>
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{doc.title}</h3>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: 'var(--accent-primary)',
                fontWeight: '600',
                fontSize: '0.9rem',
                marginTop: 'auto'
              }}>
                View / Download 
                <span style={{ transition: 'transform 0.2s' }} className="arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
