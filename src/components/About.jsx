import { Award, BookOpen, Briefcase, Cpu, Database, Layout } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Hakkımda</span>
          <h2 className="section-title">Akademik & <span>Profesyonel Profil</span></h2>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Bio & Timeline Column (Left) */}
          <div className="about-bio">
            <p>
              Hacettepe Üniversitesi BÖTE bölümü 3. sınıf öğrencisiyim (GNO: 3.13). Yenilikçi öğrenme yaklaşımlarına ve dijital materyal geliştirmeye büyük ilgi duyuyorum.
            </p>
            
            {/* Academic Stats */}
            <div className="about-stats" style={{ marginBottom: '2.5rem' }}>
              <div className="glass-card stat-card">
                <div className="stat-number">3.13</div>
                <div className="stat-label">Genel Ortalama</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number">3.</div>
                <div className="stat-label">Sınıf Öğrencisi</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number">BÖTE</div>
                <div className="stat-label">Hacettepe Üni.</div>
              </div>
            </div>

            {/* Experience & Internship Timeline */}
            <div className="glass-card timeline-card">
              <h3><Briefcase size={22} /> Deneyim & Staj</h3>
              
              <div className="timeline">
                {/* 1. Human Ports */}
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-meta">
                    <span className="timeline-company">Human Ports (Belgrad)</span>
                  </div>
                  <div className="timeline-role">Proje Stajyeri</div>
                  <p className="timeline-desc">Avrupa projelerinin planlanması, koordinasyonu ve yürütülmesi süreçlerinde görev alarak uluslararası proje yönetimi tecrübesi edindim.</p>
                </div>

                {/* 2. TNC Group */}
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-meta">
                    <span className="timeline-company">TNC Group</span>
                  </div>
                  <div className="timeline-role">IT Stajyeri</div>
                  <p className="timeline-desc">Bilgi teknolojileri altyapısı, ağ sistemleri ve teknik destek operasyonlarında stajyer olarak aktif sorumluluk üstlendim.</p>
                </div>

                {/* 3. İNOKİDS */}
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-meta">
                    <span className="timeline-company">İNOKİDS</span>
                  </div>
                  <div className="timeline-role">Kodlama Eğitmeni</div>
                  <p className="timeline-desc">Çocuklara yönelik algoritma mantığı, blok tabanlı kodlama ve erken yaş yazılım farkındalığı eğitimleri verdim.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Matrix Column (Right) */}
          <div className="skills-column">
            
            {/* Eğitim ve Tasarım */}
            <div className="glass-card skills-card">
              <h3><BookOpen size={20} /> Eğitim & Öğretim Tasarımı</h3>
              <div className="skills-tags">
                <span className="skill-tag">Eğitim Teknolojileri</span>
                <span className="skill-tag">Öğretim Tasarımı</span>
                <span className="skill-tag">Adobe Express</span>
              </div>
            </div>

            {/* Programlama ve Geliştirme */}
            <div className="glass-card skills-card">
              <h3><Database size={20} /> Yazılım & Programlama</h3>
              <div className="skills-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Arduino</span>
              </div>
            </div>

            {/* 3D Tasarım */}
            <div className="glass-card skills-card">
              <h3><Cpu size={20} /> 3D Tasarım & Modelleme</h3>
              <div className="skills-tags">
                <span className="skill-tag">3D Modelleme (Blender)</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
