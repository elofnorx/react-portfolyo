export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-text">
            &copy; {currentYear} Tüm hakları saklıdır. Bu şablon modern React & CSS ile geliştirilmiştir.
          </div>

          <div className="footer-socials">
            <a 
              href="#hero" 
              className="footer-social-link"
              onClick={(e) => handleScrollTo(e, 'hero')}
            >
              Başa Dön
            </a>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <a href="#" className="footer-social-link">GitHub</a>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <a href="#" className="footer-social-link">LinkedIn</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
