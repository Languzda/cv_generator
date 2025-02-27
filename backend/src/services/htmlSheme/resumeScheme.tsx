import React from 'react'
import type { ResumeProps } from '@types'
import Experience from './components/Experience'
import Education from './components/Education'

const Resume: React.FC<ResumeProps> = ({
    contact,
    education,
    skills,
    description,
    urlImage,
    experience,
}) => {
    const resumeTitle = `CV | ${contact.name}`

    return (
        <html lang="pl">
            <head>
                <meta charSet="utf-8" />
                <title>{resumeTitle}</title>
                {/* Wczytanie TailwindCSS z CDN (można podmienić na własny plik) */}
                <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
            </head>
            <body className="p-8 text-gray-800 font-sans text-sm leading-relaxed">
                {/* Kontener główny, dzielimy na dwie kolumny */}
                <div className="flex">
                    {/* Lewa kolumna */}
                    <div className="w-1/3 pr-6 border-r border-gray-300">
                        {/* Sekcja ze zdjęciem */}
                        <div className="mb-6">
                            <img
                                src={urlImage}
                                alt="profile"
                                className="w-48 h-48 object-cover rounded-full mx-auto"
                            />
                        </div>

                        {/* Kontakt */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 uppercase">
                                Kontakt
                            </h2>
                            <p className="font-bold">{contact.name}</p>
                            <p className="mb-1">{contact.email}</p>
                            <p className="mb-1">{contact.phone}</p>
                        </div>

                        {/* Umiejętności */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 uppercase">
                                Umiejętności
                            </h2>
                            {skills.map((skill, index) => (
                                <p key={index}>{skill}</p>
                            ))}
                        </div>

                        {/* Języki */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 uppercase">
                                Języki
                            </h2>
                            <p>Polski (ojczysty)</p>
                            <p>Angielski (poziom C1)</p>
                        </div>
                    </div>

                    {/* Prawa kolumna */}
                    <div className="w-2/3 pl-6">
                        {/* Nagłówek CV */}
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold mb-1">
                                CV <span className="text-gray-500">|</span>{' '}
                                {contact.name}
                            </h1>
                            <p className="text-gray-600">{description}</p>
                        </div>

                        {/* Doświadczenie zawodowe */}
                        <Experience experience={experience} />

                        {/* Wykształcenie */}
                        <Education education={education} />

                        {/* Szkolenia, Kursy, Certyfikaty */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 uppercase">
                                Szkolenia, kursy, certyfikaty
                            </h2>
                            <p className="font-bold">03.2017</p>
                            <p className="mb-2">Szkolenie: SmmCMeb</p>
                        </div>

                        {/* Zainteresowania */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 uppercase">
                                Zainteresowania
                            </h2>
                            <p>
                                Wszelkie gry wideo (Tatto, Biszescz, Loister),
                                filmy i podróże
                            </p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default Resume
