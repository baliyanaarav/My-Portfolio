import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeContext from './context/ThemeContext';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme === 'dark' ? '#0a0a0a' : '#ffffff'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#0a0a0a'};
  transition: all 0.3s ease;
`;

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        color: '#ffffff'
      }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Loading...</div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <AppContainer theme={theme}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Awards />
          <Contact />
          <Footer />
        </AppContainer>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
