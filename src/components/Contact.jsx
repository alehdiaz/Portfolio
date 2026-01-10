import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-12 border-t-2 border-dashed border-ink mt-8">
            <div className="flex flex-col items-center text-center">
                <h3 className="text-3xl font-bold mb-8">CONTACTO</h3>
                <div className="flex gap-8">
                    <a href="https://github.com/alehdiaz" target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-ink rounded-full hover:bg-ink hover:text-paper transition-all hover:-translate-y-2">
                        <Github size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/alejandro-cabrera-diaz/" target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-ink rounded-full hover:bg-ink hover:text-paper transition-all hover:-translate-y-2">
                        <Linkedin size={32} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alejofvc@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-ink rounded-full hover:bg-ink hover:text-paper transition-all hover:-translate-y-2">
                        <Mail size={32} />
                    </a>
                </div>
                <div className="mt-8 flex flex-col gap-2 opacity-80 font-bold">

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alejofvc@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">alejofvc@gmail.com</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
