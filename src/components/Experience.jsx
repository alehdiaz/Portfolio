import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'Desarrollador WordPress',
        company: 'AltamarCrew',
        period: 'Julio 2025 - Septiembre 2025',
        location: 'Bogotá - Colombia',
        description: 'A cargo del diseño y contenido de página web desarrollada en Wordpress para naviera utilizando Divi, HTML, CSS y JavaScript.',
    },
    {
        role: 'Desarrollador WordPress',
        company: 'Centro de idiomas Like English',
        period: 'Enero 2025 - Julio 2025',
        location: 'Bogotá - Colombia',
        description: 'A cargo del diseño y contenido de página web desarrollada en Wordpress para empresa educativa utilizando Divi, HTML, CSS y JavaScript.',
    },
];

const Experience = () => {
    return (
        <section id="experiencia" className="mb-16">
            <h3 className="text-3xl font-bold mb-8 border-b-2 border-ink inline-block pb-2">EXPERIENCIA</h3>
            <div className="space-y-8 border-l-2 border-ink pl-8 ml-4 relative">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[41px] top-0 w-5 h-5 bg-ink rounded-full border-4 border-paper"></div>
                        <h4 className="text-2xl font-bold">{exp.role}</h4>
                        <div className="flex flex-wrap gap-4 text-sm opacity-80 my-2">
                            <span className="flex items-center gap-1"><Calendar size={16} /> {exp.period}</span>
                            <span className="flex items-center gap-1"><Briefcase size={16} /> {exp.company}</span>
                            <span className="flex items-center gap-1"><MapPin size={16} /> {exp.location}</span>
                        </div>
                        {exp.description && <p className="mb-2 italic border-l-2 border-pencil pl-4 my-2">{exp.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
