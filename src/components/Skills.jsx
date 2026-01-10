import React, { useRef, useEffect } from 'react';
import { Code, Database, Server, Cpu, Globe, Terminal, Layout, Box, PenTool, GitBranch, Command } from 'lucide-react';

const skillsData = {
    Frontend: [
        { name: 'HTML', icon: '/Portfolio/icons/html-5-svgrepo-com (1).svg' },
        { name: 'CSS', icon: '/Portfolio/icons/css-3-svgrepo-com (1).svg' },
        { name: 'JavaScript', icon: '/Portfolio/icons/javascript-svgrepo-com (1).svg' },
        { name: 'ReactJS', icon: '/Portfolio/icons/react-svgrepo-com.svg' },
    ],
    Backend: [
        { name: 'Python', icon: '/Portfolio/icons/python-svgrepo-com (1).svg' },
        { name: 'MySQL', icon: '/Portfolio/icons/mysql-svgrepo-com.svg' },
        { name: 'SQLAlchemy', icon: '/Portfolio/icons/sql-svgrepo-com.svg' },
        { name: 'C', icon: '/Portfolio/icons/c-svgrepo-com.svg' },
    ],
    Aprendiendo: [
        { name: 'Docker', icon: '/Portfolio/icons/docker-svgrepo-com.svg' },
        { name: 'TypeScript', icon: '/Portfolio/icons/typescript-svgrepo-com.svg' },
        { name: 'Figma', icon: '/Portfolio/icons/figma-svgrepo-com.svg' },
        { name: 'TailwindCSS', icon: '/Portfolio/icons/tailwind-svgrepo-com.svg' },
    ],
    Herramientas: [
        { name: 'Git', icon: '/Portfolio/icons/git-svgrepo-com.svg' },
        { name: 'GitHub', icon: '/Portfolio/icons/github-142-svgrepo-com.svg' },
        { name: 'Terminal', icon: '/Portfolio/icons/terminal-svgrepo-com.svg' },
        { name: 'VSCode', icon: '/Portfolio/icons/vscode-svgrepo-com.svg' },
        { name: 'WordPress', icon: '/Portfolio/icons/wordpress-icon-svgrepo-com.svg' },
    ],
};

const Skills = () => {
    const scrollRef = useRef(null);
    const requestRef = useRef();

    const scrollPos = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    // Lógica de desplazamiento automático infinito
    const animate = () => {
        // Solo desplazar si NO se está arrastrando
        if (!isDragging.current && scrollRef.current) {
            scrollPos.current += 0.5;
            scrollRef.current.scrollLeft = scrollPos.current;

            // Restablecer al llegar al final del primer conjunto
            if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                scrollPos.current = 0;
                scrollRef.current.scrollLeft = 0;
            }
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    // Lógica de arrastre
    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        startScrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
            // Sincronizar la posición flotante con donde lo dejó el usuario
            scrollPos.current = scrollRef.current.scrollLeft;
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1;
        scrollRef.current.scrollLeft = startScrollLeft.current - walk;
    };

    const handleMouseLeave = () => {
        if (isDragging.current) {
            isDragging.current = false;
            if (scrollRef.current) {
                scrollRef.current.style.cursor = 'grab';
                // Sincronizar también si el mouse sale mientras se arrastra
                scrollPos.current = scrollRef.current.scrollLeft;
            }
        }
    };

    // Claves duplicadas para el desplazamiento infinito
    const categories = Object.entries(skillsData);
    const infiniteCategories = [...categories, ...categories];

    return (
        <section className="mb-8 overflow-hidden w-full">
            <h3 className="text-3xl font-bold mb-6 border-b-2 border-ink inline-block pb-2">CONOCIMIENTOS</h3>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-hidden cursor-grab py-2 select-none w-full"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {infiniteCategories.map(([category, items], index) => (
                    <div
                        key={`${category} -${index} `}
                        className="sketch-card p-6 flex flex-col gap-4 min-w-[300px] md:min-w-[350px] flex-shrink-0"
                    >
                        <h4 className="text-2xl font-bold text-center border-b-2 border-ink border-dashed pb-2 mb-2">
                            {category}
                        </h4>
                        <div className="grid grid-cols-2 gap-y-6 gap-x-2">
                            {items.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center text-center gap-2 group">
                                    <div className="transition-transform group-hover:-translate-y-1 flex items-center justify-center w-12 h-12 text-ink dark:text-paper">
                                        {typeof skill.icon === 'string' ? (
                                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain pointer-events-none" />
                                        ) : (
                                            skill.icon
                                        )}
                                    </div>
                                    <span className="text-sm font-semibold">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
