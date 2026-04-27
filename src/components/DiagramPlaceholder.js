export default function DiagramPlaceholder({ title, prompt }) {
  return (
    <div style={{ 
      margin: '3rem 0', 
      padding: '3rem', 
      background: 'rgba(0, 242, 255, 0.03)', 
      border: '2px dashed var(--accent-primary)', 
      borderRadius: '24px',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼️</div>
      <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{title}</h4>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        [PLACEHOLDER FOR DIAGRAM]
      </p>
      <div style={{ 
        background: 'var(--bg-deep)', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        textAlign: 'left',
        fontSize: '0.85rem',
        border: '1px solid var(--glass-border)'
      }}>
        <strong style={{ color: 'var(--text-primary)' }}>Recommended Prompt:</strong><br />
        <code style={{ color: 'var(--text-secondary)' }}>{prompt}</code>
      </div>
    </div>
  );
}
