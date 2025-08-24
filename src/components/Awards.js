import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiStar, FiCheckCircle } from 'react-icons/fi';

const AwardsSection = styled.section`
  padding: 100px 0;
`;

const AwardsContainer = styled.div`
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

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AwardCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
  }
`;

const AwardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const AwardIcon = styled.div`
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

const AwardInfo = styled.div`
  flex: 1;
`;

const AwardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #667eea;
`;

const AwardCompany = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const AwardDescription = styled.p`
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const AwardMeta = styled.div`
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

const AwardBadge = styled.div`
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

const Awards = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const awards = [
    {
      id: 1,
      title: 'WIZARD OF TECHNOLOGY',
      company: 'ANAROCK Technology',
      description: 'Awarded for exceptional tech wizardry and endless hustle during H2 FY25, recognizing outstanding contributions to technology and innovation.',
      period: 'H2 FY25',
      category: 'Technology Excellence',
      icon: <FiAward />
    },
    {
      id: 2,
      title: 'FIRST PLACE AWARD',
      company: 'ANAROCK - #bytebattle2025',
      description: 'Won first place in #bytebattle2025 competition as Team GOAL DIGGERS, showcasing outstanding achievement in technology and innovation.',
      period: '2025',
      category: 'Hackathon Winner',
      icon: <FiCheckCircle />
    }
  ];

  return (
    <AwardsSection id="awards">
      <AwardsContainer>
        <SectionTitle
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Awards & Recognition
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Recognition for outstanding contributions and achievements
        </SectionSubtitle>
        
        <AwardsGrid>
          {awards.map((award, index) => (
            <AwardCard
              key={award.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <AwardHeader>
                <AwardIcon>
                  {award.icon}
                </AwardIcon>
                <AwardInfo>
                  <AwardTitle>{award.title}</AwardTitle>
                  <AwardCompany>{award.company}</AwardCompany>
                </AwardInfo>
              </AwardHeader>
              
              <AwardDescription>{award.description}</AwardDescription>
              
              <AwardMeta>
                <MetaItem>
                  📅 {award.period}
                </MetaItem>
                <MetaItem>
                  🏢 ANAROCK
                </MetaItem>
              </AwardMeta>
              
              <AwardBadge>
                <FiStar />
                {award.category}
              </AwardBadge>
            </AwardCard>
          ))}
        </AwardsGrid>
      </AwardsContainer>
    </AwardsSection>
  );
};

export default Awards;
