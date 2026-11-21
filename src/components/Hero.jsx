import { ArrowUpRight } from 'lucide-react';
import profilImg from '../assets/profil.jpg';

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
            <h1 className="hero-title">
              <span>Elifnur Bağcı</span>
            </h1>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: '600',
              color: 'var(--accent-primary)',
              marginBottom: '1rem'
            }}>
              Eğitim Teknolojileri ve Öğretim Tasarımı
            </h2>

            <p className="hero-desc">
              Hacettepe Üniversitesi BÖTE öğrencisiyim. Özel eğitim için oyun tabanlı etkinlikler, kodlama eğitimleri ve dijital öğretim materyalleri geliştiriyorum.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary"
              >
                Projeleri İncele <ArrowUpRight size={18} />
              </a>
              <a
                href="mailto:elifxelifx@gmail.com"
                className="btn btn-secondary"
              >
                E-posta Gönder
              </a>
            </div>
          </div>

          {/* Visual Showcase (Mockup with real photo) */}
          <div className="hero-visual">
            <div className="hero-glow-ring"></div>
            <div className="hero-image-card" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src={profilImg}
                alt="Elifnur Bağcı"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
