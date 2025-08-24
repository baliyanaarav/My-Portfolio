import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const ExperienceSection = styled.section`
  padding: 100px 0;
`;

const ExperienceContainer = styled.div`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #667eea, #764ba2);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  
  &:nth-child(odd) {
    justify-content: flex-start;
    
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
  
  &:nth-child(even) {
    justify-content: flex-end;
    
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 45%;
  position: relative;
  
  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    
    @media (max-width: 768px) {
      left: -10px;
      border-right-color: rgba(255, 255, 255, 0.05);
    }
  }
  
  &:nth-child(odd)::before {
    right: -10px;
    border-left-color: rgba(255, 255, 255, 0.05);
    
    @media (max-width: 768px) {
      right: auto;
      left: -10px;
      border-left-color: transparent;
      border-right-color: rgba(255, 255, 255, 0.05);
    }
  }
  
  &:nth-child(even)::before {
    left: -10px;
    border-right-color: rgba(255, 255, 255, 0.05);
    
    @media (max-width: 768px) {
      left: -10px;
      border-right-color: rgba(255, 255, 255, 0.05);
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  transform: translateX(-50%);
  border: 4px solid #0a0a0a;
  
  @media (max-width: 768px) {
    left: 20px;
    transform: translateX(-50%);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #667eea;
`;

const CompanyName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #fff;
`;

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  font-size: 0.9rem;
`;

const JobDescription = styled.p`
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const JobResponsibilities = styled.ul`
  color: #aaa;
  line-height: 1.6;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const CompanyLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      title: 'Software Development Engineer - I',
      company: 'ANAROCK Property Consultants',
      location: 'Mumbai, India',
      period: 'June 2025 - Present',
      description: 'Designing and implementing scalable backend systems using Python and Gen AI for automation.',
      responsibilities: [
        'Building Call Auditing System that automates call analysis for quality assurance',
        'Contributing to full-stack development integrating frontend and backend components',
        'Driving AI/ML initiatives to improve decision-making capabilities',
        'Implementing performance monitoring with New Relic for application reliability'
      ],
      companyUrl: 'https://www.anarock.com'
    },
    {
      id: 2,
      title: 'Software Development Engineer Intern',
      company: 'ANAROCK Property Consultants',
      location: 'Mumbai, India',
      period: 'November 2024 - May 2025',
      description: 'Assisted in backend development and API integration using Python and Gen AI.',
      responsibilities: [
        'Developed Automated PPT Generation Tool using GPT models, enhancing sales team performance by 40%',
        'Worked with Gen AI for automation and data analysis to improve operational workflows',
        'Collaborated on full-stack development projects contributing to backend services and frontend interfaces',
        'Assisted in backend development and API integration using Python'
      ],
      companyUrl: 'https://www.anarock.com'
    },
    {
      id: 3,
      title: 'AI/ML Intern',
      company: 'DIC, Panjab University',
      location: 'Chandigarh, India',
      period: 'June 2023 - July 2023',
      description: 'Developed machine learning models for medical image classification.',
      responsibilities: [
        'Developed ML model for classifying Diabetic Retinopathy into five stages using AI/ML techniques',
        'Collaborated with researchers to improve model accuracy and performance',
        'Used Python and machine learning libraries to preprocess data and train models',
        'Worked with medical image datasets for disease classification'
      ],
      companyUrl: 'https://puchd.ac.in'
    }
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My professional journey and work experience in the tech industry
        </SectionSubtitle>
        
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <TimelineDot />
              <TimelineContent>
                <JobTitle>{experience.title}</JobTitle>
                <CompanyName>{experience.company}</CompanyName>
                
                <JobMeta>
                  <MetaItem>
                    <FiCalendar />
                    {experience.period}
                  </MetaItem>
                  <MetaItem>
                    <FiMapPin />
                    {experience.location}
                  </MetaItem>
                </JobMeta>
                
                <JobDescription>{experience.description}</JobDescription>
                
                <JobResponsibilities>
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </JobResponsibilities>
                
                <CompanyLink
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink />
                  Visit Company
                </CompanyLink>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
