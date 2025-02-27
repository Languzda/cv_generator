import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Resume from './resumeScheme'
import type { ContactInfo, ExperienceRecord, EducationRecord } from '@types'

const imagePath = path.join(__dirname, '../../assets/pikachu.png')
const fileData = fs.readFileSync(imagePath)
const base64Img = fileData.toString('base64')
const dataUrl = `data:image/png;base64,${base64Img}`

const DUMMY_DESCRIPTION = `Praca z ludźmi to moja pasja. Zajmuję się
                                    rekrutacją od pięciu lat. Zainicjowałam od
                                    podstaw i studentów z powodzeniem w firmie
                                    THrR, co przyczyniło się do wzrostu liczby
                                    aplikacji. Chcę dalej rozwijać się w
                                    obszarze rekrutacji.`

const DUMMY_EXPERIENCE: ExperienceRecord[] = [
    {
        position: 'Rekruter',
        company: 'THrR',
        startDate: '01.2017',
        endDate: 'obecnie',
        description: `Zarządzanie procesem rekrutacji od A do Z.
                                    Wsparcie działów w doborze odpowiednich
                                    kandydatów.`,
    },
    {
        position: 'Specjalista ds. rekrutacji',
        company: 'THrR',
        startDate: '01.2015',
        endDate: '12.2016',
        description: `Przygotowywanie ogłoszeń rekrutacyjnych.
                                    Selekcja CV. Przeprowadzanie rozmów
                                    kwalifikacyjnych.`,
    },
]

const DUMMY_EDUCATION: EducationRecord[] = [
    {
        school: 'Uniwersytet Warszawski',
        major: 'Psychologia',
        startDate: '09.2010',
        endDate: '06.2015',
        description: `Studia magisterskie na kierunku psychologia.
                                    Specjalizacja w psychologii pracy.`,
    },
    {
        school: 'Uniwersytet Warszawski',
        major: 'Psychologia',
        startDate: '09.2007',
        endDate: '06.2010',
        description: `Studia licencjackie na kierunku psychologia.`,
    },
]

export type args = {
    cv: {
        contact: ContactInfo
        experience: string
        skills: string[]
    }
}

export function getHtmlScheme({ cv }: args): string {
    // Renderujemy komponent do HTML-a:
    const htmlContent = ReactDOMServer.renderToString(
        <Resume
            contact={cv.contact}
            education={DUMMY_EDUCATION}
            urlImage={dataUrl}
            experience={DUMMY_EXPERIENCE}
            skills={cv.skills}
            description={DUMMY_DESCRIPTION}
        />
    )

    // Dodajemy do wygenerowanego HTML deklarację DOCTYPE
    return `<!DOCTYPE html>${htmlContent}`
}
