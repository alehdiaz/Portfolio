import React from 'react';
import { smoothScroll } from '../utils/scroll';

const Hero = ({ theme }) => {

    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 animate-fade-in-up">
            <div className="flex-1 space-y-4">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                    HOLA, SOY <br />
                    <span className="text-sketch-blue relative inline-block transform -rotate-2">
                        ALEJANDRO
                        <svg className="absolute w-[110%] h-[10px] -bottom-2 -left-2 text-ink opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </span>
                </h2>
                <p className="text-xl md:text-2xl opacity-90 max-w-lg">
                    Desarrollador con experiencia en diseño de páginas web utilizando tecnologías front-end y back-end.
                </p>
                <div className="flex gap-3 pt-4">
                    <a
                        href="#proyectos"
                        onClick={(e) => smoothScroll(e, 'proyectos')}
                        className="sketch-btn bg-ink text-paper hover:bg-transparent hover:text-ink dark:bg-paper dark:text-ink dark:hover:bg-zinc-700 dark:hover:text-paper"
                    >
                        Ver Proyectos
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alejofvc@gmail.com" target="_blank" rel="noopener noreferrer" className="sketch-btn">
                        Contactarme
                    </a>
                </div>
            </div>

            {/* Video de perfil */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Borde decorativo detrás */}
                <div className="absolute inset-0 border-4 border-ink rounded-full border-dashed"></div>

                {/* Contenedor del video */}
                <div className="absolute inset-0 bg-transparent rounded-full border-4 border-ink overflow-hidden isolate">
                    <video
                        key={theme}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover scale-[1.02]"
                    >
                        <source src={theme === 'dark' ? "/Portfolio/perfil-b.mp4" : "/Portfolio/perfil-w.mp4"} type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Hero;
