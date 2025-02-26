import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const imagePath = path.join(__dirname, '../assets/pikachu.png')
const fileData = fs.readFileSync(imagePath)
const base64Img = fileData.toString('base64')
const dataUrl = `data:image/png;base64,${base64Img}`

type ResumeProps = {
    name: string
    experience: string
    skills: string
}

export function getHtmlScheme({
    name,
    experience,
    skills,
}: ResumeProps): string {
    // Tworzymy komponent React reprezentujący treść CV
    const Resume: React.FC<ResumeProps> = () => {
        return (
            <html lang="pl">
                <head>
                    <meta charSet="utf-8" />
                    <title>CV - {name}</title>
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
                                    src={dataUrl}
                                    alt="profile"
                                    className="w-48 h-48 object-cover rounded-full mx-auto"
                                />
                            </div>

                            {/* Kontakt */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold mb-2 uppercase">
                                    Kontakt
                                </h2>
                                <p className="font-bold">{name}</p>
                                <p className="mb-1">anna.kowalska@op.com</p>
                                <p className="mb-1">Tel: +48 534 000 000</p>
                                <p className="mb-1">Data ur.: 23.09.1989</p>
                                <p className="mb-1">Miasto: Kraków</p>
                            </div>

                            {/* Umiejętności */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold mb-2 uppercase">
                                    Umiejętności
                                </h2>
                                <p>{skills}</p>
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
                                    {name}
                                </h1>
                                <p className="text-gray-600">
                                    Praca z ludźmi to moja pasja. Zajmuję się
                                    rekrutacją od pięciu lat. Zainicjowałam od
                                    podstaw i studentów z powodzeniem w firmie
                                    THrR, co przyczyniło się do wzrostu liczby
                                    aplikacji. Chcę dalej rozwijać się w
                                    obszarze rekrutacji.
                                </p>
                            </div>

                            {/* Doświadczenie zawodowe */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold mb-2 uppercase">
                                    Doświadczenie zawodowe
                                </h2>
                                <div>
                                    {/* Przykładowa sekcja opisująca pracę – można wstawić dynamicznie */}
                                    <p className="font-bold">
                                        01.2016 – obecnie
                                    </p>
                                    <p>
                                        Specjalista ds. rekrutacji – Firma XYZ |
                                        Kraków
                                    </p>
                                    <p className="mb-2">
                                        Krótki opis stanowiska i obowiązków
                                        (przykładowy)
                                    </p>
                                </div>
                                <p>{experience}</p>
                            </div>

                            {/* Wykształcenie */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold mb-2 uppercase">
                                    Wykształcenie
                                </h2>
                                <p className="font-bold">10.2008 – 06.2013</p>
                                <p>Uniwersytet Jagielloński</p>
                                <p className="mb-2">Psychologia</p>
                            </div>

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
                                    Wszelkie gry wideo (Tatto, Biszescz,
                                    Loister), filmy i podróże
                                </p>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        )
    }

    // Renderujemy komponent do HTML-a:
    const htmlContent = ReactDOMServer.renderToString(
        <Resume name="Name" experience="Exp" skills="ski1" />
    )

    // Dodajemy do wygenerowanego HTML deklarację DOCTYPE
    return `<!DOCTYPE html>${htmlContent}`
}
