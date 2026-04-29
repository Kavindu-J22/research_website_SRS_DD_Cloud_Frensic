'use client';

export default function Contacts() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }} className="text-gradient">Contact Us</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
              Have questions about our research or interested in collaboration? Reach out to our team.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Contact Information */}
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Get in Touch</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Group Leader</h4>
                  <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>T. R. Hettiarachchi</p>
                  <a href="mailto:it22920836@my.sliit.lk" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition-smooth)' }}>
                    it22920836@my.sliit.lk
                  </a>
                </div>

                <div>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Institution</h4>
                  <p style={{ fontSize: '1.1rem' }}>Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <p style={{ color: 'var(--text-secondary)' }}>New Kandy Rd, Malabe 10115, Sri Lanka</p>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <div style={{ 
                    width: '100%', 
                    height: '200px', 
                    background: 'var(--bg-surface)', 
                    borderRadius: '16px', 
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    padding: '1rem'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '2rem' }}>📍</span>
                      SLIIT Malabe Campus - Lab 402<br/>Cloud Forensics Research Center
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Send a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid var(--glass-border)', 
                      borderRadius: '12px', 
                      padding: '1rem', 
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid var(--glass-border)', 
                      borderRadius: '12px', 
                      padding: '1rem', 
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="How can we help you?"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid var(--glass-border)', 
                      borderRadius: '12px', 
                      padding: '1rem', 
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'none',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', border: 'none', cursor: 'pointer' }}
                  onClick={(e) => e.preventDefault()}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>
          © 2026 Cloud Forensics Research Project. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
