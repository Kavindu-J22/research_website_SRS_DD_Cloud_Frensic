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
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511776363!2d79.9703642758836!3d6.914677493084725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a677115%3A0x2c63e344274348ef!2sSLIIT%20Malabe%20Campus!5e0!3m2!1sen!2slk!4v1714961000000!5m2!1sen!2slk" 
                    width="100%" 
                    height="250" 
                    style={{ 
                      border: '1px solid var(--glass-border)', 
                      borderRadius: '16px',
                      filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' 
                    }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
