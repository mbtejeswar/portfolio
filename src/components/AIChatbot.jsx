import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Tejeswar's AI assistant. Ask me anything about his experience, skills, or projects!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base about Tejeswar
  const knowledgeBase = {
    experience: `Tejeswar has 7+ years of experience as a Full Stack Software Engineer, primarily in the financial services sector. He currently works at DBS Bank (since October 2022), previously at Datamatics (July 2021 - Oct 2022), and Cognizant (June 2018 - July 2021).`,

    skills: `Tejeswar's key skills include:
    - Backend: Java, Spring Boot, Node.js, Microservices
    - Frontend: React, Redux, TypeScript, Micro-frontends
    - Cloud/DevOps: OpenShift, AWS, Docker, Kubernetes, Jenkins
    - GenAI/ML: LangChain, RAG, ChromaDB, FAISS, Python`,

    dbs: `At DBS Bank, Tejeswar has:
    - Built resilient backend microservices using Java and Spring Boot
    - Led migration from monolith to microservices, improving load time by 65%
    - Reduced build times by 80% through CI/CD optimization
    - Developed an Autonomous RCA Agent using LangChain and RAG that reduced MTTR by 40%`,

    projects: `Notable projects include:
    1. Autonomous RCA Agent - Uses LangChain and RAG to automatically identify root causes
    2. Investment & Insurance Platform - Full-stack migration with 65% load time improvement
    3. GPS Asset Tracking Dashboard - Real-time tracking with WebSocket and Mapbox
    4. ERP Chatbot - AI-powered chatbot using TensorFlow and NLP`,

    genai: `Tejeswar has hands-on experience with GenAI technologies:
    - Built an Autonomous RCA Agent using Python, LangChain, and RAG
    - Uses ChromaDB for vector storage of historical incidents
    - Reduced Mean Time to Resolution (MTTR) by 40%
    - Experience with FAISS for similarity search`,

    contact: `You can reach Tejeswar at:
    - Email: mbtejeshwarreddy@gmail.com
    - Phone: +91 9550025584
    - LinkedIn: linkedin.com/in/mbtejeswar
    - GitHub: github.com/mbtejeswar`,

    education: `Tejeswar is based in Hyderabad, India and has a strong foundation in Data Structures and Algorithms, System Design, and Agile Methodologies.`,
  };

  const findResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    // Check for specific keywords
    if (lowerQuery.includes('experience') || lowerQuery.includes('year') || lowerQuery.includes('work')) {
      return knowledgeBase.experience;
    }
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech stack')) {
      return knowledgeBase.skills;
    }
    if (lowerQuery.includes('dbs') || lowerQuery.includes('current') || lowerQuery.includes('now')) {
      return knowledgeBase.dbs;
    }
    if (lowerQuery.includes('project')) {
      return knowledgeBase.projects;
    }
    if (lowerQuery.includes('genai') || lowerQuery.includes('ai') || lowerQuery.includes('langchain') || lowerQuery.includes('rag') || lowerQuery.includes('machine learning') || lowerQuery.includes('ml')) {
      return knowledgeBase.genai;
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone') || lowerQuery.includes('reach') || lowerQuery.includes('hire')) {
      return knowledgeBase.contact;
    }
    if (lowerQuery.includes('java') || lowerQuery.includes('spring') || lowerQuery.includes('backend')) {
      return `Tejeswar is highly proficient in Java and Spring Boot. He has built resilient backend microservices for the Investment & Insurance platform at DBS Bank, led full-stack migrations to Spring Boot microservices, and has extensive experience with RESTful APIs and microservice architecture.`;
    }
    if (lowerQuery.includes('react') || lowerQuery.includes('frontend') || lowerQuery.includes('micro-frontend')) {
      return `Tejeswar is skilled in React and has extensive experience with micro-frontend architecture. He led the migration to React micro-frontends at DBS Bank, enhanced custom React libraries, and built responsive UIs for various applications.`;
    }
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return `Hello! I'm here to help you learn about Tejeswar. Feel free to ask about his experience, skills, projects, or how to get in touch!`;
    }

    // Default response
    return `I can tell you about Tejeswar's:
    - Work experience and current role
    - Technical skills (Java, Spring Boot, React, etc.)
    - Projects (including his GenAI RCA Agent)
    - GenAI/ML experience
    - Contact information

What would you like to know?`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = findResponse(input);
      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? <CloseIcon /> : <SmartToyIcon />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chatbot-header">
              <SmartToyIcon />
              <div>
                <h4>AI Assistant</h4>
                <span>Ask me about Tejeswar</span>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`message ${msg.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                <div className="message bot typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects..."
              />
              <button onClick={handleSend} disabled={!input.trim()}>
                <SendIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
