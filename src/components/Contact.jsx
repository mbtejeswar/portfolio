import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:mbtejeshwarreddy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'mbtejeshwarreddy@gmail.com',
      link: 'mailto:mbtejeshwarreddy@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+91 9550025584',
      link: 'tel:+919550025584',
    },
    {
      icon: <LocationOnIcon />,
      label: 'Location',
      value: 'Hyderabad, India',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <motion.a
                href="https://www.linkedin.com/in/mbtejeswar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#64ffda' }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://github.com/mbtejeswar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#64ffda' }}
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                href="mailto:mbtejeshwarreddy@gmail.com"
                whileHover={{ y: -3, color: '#64ffda' }}
              >
                <EmailIcon />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <SendIcon />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="footer">
        <p>Designed & Built by Tejeswar Reddy</p>
        <p className="copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
