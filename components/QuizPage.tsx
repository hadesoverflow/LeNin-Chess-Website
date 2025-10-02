import React from 'react';
import Quiz from './Quiz';
import Navbar from './Navbar';

interface QuizPageProps {
    navigate: (page: string) => void;
    theme: string;
    toggleTheme: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ navigate, theme, toggleTheme }) => {
    const pageClasses = "min-h-screen font-sans bg-white text-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black dark:text-gray-200";
    
    return (
        <div className={pageClasses}>
            <Navbar navigate={navigate} theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Quiz />
            </main>
             <footer className="text-center py-8 text-gray-500 dark:text-gray-500">
                &copy; {new Date().getFullYear()} LeNin Chess. All rights reserved.
            </footer>
        </div>
    );
};

export default QuizPage;