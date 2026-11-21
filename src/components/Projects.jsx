import { Code, Cpu, ExternalLink, Film, Gamepad2, Shirt } from 'lucide-react';

const projects = [
  {
    id: 'bilisim-macerasi',
    title: 'Bilişim Macerası / Robi’nin Macerası',
    description: 'Özel eğitim gereksinimi olan 7–12 yaş grubu için 20 fare, 15 klavye ve 5 bütünleştirme etkinliği tasarladım. Öğrenciler model gösteriminden bağımsız uygulamaya ve farklı bağlamda denemeye ilerliyor. Öğretmen panelinde ilerleme ve ipucu kullanımı izlenebiliyor.',
    tags: ['Öğretim Tasarımı', 'Oyun Tabanlı Öğrenme', 'React', 'TypeScript'],
    Icon: Gamepad2,
    demoUrl: 'https://elofnorx.github.io/bilisim-macerasi/',
    githubUrl: 'https://github.com/elofnorx/bilisim-macerasi',
  },
  {
    id: 'robokasifler',
    title: 'RoboKâşifler (RoboCraft)',
    description: 'Tinkercad ve Arduino konularının uzaktan öğretimi için HTML, CSS ve React ile bir eğitim portalı geliştirdim.',
    tags: ['Uzaktan Öğrenme', 'Tinkercad', 'Arduino', 'React'],
    Icon: Cpu,
    demoUrl: 'https://robocraft-aue.vercel.app/',
  },
  {
    id: 'akord',
    title: 'AKORD',
    description: 'C# algoritma öğrenimine yönelik araştırma prototipi. Öğrencilerin koşul ve döngü görevleri üzerinde çalışırken yapay zekâdan doğrudan yanıt veya Sokratik sorularla destek almasını karşılaştırmak için tasarlandı.',
    tags: ['Programlama Eğitimi', 'Üretken Yapay Zekâ', 'C#'],
    Icon: Code,
    demoUrl: 'https://akord-sage.vercel.app/',
  },
  {
    id: 'egitsel-video',
    title: 'Eğitsel Video ve Öğretim Materyali Tasarımı',
    description: 'Öğretim hedeflerine göre eğitsel video senaryoları ve görsel akışlar hazırladım, video kurguladım ve etkileşimli dijital materyaller tasarladım.',
    tags: ['Senaryo', 'Video Kurgu', 'Adobe Express', 'Öğretim Tasarımı'],
    Icon: Film,
  },
  {
    id: 'fitloop',
    title: 'FITLOOP',
    description: 'Sürdürülebilir moda odaklı, kişiye özel 3D dijital ölçüm ve giysi sigortası üzerine bir proje. Dijital prototipleme ve görselleştirme süreçlerinde çalıştım.',
    tags: ['3D Modelleme', 'Blender', 'Sürdürülebilirlik'],
    Icon: Shirt,
    demoUrl: 'https://site-2v28z0q76.godaddysites.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Seçili <span>Projeler</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map(({ id, title, description, tags, Icon, demoUrl, githubUrl }) => (
            <article key={id} className="glass-card project-card">
              <div className="project-image" aria-hidden="true">
                <div className="project-image-placeholder">
                  <Icon size={40} />
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>
                <div className="project-tags">
                  {tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
                </div>

                {(demoUrl || githubUrl) && (
                  <div className="project-links">
                    {demoUrl && (
                      <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${title} demo`}>
                        Demo <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}
                    {githubUrl && (
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${title} kaynak kodu`}>
                        Kaynak kodu <Code size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
