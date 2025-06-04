import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  Database, 
  Globe, 
  Award, 
  GraduationCap, 
  Briefcase, 
  ChevronDown,
  ExternalLink,
  Calendar,
  MapPin,
  Star,
  Zap,
  Target,
  Users,
  Send,
  Download
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress indicator
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const skills = {
    "Programming Languages": [
      { name: "Java", level: 90, icon: "☕" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "SQL", level: 80, icon: "🗄️" }
    ],
    "Frontend Technologies": [
      { name: "ReactJS", level: 95, icon: "⚛️" },
      { name: "HTML/CSS", level: 90, icon: "🎨" },
      { name: "React Three Fiber", level: 75, icon: "🎲" }
    ],
    "Animation & UI": [
      { name: "Framer Motion", level: 90, icon: "🎭" },
      { name: "GSAP", level: 80, icon: "⚡" },
      { name: "Locomotive Scroll", level: 85, icon: "🚂" }
    ]
  };

  const projects = [
    {
      title: "Tailored Crop Prediction",
      date: "Mar 2025",
      type: "Team Project",
      description: "Web-based crop recommendation system analyzing environmental data to guide farmers on optimal crop selection.",
      features: [
        "Real-time environmental data processing",
        "Responsive UI with ReactJS and CSS",
        "Interactive animations with Framer Motion",
        "Agricultural insights generation"
      ],
      technologies: ["ReactJS", "CSS", "Framer Motion"],
      github: "#",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Web Forge",
      date: "Feb 2025",
      type: "Personal Project",
      description: "Custom webpage development service with component-based architecture and smooth UI transitions.",
      features: [
        "Fully customized webpage development",
        "Component-based architecture",
        "Responsive and interactive experiences",
        "Client specification alignment"
      ],
      technologies: ["ReactJS", "Framer Motion"],
      github: "#",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Email Verification System",
      date: "Jun 2024",
      type: "Self Project",
      description: "Secure Java-based email verification system with OTP authentication for enhanced application security.",
      features: [
        "OTP generation and validation",
        "User registration and login",
        "Email verification services",
        "Robust input validation"
      ],
      technologies: ["Java"],
      github: "#",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Computer Science and Engineering",
      duration: "Sep 2021 - Present",
      grade: "CGPA: 6.56",
      location: "Punjab, Jalandhar"
    },
    {
      institution: "Sri Chaitanya College",
      degree: "11th & 12th",
      duration: "Jun 2019 - Apr 2021",
      grade: "Percentage: 86.50%",
      location: "Andhra Pradesh"
    },
    {
      institution: "Sri Chaitanya School",
      degree: "10th Class",
      duration: "Jun 2017 - May 2018",
      grade: "CGPA: 10.0",
      location: "Andhra Pradesh"
    }
  ];

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="loading-logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Code size={48} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Uday Kumar
          </motion.h2>
          <motion.div
            className="loading-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      {/* Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />
      
      {/* Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-brand">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Code size={24} />
          </motion.div>
          <span>Uday Kumar</span>
        </div>
        <div className="nav-links">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section" id="hero">
        <div className="hero-bg-effects">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`shape shape-${i + 1}`}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hi, I'm <span className="gradient-text">Uday Kumar</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Full-Stack Developer & UI/UX Enthusiast
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Crafting beautiful, responsive web applications with modern technologies 
              and seamless user experiences.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <a href="/12109704_CV.pdf" download="Kella_Uday_Kumar_CV.pdf">
                  <motion.button
                    className="btn primary"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={20} />
                    Download CV
                  </motion.button>
                </a>
              <motion.a
                href="#contact"
                className="btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="image-container">
              <div className="profile-placeholder">
                {/* <Users size={80} /> */}
                <img src="profile4.png" alt="profile" className="profile-image" />
              </div>

              <div className="floating-icons">
                <motion.div
                  className="floating-icon"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚛️
                </motion.div>
                <motion.div
                  className="floating-icon"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ☕
                </motion.div>
                <motion.div
                  className="floating-icon"
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🎨
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about-section" id="about">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
            <div className="section-line" />
          </motion.div>
          
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p>
                I'm a passionate Computer Science student at Lovely Professional University 
                with a strong foundation in full-stack development. I specialize in creating 
                interactive and responsive web applications using modern technologies.
              </p>
              <p>
                My expertise lies in React ecosystem, animation libraries, and backend 
                development with Java. I'm always eager to learn new technologies and 
                contribute to innovative projects that make a difference.
              </p>
              
              <div className="contact-info">
                <motion.a 
                  href="mailto:udaykumarkella67@gmail.com"
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail size={20} />
                  udaykumarkella67@gmail.com
                </motion.a>
                <motion.a 
                  href="tel:+916302909502"
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone size={20} />
                  +91-6302909502
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/udaykumar06"
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.a>
                <motion.a 
                  href="https://github.com/Uday-kumar-06"
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github size={20} />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="stat-item">
                <Briefcase size={24} />
                <h3>3+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <Code size={24} />
                <h3>6+</h3>
                <p>Technologies</p>
              </div>
              <div className="stat-item">
                <Award size={24} />
                <h3>1</h3>
                <p>Certification</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="skills-section" id="skills">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Technical Skills</h2>
            <div className="section-line" />
          </motion.div>
          
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3>{category}</h3>
                <div className="skills-list">
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="projects-section" id="projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Featured Projects</h2>
            <div className="section-line" />
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="project-header"
                  style={{ background: project.gradient }}
                >
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <h3>{project.title}</h3>
                </div>
                
                <div className="project-content">
                  <p>{project.description}</p>
                  
                  <div className="project-features">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="feature-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Zap size={14} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                      Code
                    </motion.a>
                    <motion.a
                      href="#"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section ref={experienceRef} className="experience-section" id="experience">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Education & Training</h2>
            <div className="section-line" />
          </motion.div>
          
          <div className="experience-content">
            <div className="timeline">
              {/* Training */}
              <motion.div
                className="timeline-item training"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="timeline-icon">
                  <Award size={24} />
                </div>
                <div className="timeline-content">
                  <h3>Core and Advanced Java Training</h3>
                  <p className="institution">Board Infinity</p>
                  <p className="duration">Jun - Jul 2023</p>
                  <ul>
                    <li>Application Development</li>
                    <li>Hands-on experience in web applications</li>
                    <li>Practical implementation skills</li>
                  </ul>
                  <div className="certificate-badge">
                    <Star size={16} />
                    Certified
                  </div>
                </div>
              </motion.div>
              
              {/* Education */}
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item education"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="timeline-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div className="timeline-content">
                    <h3>{edu.degree}</h3>
                    <p className="institution">{edu.institution}</p>
                    <div className="edu-details">
                      <span className="duration">
                        <Calendar size={16} />
                        {edu.duration}
                      </span>
                      <span className="location">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                    </div>
                    <div className="grade">{edu.grade}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section" id="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Get In Touch</h2>
            <div className="section-line" />
            <p>Ready to collaborate? Let's create something amazing together!</p>
          </motion.div>
          
          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new opportunities and innovative projects.</p>
              
              <div className="contact-methods">
                <motion.a
                  href="mailto:udaykumarkella67@gmail.com"
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>udaykumarkella67@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="tel:+916302909502"
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <Phone size={24} />
                  <div>
                    <h4>Phone</h4>
                    <p>+91-6302909502</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/udaykumar06"
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <Linkedin size={24} />
                  <div>
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/udaykumar06</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://github.com/Uday-kumar-06"
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <Github size={24} />
                  <div>
                    <h4>GitHub</h4>
                    <p>github.com/Uday-kumar-06</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
            
            <motion.form
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-input"
                  rows="5"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Uday Kumar. Crafted with ❤️ and React</p>
            <div className="social-links">
              <motion.a
                href="https://github.com/Uday-kumar-06"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/udaykumar06"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:udaykumarkella67@gmail.com"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    );
  };
      
      export default Portfolio;