import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

const Linkedin = (props) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props) => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear status message after 4 seconds
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">İletişim</span>
          <h2 className="section-title">Benimle <span>Bağlantı Kur</span></h2>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          
          {/* Contact Details & Socials */}
          <div className="contact-info">
            <h3>Hadi Birlikte Çalışalım!</h3>
            <p>
              Aklınızda bir proje mi var, yoksa sadece merhaba mı demek istiyorsunuz? Formu doldurarak ya da doğrudan aşağıdaki iletişim kanallarından bana ulaşabilirsiniz. En kısa sürede dönüş yapacağım.
            </p>

            <div className="contact-details">
              {/* Email */}
              <a 
                href="mailto:elifxelifx@gmail.com" 
                className="contact-item" 
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <div className="contact-item-icon" style={{ transition: 'all 0.3s ease' }}>
                  <Mail size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>E-posta (Tıkla)</h4>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>elifxelifx@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/elifnur-bağcı-0074b8210" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item" 
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <div className="contact-item-icon" style={{ transition: 'all 0.3s ease' }}>
                  <Linkedin size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>LinkedIn (Tıkla)</h4>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>elifnur-bağcı-0074b8210</p>
                </div>
              </a>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Konum</h4>
                  <p>Ankara / Balıkesir</p>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/elifnur-bağcı-0074b8210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="LinkedIn Profilim"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:elifxelifx@gmail.com" 
                className="social-btn" 
                aria-label="E-posta Gönder"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Dynamic Contact Form Card */}
          <div className="glass-card contact-form">
            <form onSubmit={handleSubmit}>
              
              {/* Form Input Rows */}
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Adınız Soyadınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-posta Adresiniz</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="İş birliği veya teklif hakkında"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Proje detaylarınızı buraya yazabilirsiniz..."
                />
              </div>

              {/* Status Notice */}
              {submitStatus === 'success' && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#10b981',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  Mesajınız başarıyla gönderildi! Teşekkürler.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                {isSubmitting ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    Mesajı Gönder <Send size={18} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
