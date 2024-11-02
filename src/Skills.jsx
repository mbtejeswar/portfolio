import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("DATABASES");
  
    const skillsData = {
      LANGUAGES: ["Javascript", "Typescript", "Java"],
      FRONTEND: ["React.js", "Microfrontend Architecture", "HTML5", "CSS3"],
      BACKEND: ["Node.js", "ExpressJS"],
      DATABASES: ["MongoDB", "SQL Server"],
      "MACHINE LEARNING": ["TensorFlow", "NumPy", "Pandas", "scikit-learn"]
    };
  
    return (
      <div className="skills-wrapper">
        <motion.div 
          className="skills-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="skills-title">Skills</h1>
          
          <div className="skills-description">
            <p>An individual eager to learn and explore new fields of life and technology, with good problem solving skills and 
               fast learning abilities.</p>
            <p>Particularly interested in the field of web development and technologies like NextJS, NodeJS and MongoDB and 
               not shy to learn new things such as Machine Learning and Blockchain development.</p>
          </div>
  
          <div className="skills-content">
            <div className="skills-categories">
              {Object.keys(skillsData).map((category) => (
                <motion.button
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
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
              {skillsData[activeCategory].map((skill, index) => (
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
      </div>
    );
  };

  export default SkillsSection;