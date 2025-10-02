import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Development from './components/Development';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GuidePage from './components/GuidePage';
import QuizPage from './components/QuizPage';
import ResourcesPage from './components/ResourcesPage';

const App: React.FC = () => {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      // Default to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // Default for SSR or environments without localStorage
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const navigate = (pageName: string) => {
    setPage(pageName);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const mainClasses = "min-h-screen bg-white text-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black dark:text-gray-200";

  if (page === 'guide') {
    return <GuidePage navigate={navigate} theme={theme} toggleTheme={toggleTheme} />;
  }

  if (page === 'quiz') {
    return <QuizPage navigate={navigate} theme={theme} toggleTheme={toggleTheme} />;
  }

  if (page === 'resources') {
    return <ResourcesPage navigate={navigate} theme={theme} toggleTheme={toggleTheme} />;
  }

  return (
    <div className={mainClasses}>
      <Navbar navigate={navigate} theme={theme} toggleTheme={toggleTheme}/>
      <main>
        <Home navigate={navigate} />
        <About />
        <Development />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;