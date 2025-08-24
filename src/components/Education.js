import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBook, FiStar } from 'react-icons/fi';

const EducationSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
`;

const EducationContainer = styled.div`
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const EducationIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`;

const EducationInfo = styled.div`
  flex: 1;
`;

const DegreeTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #667eea;
`;

const InstitutionName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const EducationMeta = styled.div`
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

const CGPA = styled.div`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const education = [
    {
      id: 1,
      degree: 'BE CSE',
      institution: 'UIET, Panjab University, Chandigarh',
      location: 'Chandigarh, India',
      period: '2021 - 2025',
      cgpa: '8.85',
      icon: <FiAward />
    },
    {
      id: 2,
      degree: 'Class 12th',
      institution: 'Scottish International School, Shamli',
      location: 'Shamli, India',
      period: '2020 - 2021',
      cgpa: '99.20%',
      icon: <FiStar />
    },
    {
      id: 3,
      degree: 'Class 10th',
      institution: 'Scottish International School, Shamli',
      location: 'Shamli, India',
      period: '2019 - 2020',
      cgpa: '93.2%',
      icon: <FiAward />
    }
  ];

  return (
    <EducationSection id="education">
      <EducationContainer>
        <SectionTitle
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Education
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My academic journey and educational background
        </SectionSubtitle>
        
        <EducationGrid>
          {education.map((edu, index) => (
            <EducationCard
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <EducationHeader>
                <EducationIcon>
                  {edu.icon}
                </EducationIcon>
                <EducationInfo>
                  <DegreeTitle>{edu.degree}</DegreeTitle>
                  <InstitutionName>{edu.institution}</InstitutionName>
                </EducationInfo>
              </EducationHeader>
              
              <EducationMeta>
                <MetaItem>
                  📍 {edu.location}
                </MetaItem>
                <MetaItem>
                  📅 {edu.period}
                </MetaItem>
              </EducationMeta>
              
              <CGPA>
                <FiAward />
                {edu.cgpa}
              </CGPA>
            </EducationCard>
          ))}
        </EducationGrid>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;
