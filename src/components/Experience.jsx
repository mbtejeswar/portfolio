import React from 'react';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Experience = () => {
  const experiences = [
    {
      company: 'DBS Bank',
      role: 'Associate',
      period: 'October 2022 - Present',
      location: 'Hyderabad',
      achievements: [
        'Designed and maintained resilient backend microservices using Java and Spring Boot for the Investment & Insurance platform',
        'Led full-stack migration from monolith to Spring Boot microservice and React micro-frontend architecture, improving load time by 65%',
        'Engineered CI/CD pipeline and platform migration to OpenShift Container Platform (OCP), reducing build times by 80%',
        'Developed an Autonomous RCA Agent using Python, LangChain, and RAG that reduced MTTR by 40%',
        'Enhanced custom React library for seamless integration of new micro-frontend applications',
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'OpenShift', 'LangChain', 'RAG', 'ChromaDB'],
    },
    {
      company: 'Datamatics',
      role: 'Consultant - Software Engineer',
      period: 'July 2021 - October 2022',
      location: 'Bengaluru',
      achievements: [
        'Engineered backend orchestration for Education Loan processing module with complex business rules',
        'Responsible for entire technical design and delivery of loan origination system',
        'Built scalable Spring Boot microservices reducing manual processing overhead by 60%',
        'Set up and configured NGINX environment for frontend deployments on AWS',
        'Integrated loan system with core banking platforms and third-party APIs for real-time decision-making',
      ],
      technologies: ['Spring Boot', 'AWS', 'NGINX', 'React', 'MongoDB'],
    },
    {
      company: 'Cognizant',
      role: 'Associate',
      period: 'June 2018 - July 2021',
      location: 'Chennai',
      achievements: [
        'Developed operational dashboard using Java and JavaScript for real-time business metrics visualization',
        'Implemented automated solutions that reduced manual activity by 67%',
        'Provided prompt vulnerability fixes ensuring OWASP security standards compliance',
        'Collaborated with clients to resolve issues, maintaining high customer satisfaction',
      ],
      technologies: ['Java', 'JavaScript', 'SQL', 'Security'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="experience-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="role">{exp.role}</span>
                </div>
                <div className="experience-meta">
                  <span className="period">
                    <WorkIcon fontSize="small" />
                    {exp.period}
                  </span>
                  <span className="location">
                    <LocationOnIcon fontSize="small" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="achievements-list">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>

              <div className="experience-technologies">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
