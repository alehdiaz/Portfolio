import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Likeidiomas',
        description: 'Desarrollo de pagina web para empresa educativa.',
        images: ['/public/proyecto1.jpeg', '/public/proyecto1.1.jpeg', '/public/proyecto1.2.jpeg'],
        link: 'https://likeidiomas.com/',
    },
    {
        title: 'AltamarCrew',
        description: 'Desarrollo de pagina web para naviera.',
        images: ['/public/proyecto2.jpeg', '/public/proyecto2.1.jpeg', '/public/proyecto2.2.jpeg'],
        link: 'https://altamarcrew.com/',

    }
];

const ProjectCard = ({ project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (isHovered) {
            // Primer retraso antes de deslizar
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % project.images.length);
            }, 3500);
        } else {
            setCurrentIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHovered, project.images.length]);

    return (
        <div
            className="sketch-card flex flex-col group h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-video bg-gray-200 border-b-2 border-ink mb-4 overflow-hidden relative">
                <div
                    className="flex h-full w-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {project.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
            <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
            <p className="mb-4 flex-grow opacity-80">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="self-start sketch-btn flex items-center gap-2 mt-auto">
                Ver Proyecto <ExternalLink size={16} />
            </a>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="proyectos" className="mb-16">
            <h3 className="text-3xl font-bold mb-8 border-b-2 border-ink inline-block pb-2">PROYECTOS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
