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
            &copy; {currentYear} Elifnur Bağcı
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
            <a href="https://github.com/elofnorx" className="footer-social-link">GitHub</a>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <a href="https://www.linkedin.com/in/elifnur-bağcı-0074b8210" className="footer-social-link">LinkedIn</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
