import React from 'react';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { smoothScroll } from '../utils/scroll';

const Header = ({ theme, toggleTheme }) => {

    return (
        <nav className="flex justify-between items-center p-6 mb-8 border-b-2 border-ink border-dashed">
            <div className="flex gap-4">
                <a href="https://github.com/alehdiaz" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-ink rounded-full hover:bg-ink hover:text-paper transition-all hover:-translate-y-1">
                    <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/alejandro-cabrera-diaz/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-ink rounded-full hover:bg-ink hover:text-paper transition-all hover:-translate-y-1">
                    <Linkedin size={24} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alejofvc@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-ink rounded-full hover:bg-ink hover:text-paper transition-all hover:-translate-y-1">
                    <Mail size={24} />
                </a>
            </div>
            <div className="flex items-center gap-6">
                <ul className="hidden md:flex gap-6 text-xl">
                    {['Experiencia', 'Proyectos', 'Contacto'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => smoothScroll(e, item.toLowerCase())}
                                className="hover:underline decoration-wavy decoration-2 underline-offset-4"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full border-2 border-ink hover:bg-ink hover:text-paper transition-all"
                    aria-label="Toggle Theme"
                >
                    {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Header;
