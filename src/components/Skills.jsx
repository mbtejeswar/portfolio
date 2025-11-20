import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillsData = {
    backend: {
      icon: <StorageIcon />,
      label: 'Backend',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'Microservices', level: 90 },
      ],
    },
    frontend: {
      icon: <WebIcon />,
      label: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Redux', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Micro-frontends', level: 85 },
      ],
    },
    cloud: {
      icon: <CloudIcon />,
      label: 'Cloud & DevOps',
      skills: [
        { name: 'OpenShift (OCP)', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Jenkins', level: 85 },
        { name: 'NGINX', level: 80 },
      ],
    },
    database: {
      icon: <StorageIcon />,
      label: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL Server', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    genai: {
      icon: <PsychologyIcon />,
      label: 'GenAI & ML',
      skills: [
        { name: 'LangChain', level: 85 },
        { name: 'RAG', level: 85 },
        { name: 'ChromaDB', level: 80 },
        { name: 'FAISS', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'TensorFlow', level: 70 },
      ],
    },
    architecture: {
      icon: <ArchitectureIcon />,
      label: 'Architecture',
      skills: [
        { name: 'System Design', level: 85 },
        { name: 'Microservices', level: 90 },
        { name: 'Event-Driven', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Agile/Scrum', level: 90 },
      ],
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-categories"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {Object.entries(skillsData).map(([key, data]) => (
              <motion.button
                key={key}
                className={`category-button ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="category-icon">{data.icon}</span>
                <span className="category-label">{data.label}</span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="skills-display"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="skills-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {skillsData[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
