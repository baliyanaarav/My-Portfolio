import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiUser, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #888;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #667eea;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #aaa;
    margin-bottom: 1.5rem;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.3;
  }
`;

const ImagePlaceholder = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  font-weight: 700;
`;

const PersonalInfo = styled.div`
  margin-top: 2rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  
  svg {
    color: #667eea;
    font-size: 1.2rem;
  }
  
  span {
    font-weight: 500;
  }
`;

const DownloadCV = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const personalInfo = [
    { icon: <FiUser />, label: 'Name', value: 'Aarav Baliyan' },
    { icon: <FiMapPin />, label: 'Location', value: 'India' },
    { icon: <FiMail />, label: 'Email', value: 'aaravbaliyan0001@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 8791598500' }
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get to know me better and understand my passion for creating amazing digital experiences
        </SectionSubtitle>
        
        <AboutContent>
          <AboutText>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Who I Am
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I'm a passionate Software Engineer at ANAROCK with expertise in building 
              scalable and intelligent systems. I specialize in Generative AI, DevOps 
              practices, Machine Learning, and modern software development technologies.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              My journey in tech started with curiosity and has evolved into a deep passion 
              for solving complex problems through elegant code and efficient algorithms. 
              I believe in continuous learning and staying updated with the latest technologies.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or working on personal projects to enhance my skills.
            </motion.p>
            
            <PersonalInfo>
              {personalInfo.map((info, index) => (
                <InfoItem
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {info.icon}
                  <div>
                    <span>{info.label}:</span> {info.value}
                  </div>
                </InfoItem>
              ))}
            </PersonalInfo>
            
            <DownloadCV
              href="https://drive.google.com/file/d/19gZwcfhRCaUCfJebcrgMKst7CjnhyxuY/view?usp=sharing"
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download Resume
            </DownloadCV>
          </AboutText>
          
          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/self.jpeg`}
              alt="Aarav Baliyan" 
              style={{ 
                width: "300px", 
                height: "400px", 
                borderRadius: "20px", 
                objectFit: "cover" 
              }} 
            />
          </AboutImage>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
