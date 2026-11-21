import { BookOpen, Briefcase, Cpu, GraduationCap, Palette } from 'lucide-react';

const experience = [
  {
    organization: 'İNOKİDS',
    date: '2024–2025',
    role: 'Kodlama ve Teknoloji Eğitmeni',
    description: 'Çocuklara Tinkercad, Arduino ve temel programlama dersleri verdim. Algoritmik düşünme ve problem çözme için uygulamalı etkinlikler hazırladım.',
  },
  {
    organization: 'Human Ports, Belgrad',
    date: 'Nisan 2026',
    role: 'Proje Yönetimi Stajyeri',
    description: 'Uluslararası projelerde hedef kitle analizi ve dijital iş akışlarının planlanmasına katkı sağladım.',
  },
  {
    organization: 'Gönenli Süt ve Süt Ürünleri',
    date: 'Ağustos 2026',
    role: 'Bilgi Teknolojileri Stajyeri',
    description: 'SQL, kurumsal kaynak planlama ve Logo WMS depo yönetimi üzerine çalıştım.',
  },
  {
    organization: 'TNC Group Social Office',
    date: 'Ağustos–Eylül 2025',
    role: 'Bilgi Teknolojileri Stajyeri',
    description: 'Python ve Excel ile veri işleme, Photoshop ve AutoCAD ile dijital tasarım çalışmaları yaptım.',
  },
];

const skills = [
  { title: 'Öğretim Tasarımı', Icon: BookOpen, tags: ['Etkinlik Tasarımı', 'Oyunlaştırma', 'Eğitsel Video', 'Uzaktan Öğrenme'] },
  { title: 'Yazılım ve Eğitim Araçları', Icon: Cpu, tags: ['React', 'TypeScript', 'HTML', 'CSS', 'Python', 'Arduino', 'Tinkercad'] },
  { title: 'Görsel Tasarım', Icon: Palette, tags: ['Adobe Photoshop', 'Adobe Express', 'Canva', 'Blender'] },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Hakkımda</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <p>Çocuklarla uygulamalı kodlama eğitimi deneyimimi dijital öğrenme etkinlikleri tasarlamak için kullanıyorum. Öğretim tasarımı ve dijital eğitim içeriği alanlarında staj ve yarı zamanlı iş fırsatlarıyla ilgileniyorum.</p>

            <div className="glass-card timeline-card">
              <h3><Briefcase size={22} /> Deneyim</h3>
              <div className="timeline">
                {experience.map(({ organization, date, role, description }) => (
                  <div key={organization} className="timeline-item">
                    <div className="timeline-dot" aria-hidden="true" />
                    <div className="timeline-meta">
                      <span className="timeline-company">{organization} · {date}</span>
                    </div>
                    <div className="timeline-role">{role}</div>
                    <p className="timeline-desc">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-column">
            <div className="glass-card skills-card">
              <h3><GraduationCap size={20} /> Eğitim</h3>
              <p><strong>Hacettepe Üniversitesi</strong><br />Bilgisayar ve Öğretim Teknolojileri Öğretmenliği<br />Eylül 2023 – Devam ediyor · GNO 3,13/4,00</p>
              <p><strong>Anadolu Üniversitesi</strong><br />Web Tasarımı ve Kodlama, Önlisans</p>
            </div>
            {skills.map(({ title, Icon, tags }) => (
              <div key={title} className="glass-card skills-card">
                <h3><Icon size={20} /> {title}</h3>
                <div className="skills-tags">
                  {tags.map((tag) => <span key={tag} className="skill-tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
