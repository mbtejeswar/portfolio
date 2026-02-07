import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome! Try: profile.resume(), profile.contact(), profile.skills()' }
  ]);
  const inputRef = useRef(null);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const executeCommand = (cmd) => {
    const command = cmd.trim();
    const newHistory = [...terminalHistory, { type: 'input', text: `> ${command}` }];

    switch (command) {
      case 'profile.resume()':
        newHistory.push({ type: 'output', text: 'Downloading resume...' });
        setTerminalHistory(newHistory);
        // Trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Tejeswar_Reddy_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      case 'profile.contact()':
        newHistory.push({ type: 'output', text: 'Email: mbtejeshwarreddy@gmail.com\nLinkedIn: linkedin.com/in/mbtejeswar' });
        setTerminalHistory(newHistory);
        break;
      case 'profile.skills()':
        newHistory.push({ type: 'output', text: '["Java", "Spring Boot", "React", "Microservices", "LangChain", "RAG"]' });
        setTerminalHistory(newHistory);
        break;
      case 'clear':
        setTerminalHistory([{ type: 'output', text: 'Welcome! Try: profile.resume(), profile.contact(), profile.skills()' }]);
        break;
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands:\n  profile.resume()  - Download resume\n  profile.contact() - View contact info\n  profile.skills()  - List skills\n  clear             - Clear terminal'
        });
        setTerminalHistory(newHistory);
        break;
      default:
        newHistory.push({ type: 'error', text: `Command not found: ${command}. Type 'help' for available commands.` });
        setTerminalHistory(newHistory);
    }
    setTerminalInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput);
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, my name is
          </motion.span>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Tejeswar Reddy
          </motion.h1>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Full Stack Software Engineer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            7+ years building scalable, high-performance applications for financial services.
            Specializing in <span className="highlight">Java & Spring Boot</span> microservices,
            <span className="highlight"> React</span> micro-frontends, and
            <span className="highlight"> GenAI/RAG</span> solutions.
          </motion.p>

          <motion.div
            className="hero-tech-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="tech-badge">Java</span>
            <span className="tech-badge">Spring Boot</span>
            <span className="tech-badge">React</span>
            <span className="tech-badge">Microservices</span>
            <span className="tech-badge">LangChain</span>
          </motion.div>

          <motion.div
            className="hero-social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/mbtejeswar/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#64ffda' }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/mbtejeswar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#64ffda' }}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              href="mailto:mbtejeshwarreddy@gmail.com"
              whileHover={{ y: -3, color: '#64ffda' }}
              aria-label="Email"
            >
              <EmailIcon />
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="btn-primary"
              whileHover={{ y: -3 }}
            >
              Download Resume
            </motion.a>
            <motion.button
              className="btn-secondary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: -3 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="file-name">developer.java</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
{`public class Developer {
  private String name = "Tejeswar";
  private int experience = 7;

  private String[] skills = {
    "Java", "Spring Boot",
    "React", "Microservices",
    "LangChain", "RAG"
  };

  public String buildSolution() {
    return "Scalable & Efficient";
  }
}`}
                </code>
              </pre>
            </div>
            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-title">terminal</span>
              </div>
              <div className="terminal-body">
                {terminalHistory.map((item, index) => (
                  <div key={index} className={`terminal-line ${item.type}`}>
                    {item.text.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                ))}
                <div className="terminal-input-line">
                  <span className="terminal-prompt">&gt;</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="terminal-input"
                    placeholder="profile.resume()"
                    spellCheck="false"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <KeyboardArrowDownIcon />
      </motion.div>
    </section>
  );
};

export default Hero;
