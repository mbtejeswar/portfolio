import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    { number: '7+', label: 'Years Experience' },
    { number: '65%', label: 'Load Time Improved' },
    { number: '80%', label: 'Build Time Reduced' },
    { number: '40%', label: 'MTTR Reduced' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm a <strong>results-driven Full Stack Software Engineer</strong> with over 7 years
              of experience in designing, building, and modernizing scalable, high-performance
              applications for the <strong>financial services sector</strong>.
            </p>
            <p>
              My expertise lies in developing robust <strong>backend microservices with Java and
              Spring Boot</strong>, and creating modern, responsive user interfaces with
              <strong> React and Micro-frontends</strong>. I'm passionate about migrating complex
              monolithic systems to microservice architectures and driving the full software
              development lifecycle in agile, cloud-native environments.
            </p>
            <p>
              Currently at <strong>DBS Bank</strong>, I've led full-stack migrations that improved
              application load times by 65%, engineered CI/CD pipelines that reduced build times
              by 80%, and developed an <strong>Autonomous RCA Agent using LangChain and RAG </strong>
              that reduced Mean Time to Resolution by 40%.
            </p>
            <p>
              I thrive on solving complex problems and building solutions that make a real impact
              on business operations and user experience.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
              >
                <span className="highlight-number">{item.number}</span>
                <span className="highlight-label">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
