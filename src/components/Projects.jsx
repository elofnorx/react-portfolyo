import { ExternalLink, Film, Gamepad2, Shirt } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "FITLOOP",
      description: "Sürdürülebilir moda ilkeleri doğrultusunda hazırlanan, kişiye özel 3D dijital ölçüm ve giysi sigorta sistemi projesi.",
      tags: ["3D Modelleme", "Blender", "Sürdürülebilirlik", "Öğretim Tasarımı"],
      icon: <Shirt size={40} />,
      demoUrl: "https://site-2v28z0q76.godaddysites.com/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Eğitsel Video Tasarımı",
      description: "Öğrenme çıktılarını destekleyen, senaryo ve kurgu aşamaları tamamlanmış yüksek etkileşimli dijital materyaller.",
      tags: ["Video Kurgu", "Öğretim Tasarımı", "Adobe Express", "Multimedya"],
      icon: <Film size={40} />,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Eğitsel Oyun ve Oyunlaştırma",
      description: "Öğrenci motivasyonunu artırmayı hedefleyen, öğrenme sürecini destekleyen interaktif dijital oyun içerikleri.",
      tags: ["Oyunlaştırma", "Python", "Arduino", "Etkileşimli Öğrenme"],
      icon: <Gamepad2 size={40} />,
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Portfolyo</span>
          <h2 className="section-title">Son <span>Projelerim</span></h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="glass-card project-card">
              
              {/* Project Mock Visual */}
              <div className="project-image">
                <div className="project-image-placeholder">
                  {project.icon}
                  <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>PREVİEW GRAPHIC</span>
                </div>
              </div>

              {/* Project Text Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Tech tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>

                {/* External Links */}
                <div className="project-links">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link" 
                    aria-label={`${project.title} Canlı Önizleme`}
                  >
                    Canlı Gösterim <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link" 
                    aria-label={`${project.title} GitHub Deposu`}
                  >
                    Kodlar <Github size={16} />
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
