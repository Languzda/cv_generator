import { Request, Response } from 'express'
import { generateResumeService } from '../services/resume'
import type { EducationRecord, ExperienceRecord, Language } from '@types'

const DUMMY_LANGUAGES: Language[] = [
    { language: 'Polski', level: 'Ojczysty' },
    { language: 'Angielski', level: 'B2' },
]

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

export async function generateResumeController(req: Request, res: Response) {
    const {
        name,
        experience,
        skills,
        phone,
        email,
        education,
        languages,
        description,
    } = req.body

    console.log(req.body)

    const pdfBuffer = await generateResumeService({
        name,
        experience,
        skills,
        phone,
        email,
        education,
        languages,
        description,
    })

    res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="cv.pdf"',
        'Content-Length': pdfBuffer.length,
    })

    // Wysyłamy binarne dane
    res.end(pdfBuffer)
}

export async function generateResumeControllerOld(req: Request, res: Response) {
    const { name, experience, skills, phone, email } = req.body

    const pdfBuffer = await generateResumeService({
        name,
        experience: DUMMY_EXPERIENCE,
        skills,
        phone,
        email,
        education: DUMMY_EDUCATION,
        languages: DUMMY_LANGUAGES,
        description: DUMMY_DESCRIPTION,
    })

    res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="cv.pdf"',
        'Content-Length': pdfBuffer.length,
    })

    // Wysyłamy binarne dane
    res.end(pdfBuffer)
}
