import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 border-b-2 border-ink inline-block pb-2">EDUCACION</h3>
            <div className="p-6 border-2 border-ink rounded-lg bg-white dark:bg-zinc-800 shadow-sketch flex gap-4 items-start">
                <GraduationCap size={48} className="shrink-0" />
                <div>
                    <h4 className="text-2xl font-bold">Ingeniería Informática</h4>
                    <h5 className="text-xl">Facultad de Ingeniería - Universidad de Buenos Aires</h5>
                    <p className="opacity-70 mt-1">Marzo 2022 - Cursando actualmente</p>
                    <p className="opacity-70">Buenos Aires, Argentina</p>
                    <p className="mt-4 italic border-t border-dashed border-ink pt-2">
                        "Rendimiento académico alto en materias de computación, manteniendo un promedio de 8 al 3er año de la carrera."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
