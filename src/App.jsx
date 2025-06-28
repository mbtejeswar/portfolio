// App.jsx
import React, { useRef, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LaunchIcon from "@mui/icons-material/Launch";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Paper } from "@mui/material";

import JavascriptIcon from "@mui/icons-material/Javascript";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import PsychologyIcon from "@mui/icons-material/Psychology";

function App() {
  const projectsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("FRONTEND");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const skillsData = {
    LANGUAGES: {
      icon: <CodeIcon />,
      skills: ["Javascript", "Typescript", "Java"],
    },
    FRONTEND: {
      icon: <WebIcon />,
      skills: ["React.js", "Microfrontend Architecture", "HTML5", "CSS3"],
    },
    BACKEND: {
      icon: <JavascriptIcon />,
      skills: ["Node.js", "ExpressJS"],
    },
    DATABASES: {
      icon: <StorageIcon />,
      skills: ["MongoDB", "SQL Server"],
    },
    "MACHINE LEARNING": {
      icon: <PsychologyIcon />,
      skills: ["Streamlit", "NumPy", "Pandas", "TensorFlow"],
    },
  };

  const projects = [
    {
      id: 1,
      title: "GPS Asset Tracking Dashboard",
      period: "",
      description:
        "Real-time asset tracking system with live location monitoring, asset management, and historical data visualization. Implemented WebSocket for real-time updates and Mapbox for precise geographical visualization, enabling efficient tracking of company assets.",
      technologies: ["React.js", "Node.js", "Mapbox", "WebSocket", "MongoDB"],
      align: "left",
      githubLink: "https://github.com/Crio-Winter-of-Doing-2021/JUMBOGPS-T12"
    },
    {
      id: 1,
      title: "ERP Chatbot using AI/ML",
      period: "",
      description:
        "An intelligent chatbot solution revolutionizing ERP system interactions with AI-powered assistance, streamlining operations and providing instant access to critical information. The system features natural language processing for intuitive queries, automated data entry, and real-time insights generation.",
      technologies: ["Python", "TensorFlow", "NLP", "React", "Node.js"],
      align: "right",
      githubLink: "https://github.com/ai-project-team-11/AI-Powered-ERP-System-for-FMCG-Company"
    },
    {
      id: 3,
      title: "Results Management Dashboard",
      period: "",
      description:
        "Dynamic dashboard for efficient results management featuring real-time analysis, custom reporting, and interactive charts for enhanced decision-making. Implemented robust state management and error handling for reliable performance.",
      technologies: ["React", "Redux", "Express.js", "MongoDB"],
      align: "left"
    },
  ];


  const codeLines = [
    { text: "const teja = {", delay: 0 },
    { text: "  name: 'Tejeswar',", delay: 0.2 },
    { text: "  role: 'Frontend Engineer',", delay: 0.4 },
    { text: "  skills: ['React', 'Node.js', 'Java', 'Micro-Frontend'],", delay: 0.6 },
    { text: "  resume() {", delay: 0.8 },
    { text: "    return 'Downloading resume...'", delay: 1.0 },
    { text: "  },", delay: 1.2 },
    { text: "  contact() {", delay: 1.4 },
    { text: "    return 'mbtejeshwarreddy@gmail.com'", delay: 1.6 },
    { text: "  }", delay: 1.8 },
    { text: "};", delay: 2.0 },
    { text: "", delay: 2.2 },
    { text: "// Try: teja.resume()", delay: 2.4 },
  ];

  // Add command handler
  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = command.trim();
      if (cmd === "teja.resume()") {
        // Trigger resume download
        window.open("resume.pdf", "_blank");
        setOutput("Downloading resume...");
      } else if (cmd === "teja.contact()") {
        setOutput("tejeswar@example.com");
      } else {
        setOutput("Command not recognized. Try: teja.resume()");
      }
      setCommand("");
    }
  };

  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="section-container">
        <div className="hero-section">
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <h1>
              <motion.span
                className="greeting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                Hello, I'm
              </motion.span>
              <br />
              <motion.span
                className="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                Tejeswar Reddy
              </motion.span>
            </h1>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              I'm a Full Stack Developer, I enjoy making products that matter by handling everything from how they look to how they work behind the scenes
            </motion.p>
            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/mbtejeswar/"
                target="_blank"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://github.com/mbtejeswar"
                target="_blank"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                href="mailto:mbtejeshwarreddy@gmail.com"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <EmailIcon />
              </motion.a>
            </motion.div>
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              <motion.button
                className="primary-btn"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Download Resume
              </motion.button>
              <motion.button
                className="secondary-btn"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={scrollToProjects}
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="hero-left">
            <div className="code-container">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  className="code-line"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay, duration: 0.5 }}
                >
                  <span className="line-number">{index + 1}</span>
                  <span className="code-text">{line.text}</span>
                </motion.div>
              ))}
              <div className="command-line">
                <span className="prompt">{">"}</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder="Type a command..."
                  className="command-input"
                />
              </div>
              {output && (
                <div className="output-line">
                  <span className="output-text">{output}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* Skills & Experience Section */}
      <section className="section-container">
        <div className="skills-experience-wrapper">
          {/* Left Side - Skills */}
          <motion.div
            className="skills-container"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="skills-title">Skills</h1>
            <div className="skills-content">
              <div className="skills-categories">
                {Object.entries(skillsData).map(([category, data]) => (
                  <motion.button
                    key={category}
                    className={`category-btn ${activeCategory === category ? "active" : ""
                      }`}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="category-icon">{data.icon}</span>
                    {category}
                  </motion.button>
                ))}
              </div>

              <motion.div
                className="skills-list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                key={activeCategory}
              >
                {skillsData[activeCategory].skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Experience */}
          <motion.div
            className="experience-container"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="experience-title">Work Experience</h1>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className="timeline-dot" />
                  <TimelineConnector className="timeline-connector" />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className="timeline-paper">
                    <span className="timeline-date">Oct 2022 - Present</span>
                    <h3>DBS Bank</h3>
                    <p>Associate</p>
                    <p className="location">Hyderabad</p>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className="timeline-dot" />
                  <TimelineConnector className="timeline-connector" />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className="timeline-paper">
                    <span className="timeline-date">Jan 2020 - Sep 2022</span>
                    <h3>Datamatics</h3>
                    <p>Consultant Software Engineer</p>
                    <p className="location">Bengaluru, India</p>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className="timeline-dot" />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className="timeline-paper">
                    <span className="timeline-date">Jun 2018 - Dec 2019</span>
                    <h3>Cognizant</h3>
                    <p>Associate</p>
                    <p className="location">Chennai, India</p>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </motion.div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="section-container">
        <motion.div
          className="projects-section"
          ref={projectsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="projects-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="projects-header"
            >
              <h2>Notable Projects</h2>
            </motion.div>

            <div className="projects-timeline">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    x: project.align === "left" ? -100 : 100,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`project-item ${project.align}`}
                >
                  <div className="project-card">
                    <span className="project-period">{project.period}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <GitHubIcon /> View on GitHub <LaunchIcon fontSize="small" />
                      </motion.a>
                    )}
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
