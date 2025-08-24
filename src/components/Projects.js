import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub } from 'react-icons/fi';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
`;

const ProjectsContainer = styled.div`
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

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 10px 20px;
  border: 2px solid #667eea;
  background: ${props => props.active ? '#667eea' : 'transparent'};
  color: ${props => props.active ? 'white' : '#667eea'};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  font-weight: 700;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const ProjectDescription = styled.p`
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 8px 16px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    color: white;
  }
`;

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      description: 'A comprehensive library management system built with C++ featuring book management, member registration, and automated checkout processes.',
      image: '📚',
      category: 'fullstack',
      technologies: ['C++', 'File I/O', 'Data Structures', 'Object-Oriented Programming'],
      github: 'https://github.com/baliyanaarav/librarymanagement',
      live: 'https://github.com/baliyanaarav/librarymanagement'
    },
    {
      id: 2,
      title: 'Senthil Cinema',
      description: 'A full-stack web-based cinema booking system with movie listings, seat selection, booking management, and user authentication.',
      image: '🎬',
      category: 'fullstack',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Database'],
      github: 'https://github.com/baliyanaarav/senthil-cinema',
      live: 'https://github.com/baliyanaarav/senthil-cinema'
    },
    {
      id: 3,
      title: 'Pig Game',
      description: 'An interactive dice game built with HTML, CSS, and JavaScript featuring score tracking and player turns.',
      image: '🎲',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/baliyanaarav/pigGame',
      live: 'https://github.com/baliyanaarav/pigGame'
    },
    {
      id: 4,
      title: 'Potato Leaf Disease Classification',
      description: 'Machine learning project for classifying potato leaf diseases using computer vision and deep learning techniques.',
      image: '🥔',
      category: 'fullstack',
      technologies: ['Python', 'Machine Learning', 'Jupyter Notebook', 'Computer Vision'],
      github: 'https://github.com/baliyanaarav/Potato-Leaf-Disease-Classification',
      live: 'https://github.com/baliyanaarav/Potato-Leaf-Disease-Classification'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'A responsive weather application providing real-time weather information and forecasts.',
      image: '🌤️',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      github: 'https://github.com/baliyanaarav/Weather-App',
      live: 'https://github.com/baliyanaarav/Weather-App'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: '📁' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'fullstack', label: 'Full Stack', icon: '⚙️' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A showcase of my recent work and projects across different technologies
        </SectionSubtitle>
        
        <FilterButtons
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon} {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <ProjectsGrid>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                layout
              >
                <ProjectImage>
                  {project.image}
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectTech>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                  
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      View Code
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
