import { ArrowUpRight, Code, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background Decorative Glowing Elements */}
      <div className="glow-orb orb-primary"></div>
      <div className="glow-orb orb-secondary"></div>

      <div className="container">
        <div className="hero-wrapper">
          
          {/* Text Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>Projeler İçin Uygun</span>
            </div>
            
            <h1 className="hero-title">
              Merhaba, Ben <span>Elifnur Bağcı</span>
            </h1>

            <h3 style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
              fontWeight: '600', 
              color: 'var(--accent-primary)',
              marginBottom: '1rem' 
            }}>
              Eğitim Teknolojileri & Öğretim Tasarımı
            </h3>
            
            <p className="hero-desc">
              Hacettepe Üniversitesi'nde öğrenim gören, dijital materyal geliştirme ve eğitim planlaması süreçlerinde aktif rol alan bir teknoloji tutkunuyum.
            </p>
            
            <div className="hero-actions">
              <a 
                href="https://www.linkedin.com/in/elifnur-bağcı-0074b8210" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                LinkedIn Profilim <ArrowUpRight size={18} />
              </a>
              <a 
                href="mailto:elifxelifx@gmail.com" 
                className="btn btn-secondary"
              >
                E-posta Gönder
              </a>
            </div>
          </div>

          {/* Visual Showcase (Mockup) */}
          <div className="hero-visual">
            <div className="hero-glow-ring"></div>
            <div className="hero-image-card">
              <div className="hero-image-placeholder">
                <Sparkles size={48} className="animated-sparkle" />
                <Code size={36} />
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--text-muted)', textAlign: 'center', padding: '0 1rem' }}>
                  EDTECH / INSTRUCTIONAL DESIGN
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
