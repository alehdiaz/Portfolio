import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'Web Engineer & UI Designer',
        company: 'Empresa: Centro de idiomas Like English',
        period: 'Enero 2025 - Actual',
        location: 'Bogotá - Colombia',
        description: [
            'Diseño y arquitectura completa del sitio institucional mediante WordPress y Divi, personalizando funcionalidades con HTML5, CSS3 y JavaScript.',
            'Optimización y mantenimiento preventivo de la plataforma.',
            'Creación de activos visuales y material publicitario, alineando la identidad de marca con la interfaz de usuario (UI).'
        ],
        link: 'https://likeidiomas.com/'
    },
    {
        role: 'Desarrollador WordPress',
        company: 'Empresa: AltamarCrew',
        period: 'Julio 2025 - Septiembre 2025',
        location: 'Bogotá - Colombia',
        description: 'A cargo del diseño y desarrollo del contenido de página web en Wordpress y Divi, personalizando funcionalidades con HTML5, CSS3 y JavaScript para naviera.',
        link: 'https://altamarcrew.com/'
    },
];

const Experience = () => {
    return (
        <section id="experiencia" className="mb-16">
            <h3 className="text-3xl font-bold mb-8 border-b-2 border-ink inline-block pb-2">EXPERIENCIA</h3>
            <div className="space-y-8 border-l-2 border-ink pl-8 ml-4 relative">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                        <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-paper ${exp.period.includes('Actual') ? 'bg-green-600' : 'bg-ink'}`}></div>
                        <h4 className="text-2xl font-bold">{exp.role}</h4>
                        <div className="flex flex-wrap gap-4 text-sm opacity-80 my-2">
                            <span className="flex items-center gap-1"><Calendar size={16} /> {exp.period}</span>
                            <span className="flex items-center gap-1"><Briefcase size={16} /> {exp.company}</span>
                            <span className="flex items-center gap-1"><MapPin size={16} /> {exp.location}</span>
                        </div>
                        {Array.isArray(exp.description) ? (
                            <ul className="list-disc list-inside mb-2 italic border-l-2 border-pencil pl-4 my-2">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            exp.description && <p className="mb-2 italic border-l-2 border-pencil pl-4 my-2">{exp.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
