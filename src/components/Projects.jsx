import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const Projects = () => {
  const projects = [
    {
      title: 'Autonomous RCA Agent',
      description:
        'An intelligent Root Cause Analysis agent that automatically correlates distributed logs with historical incidents to pinpoint root causes. Built using LangChain and RAG (Retrieval-Augmented Generation) with ChromaDB vector storage, this agent reduced Mean Time to Resolution (MTTR) by 40% in production environments.',
      technologies: ['Python', 'LangChain', 'RAG', 'ChromaDB', 'OpenAI'],
      featured: true,
      isGenAI: true,
    },
    {
      title: 'Investment & Insurance Platform',
      description:
        'Full-stack migration of a complex monolithic system to microservice architecture for DBS Bank. Led the development of Spring Boot backend services and React micro-frontend components, resulting in 65% improvement in application load time and enhanced scalability.',
      technologies: ['Java', 'Spring Boot', 'React', 'Micro-frontends', 'OpenShift'],
      featured: true,
    },
    {
      title: 'GPS Asset Tracking Dashboard',
      description:
        'Real-time asset tracking system with live location monitoring, asset management, and historical data visualization. Implemented WebSocket for real-time updates and Mapbox for precise geographical visualization.',
      technologies: ['React.js', 'Node.js', 'Mapbox', 'WebSocket', 'MongoDB'],
      githubLink: 'https://github.com/Crio-Winter-of-Doing-2021/JUMBOGPS-T12',
    },
    {
      title: 'ERP Chatbot using AI/ML',
      description:
        'Intelligent chatbot solution revolutionizing ERP system interactions with AI-powered assistance. Features natural language processing for intuitive queries, automated data entry, and real-time insights generation.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js'],
      githubLink: 'https://github.com/ai-project-team-11/AI-Powered-ERP-System-for-FMCG-Company',
      isGenAI: true,
    },
    {
      title: 'Education Loan Processing System',
      description:
        'End-to-end loan origination system with complex business rules for eligibility checks and workflows. Integrated with core banking platforms and third-party APIs (credit bureaus, payment gateways) for real-time decision-making, reducing manual processing by 60%.',
      technologies: ['Spring Boot', 'React', 'AWS', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'CI/CD Pipeline Optimization',
      description:
        'Engineered and optimized CI/CD pipeline with platform migration to OpenShift Container Platform (OCP). Achieved 80% reduction in build times and improved deployment efficiency across all development teams.',
      technologies: ['Jenkins', 'OpenShift', 'Docker', 'Kubernetes', 'Bash'],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {project.isGenAI && (
                <div className="genai-badge">
                  <SmartToyIcon fontSize="small" />
                  GenAI
                </div>
              )}

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ y: -2 }}
                    >
                      <GitHubIcon />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ y: -2 }}
                    >
                      <LaunchIcon />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
