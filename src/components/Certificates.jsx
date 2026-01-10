import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const certificatesData = [
    {
        title: 'Curso de Iniciación al Desarrollo con IA',
        image: '/Portfolio/certificado-big-school.jpeg',
        description: `Ingeniería de Prompts: Dominio de modelos de razonamiento y auditoría técnica de código para evitar el "vibe coding".
Automatización SDLC: Generación de Historias de Usuario, Gherkin y tickets en Linear a partir de transcripciones de reuniones.
Gestión de Contexto: Implementación de agents.md y bases de conocimiento para evitar alucinaciones y guiar el estilo del código.
Prototipado Rápido: Despliegue de MVPs web funcionales desde bocetos visuales usando Firebase Studio.
Automatización de Workflows: Creación de flujos en n8n para web scraping inteligente e integración de APIs.
Calidad y Seguridad: Aplicación de TDD asistido por IA y auditoría de vulnerabilidades (Security by Design).`,
        link: 'https://drive.google.com/file/d/1amziA3TlVNTsAsEIEc8l2-x_-0B6uOfK/view',
        icon: '/Portfolio/icons/big-school.jpeg'
    },
    {
        title: 'Build a free website with WordPress',
        image: '/Portfolio/certificado-coursera.jpeg',
        description: `Desarrollo Web: Creación y configuración de sitios web desde cero, incluyendo la estructuración de menús y navegación.

Gestión de Contenidos (CMS): Manejo del panel de WordPress para la creación, edición y publicación de contenido digital.

Diseño y Creatividad: Aplicación de principios de diseño web y personalización visual para mejorar la experiencia del usuario (UX).`,
        link: 'https://www.coursera.org/account/accomplishments/verify/FV3JDSM8RGRF',
        icon: '/Portfolio/icons/coursera.jpg'
    }
];

const Certificates = () => {
    return (
        <section className="mb-16 w-full">
            <h3 className="text-3xl font-bold mb-8 border-b-2 border-ink inline-block pb-2">CURSOS Y CERTIFICACIONES</h3>

            <div className="flex flex-col gap-6">
                {certificatesData.map((cert, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row border-2 border-ink rounded-lg bg-white dark:bg-zinc-800 shadow-sketch overflow-hidden min-h-[160px]"
                    >
                        {/* Left Side: Certificate Image */}
                        <div className="md:w-1/3 w-full border-b-2 md:border-b-0 md:border-r-2 border-ink bg-gray-100 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side: Content */}
                        <div className="md:w-2/3 w-full p-4 flex flex-col justify-between">
                            <div>
                                <h4 className="text-xl font-bold mb-1 flex items-center gap-3">
                                    {cert.icon ? (
                                        <img
                                            src={cert.icon}
                                            alt="Logo"
                                            className="w-8 h-8 object-contain rounded-full border border-ink"
                                        />
                                    ) : (
                                        <Award size={24} className="text-ink" />
                                    )}
                                    {cert.title}
                                </h4>
                                <p className="text-sm opacity-80 mb-2 ml-1 whitespace-pre-line">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-dashed border-ink mt-auto">
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sketch-btn inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
                                >
                                    Ver Certificado <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
